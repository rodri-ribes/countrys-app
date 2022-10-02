import style from './principal.module.css'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Countrys from '../Countrys/Countrys';
import Filtros from '../Filtros/Filtros';
import { getCountrys, getActivitiesAction } from '../../redux/features/user/userSlice'

export default function Principal() {
    let dispatch = useDispatch();
    useEffect(() => {

        dispatch(getCountrys())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getActivitiesAction())
    }, [dispatch]);

    const [searchTerm, setsearchTerm] = useState("")

    return (
        <div className={style.Container}>
            <div className={style.Container_Nav}>
                <Filtros setsearchTerm={setsearchTerm} />
            </div>
            <div className={style.Container_Countrys}>
                <Countrys searchTerm={searchTerm} />
            </div>
        </div>
    )
}