import style from "./countrydetail.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../redux/features/user/userSlice";
import Spinner from "../../Spinner/Spinner";

export default function CountryDetail(props) {
  const name = props.match.params.name;
  let dispatch = useDispatch();

  useEffect(() => {
    console.log("name", name)
    dispatch(getCountry(name));
  }, [dispatch, name]);

  let country = useSelector((state) => state.user.country);


  return (
    <div className={`${country?.activities?.length > 0 ? style.Container : style.ContainerSinAct}`}>
      {country ?
        <div className={`${country?.activities?.length > 0 ? style.Container__info : style.Container__infoSinAct}`}>
          <img src={country?.flag} alt={country?.name} className={style.Container__info_img} />
          <div className={style.Container__info_datos}>
            <h1>{country?.name}</h1>
            <p> Continent: <b>{country?.continent}</b> </p>
            <p> Capital: <b>{country?.capital}</b> </p>
            <p> Area: <b>{country?.area}</b> </p>
            <p> Subregion: <b>{country?.subregion}</b> </p>
            <p> Population: <b>{country?.population}</b> </p>
          </div>
        </div>
        :
        <Spinner />
      }
      {country?.activities?.length > 0 ?
        <div className={style.Actividades}>
          <h1>Activitys in {country.name}</h1>
          <table className={style.Actividades_table}>
            <tbody>
              <tr className={style.Actividades_table_fila}>
                <th>Name</th>
                <th>Dificulty</th>
                <th>Duration</th>
                <th>Season</th>
              </tr>
            </tbody>
            {country?.activities.map((c) => {
              return (
                <tbody key={c.name + c.country}>
                  <tr className={style.Actividades_table_fila}>
                    <td>{c.name}</td>
                    <td>{c.dificulty}</td>
                    <td>{c.duration}</td>
                    <td>{c.season}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        : null}
    </div>
  );
}
