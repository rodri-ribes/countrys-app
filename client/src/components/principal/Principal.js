import style from './principal.module.css'
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getActivities, getCountrys } from '../../actions/index.js'
import  Countrys from '../Countrys/Countrys';
import Filtros from '../Filtros/Filtros';

export default function Principal(){ 
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountrys())
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch]);

    return(
        <div className={style.Container}>
            <div className={style.Container_Nav}>
                <Filtros/>
            </div>
            <div className={style.Container_Countrys}>
                <Countrys/>
            </div>
        </div>
    )
}