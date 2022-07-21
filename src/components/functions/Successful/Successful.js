import style from './successful.module.css'
import success from '../../img/success.png'

export default function Successful({text}){
    return(
        <div className={style.Container}>
            <div className={style.ContainerDiv}>
                <h3>{text}</h3>
                <img src={success} alt="success"/> 
            </div>
        </div>
    )
}