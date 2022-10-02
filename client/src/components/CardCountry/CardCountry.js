
import { Link } from 'react-router-dom'

import style from './cardcountry.module.css'

export function CardCountry({ img, name, continent, id }) {

    return (
        <Link to={`/countrys/${id}`} className={style.Container}>
            <img className={style.Container_img} src={img} alt={name} />
            <p className={style.Container_name}>{name}</p>
            <p className={style.Container_continent}>{continent}</p>
        </Link>
    )
}