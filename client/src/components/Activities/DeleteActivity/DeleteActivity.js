import style from "./deleteActivity.module.css"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { getActivitiesAction } from "../../../redux/features/user/userSlice";
import NotFound from '../../functions/NotFound/NotFound';
import Successful from "../../functions/Successful/Successful";

const { REACT_APP_API } = process.env

export default function DeleteActivity() {


    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivitiesAction())
    }, [dispatch])

    let activities = useSelector(state => state.user.activities)

    let list = false

    if (activities.length !== 0) {
        list = activities
    }

    let [input, setInput] = useState(0);

    let [error, setError] = useState(false);

    let [visible, setVisible] = useState(false);

    let deleteSubmit = async () => {

        if (input === "not" || input === 0) {
            setError(true)
        } else {
            setError(false)
            setVisible(true);
            try {
                await axios.delete(`${REACT_APP_API}/activities/${input}`)
            } catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                setVisible(false);
                setInput(0)
                dispatch(getActivitiesAction())
            }, 2000);
        }
    }

    return (
        <div className={style.Container}>
            {visible ?
                <div className={style.Sucess}>
                    <Successful text="Successfully Removed..." />
                </div>
                :
                list ?
                    <div className={style.InputActivities}>
                        <select name="activity" onChange={e => setInput(e.target.value)}>
                            <option value="not">Select an activity</option>
                            {list.map(a => {
                                return (<option key={a.id} value={a.id}>{a.name} {a.countruies}</option>)
                            })}
                        </select>
                        <div className={style.ErrorAndBtn}>
                            {error ? <h3 className={style.InputActivities__error}>Select an activity to delete</h3> : null}
                            <button className={style.BtnRemove} onClick={() => deleteSubmit()}>Remove</button>
                        </div>
                    </div>
                    :
                    <div className={style.notFound}>
                        <NotFound text="No Activities Loaded" />
                    </div>
            }
        </div>
    );
}
