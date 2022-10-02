import style from "./modifyActivity.module.css"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import validate from "../../functions/validate";
import { getActivitiesAction } from "../../../redux/features/user/userSlice";
import NotFound from '../../functions/NotFound/NotFound';
import Successful from "../../functions/Successful/Successful";


const { REACT_APP_API } = process.env


export default function ModifyActivity() {


    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivitiesAction())
    }, [dispatch])

    let activities = useSelector(state => state.user.activities)


    let list = false

    if (activities.length !== 0) {
        list = activities
    }

    let activity = {
        name: "",
        dificulty: 0,
        duration: 0,
        season: "",
        country: 0,
    }

    let [input, setInput] = useState(activity);

    let [error, setError] = useState({});

    let [errorVisbile, setErrorVisbile] = useState(false);

    let [visible, setVisible] = useState(false);

    let [view, setView] = useState(true);

    let [mostrarError, setMostrarError] = useState(false);

    let handleOnChange = (e) => {
        setInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        setError(validate({ ...input, [e.target.name]: e.target.value }));
    }

    let deleteSubmit = async () => {

        if (!input.name || Object.keys(error).length > 0) {
            setErrorVisbile(true)
        } else {
            setVisible(true);
            try {
                await axios.put(`${REACT_APP_API}/activities`, {
                    input
                })
            } catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                setVisible(false);
                setView(true);
                setInput(activity)
                dispatch(getActivitiesAction())
            }, 2000);
        }
    }

    let passForm = () => {
        if (input.country === "not" || input.country === 0) {
            setMostrarError(true);
        } else {
            setView(false);
        }
    }

    return (
        <div className={style.Container}>
            {view ?
                list ?
                    <div className={style.InputActivities}>
                        <select name="country" onChange={handleOnChange}>
                            <option value="not">Select an activity</option>
                            {list.map(a => {
                                return (<option key={a.id} value={a.id}>{a.name} {a.countruies}</option>)
                            })}
                        </select>
                        <div className={style.ErrorAndBtn}>
                            {mostrarError ? <h3 className={style.InputActivities__error}>Select an activity to modify</h3> : null}
                            <button className={style.BtnModify} onClick={() => passForm()}>Select</button>
                        </div>
                    </div>

                    :
                    <div className={style.NotFound}>
                        <NotFound text="No Activities Loaded" />
                    </div>
                :
                <form className={style.form}>
                    {visible ?
                        <div className={style.Sucess}>
                            <Successful text="Successfully Modified..." />
                        </div>
                        :
                        <div className={style.ContainInputs}>
                            <div className={style.InputsLabels}>
                                <label>Name: </label>
                                <input type="text" value={input.name} name="name" onChange={handleOnChange} required minLength="5"></input>
                                {errorVisbile ? <p className={style.InputsLabels__error}>{error.name}</p> : null}
                            </div>
                            <div className={style.InputsLabels}>
                                <label>Dificulty: </label>
                                <div className={style.InputsLabels_dificulty}>
                                    <input type="range" value={input.dificulty} min="1" max="5" name="dificulty" onChange={handleOnChange}></input>
                                    <h4>{input.dificulty}</h4>
                                </div>
                                {errorVisbile ? <p className={style.InputsLabels__error}>{error.dificulty}</p> : null}
                            </div>
                            <div className={style.InputsLabels}>
                                <label>Duration: </label>
                                <input type="number" value={input.duration} name="duration" onChange={handleOnChange}></input>
                                {errorVisbile ? <p className={style.InputsLabels__error}>{error.duration}</p> : null}
                            </div>
                            <div className={style.InputsLabels}>
                                <label>Season: </label>
                                <select name="season" value={input.season} onChange={handleOnChange}>
                                    <option value="not">Choose a season</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Fall">Fall</option>
                                    <option value="Winter">Winter</option>
                                    <option value="Spring">Spring</option>
                                </select>
                                {errorVisbile ? <p className={style.InputsLabels__error}>{error.season}</p> : null}
                            </div>
                            <input type="button" onClick={() => deleteSubmit()} value="Modify" />
                        </div>
                    }
                </form>
            }
        </div>
    );
}
