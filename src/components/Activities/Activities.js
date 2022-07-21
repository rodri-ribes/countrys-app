import style from './activities.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getActivities, getCountrys } from '../../actions';


export default function Activities() {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCountrys())
    }, [dispatch]);


    return (
        <div className={style.Container}>
            <div className={style.Container_btns}>
                <div className={style.button2}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <Link to='/activities/add' className={style.Container__link}>Add Activity</Link>
                </div>
                <div className={style.button2}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <Link to='/activities/modify' className={style.Container__link}>Modify Activity</Link>
                </div>
                <div className={style.button2}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <Link to='/activities/delete' className={style.Container__link}>Delete Activity</Link>
                </div>
            </div>
        </div>
    )
}