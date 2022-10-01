import style from './notfound.module.css'
import alert from '../../img/alert.png'

export default function NotFound({text}) {
    return(
        <div className={style.Container}>
            <div className={style.ContainerDiv}>
                <img src={alert} alt='alert'/>
                <h1>{text}</h1>
            </div>
        </div>
    )
}