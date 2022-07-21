import { Link } from 'react-router-dom'
import style from './inicial.module.css'

export default function Inicial() {


    return (
        <div className={style.Container}>
            <div id={style.wrapper}>
                <Link to='/countrys' className={style.my_super_cool_btn}>
                    <div className={style.dots_container}>
                        <div className={style.dot}></div>
                        <div className={style.dot}></div>
                        <div className={style.dot}></div>
                        <div className={style.dot}></div>
                    </div>
                    <span>Go!</span>
                </Link>
            </div>
        </div>
    )
}