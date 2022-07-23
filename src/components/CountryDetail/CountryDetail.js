import style from "./countrydetail.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../actions";

export default function CountryDetail(props) {
  const name = props.match.params.name;
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry(name));
  }, [dispatch, name]);

  let country = useSelector((state) => state.country);

  let actividades = false;


  if (country.length !== 0) {
    if (country[0].activities.length !== 0) {
      actividades = country[0].activities;
    }
  }

  return (
    <div className={`${actividades ? style.Container : style.ContainerSinAct}`}>
      {country[0] ? (
        <div className={`${actividades ? style.Container__info : style.Container__infoSinAct}`}>
          <img src={country[0].flag} alt={country[0].name} className={style.Container__info_img} />
          <div className={style.Container__info_datos}>
            <h1>{country[0].name}</h1>
            <p> Continent: <b>{country[0].continent}</b> </p>
            <p> Capital: <b>{country[0].capital}</b> </p>
            <p> Area: <b>{country[0].area}</b> </p>
            <p> Subregion: <b>{country[0].subregion}</b> </p>
            <p> Population: <b>{country[0].population}</b> </p>
          </div>
        </div>
      ) : (
        <h3>cargando</h3>
      )}
      {actividades ? (
        <div className={style.Actividades}>
          <h1>Activitys in {country[0].name}</h1>
          <table className={style.Actividades_table}>
            <tbody>
              <tr className={style.Actividades_table_fila}>
                <th>Name</th>
                <th>Dificulty</th>
                <th>Duration</th>
                <th>Season</th>
              </tr>
            </tbody>
            {actividades.map((c) => {
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
      ) : null}
    </div>
  );
}
