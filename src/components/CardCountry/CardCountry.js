
import { Link } from 'react-router-dom'

import style from './cardcountry.module.css'

export function CardCountry({img, name, continent}) {

    return(
        <div className={style.Container}>
            <img className={style.Container_img} src={img} alt={name}/>
            <Link to={`/countrys/${name}`} className={style.Container_name}>{name}</Link>
            <p className={style.Container_continent}>{continent}</p>
        </div>
    )
}