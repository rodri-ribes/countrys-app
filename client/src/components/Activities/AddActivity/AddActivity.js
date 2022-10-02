import style from "./addActivity.module.css"
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import validate from "../../functions/validate";
import Successful from "../../functions/Successful/Successful";
import { getCountrys } from "../../../redux/features/user/userSlice";


const { REACT_APP_API } = process.env

export default function AddActivity() {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountrys())
    }, [dispatch]);

    let countrys = useSelector(state => state.user.countrys)
    let activity = {
        name: "",
        dificulty: 1,
        duration: 0,
        season: "",
        country: "",
    }

    let [input, setInput] = useState(activity);

    let [error, setError] = useState({});

    let [errorVisbile, setErrorVisbile] = useState(false);

    let [visible, setVisible] = useState(false);

    let handleOnChange = (e) => {
        setInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        setError(validate({ ...input, [e.target.name]: e.target.value }));
    }

    let handleSubmit = async (e) => {

        if (!input.name || Object.keys(error).length > 0) {
            setErrorVisbile(true)
        } else {
            setVisible(true);
            try {
                await axios.post(`${REACT_APP_API}/activities`, {
                    input
                })
            } catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                setVisible(false);
                setInput(activity)
            }, 2000);
        }
    }

    return (
        <div className={style.Container}>
            <form className={style.form}>
                {visible ?
                    <div className={style.Sucess}>
                        <Successful text="Activity loaded successfully..." />
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
                        <div className={style.InputsLabels}>
                            <label>Country: </label>
                            <select name="country" value={input.country} onChange={handleOnChange}>
                                {countrys.map(c => {
                                    return (
                                        <option value={c.id} key={c.id}>{c.name}</option>
                                    )
                                })}
                            </select>
                            {errorVisbile ? <p className={style.InputsLabels__error}>{error.country}</p> : null}
                        </div>
                        <input type="button" onClick={() => handleSubmit()} value="Load" />
                    </div>
                }
            </form>
        </div>
    );
}
