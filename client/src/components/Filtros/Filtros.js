import style from "./filtros.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderAlphaAction,
  orderAlphaRevAction,
  orderPopAction,
  orderPopRevAction,
  getCountrys,
  orderContinentAction,
  searchAction,
  errorFalseAction,
  filterActivitiesAction,
} from "../../redux/features/user/userSlice";

export default function Filtros({ setsearchTerm }) {
  let dispatch = useDispatch();
  let activities = useSelector((state) => state.user.activities);

  const [sort, setOrder] = useState("");
  const [region, setRegion] = useState("");
  const [inputSearch, setinputSearch] = useState("");
  const [activity, setActivity] = useState("");

  useEffect(() => {
    if (inputSearch.length === 0) {
      dispatch(errorFalseAction());
      dispatch(getCountrys());
    }
  }, [inputSearch, dispatch]);

  useEffect(() => {

    if (region) {
      dispatch(getCountrys());
      if (region !== "all") {
        setTimeout(() => {
          dispatch(orderContinentAction(region));
        }, 1000);
      }
    }

  }, [region, dispatch]);

  useEffect(() => {

    if (sort === "all") dispatch(getCountrys());
    else if (sort === "a-z") dispatch(orderAlphaAction());
    else if (sort === "z-a") dispatch(orderAlphaRevAction());
    else if (sort === "↑ population") dispatch(orderPopRevAction());
    else if (sort === "↓ population") dispatch(orderPopAction());

  }, [sort, dispatch]);

  useEffect(() => {

    if (activity) {
      dispatch(getCountrys());
      if (activity !== "all") {
        setTimeout(() => {
          dispatch(filterActivitiesAction(activity));
        }, 1000);
      }
    }

  }, [activity, dispatch]);


  return (
    <div className={style.Container}>
      <div className={style.Container__Filter}>
        <select onChange={(e) => setOrder(e.target.value)}>
          <option value="all">-</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="↑ population">↑ Population</option>
          <option value="↓ population">↓ Population</option>
        </select>
      </div>
      <div className={style.Container__Filter}>
        <select onChange={(e) => setRegion(e.target.value)}>
          <option value="all">All</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
      <div className={style.Container__Filter}>
        <select onChange={(e) => setActivity(e.target.value)}>
          <option value="all">Actividad</option>
          {activities && activities.map((a) => {
            return (
              <option value={a.name} key={a.id}>{a.name}</option>
            );
          })}
        </select>
      </div>
      <div className={style.Container__Search}>
        <div>
          <input
            onChange={(e) => setsearchTerm(e.target.value)}
            name="search"
            type="text"
          />
          {/* <button onClick={() => handleSubmit()}>
            <img src="https://svgsilh.com/svg_v2/1093183.svg" alt="lupa" />
          </button> */}
        </div>
      </div>
    </div>
  );
}
