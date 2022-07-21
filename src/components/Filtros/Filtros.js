import style from "./filtros.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderAlpha,
  orderAlphaRev,
  orderPop,
  orderPopRev,
  getCountrys,
  orderCont,
  search,
  errorFalse,
  filterActivities,
} from "../../actions/index.js";

export default function Nav() {
  let dispatch = useDispatch();
  let activities = useSelector((state) => state.activities);

  const [sort, setOrder] = useState("");
  const [region, setRegion] = useState("");
  const [inputSearch, setinputSearch] = useState("");
  const [activity, setActivity] = useState("");

  useEffect(() => {
    if (inputSearch.length === 0) {
      dispatch(errorFalse());
      dispatch(getCountrys());
    }
  }, [inputSearch, dispatch]);

  useEffect(() => {
    if (region) {
      dispatch(getCountrys());
      if (region !== "all") {
        setTimeout(() => {
          dispatch(orderCont(region));
        }, 500);
      }
    }
  }, [region, dispatch]);

  useEffect(() => {
    if (sort === "all") dispatch(getCountrys());
    else if (sort === "a-z") dispatch(orderAlpha());
    else if (sort === "z-a") dispatch(orderAlphaRev());
    else if (sort === "↑ population") dispatch(orderPopRev());
    else if (sort === "↓ population") dispatch(orderPop());
  }, [sort, dispatch]);

  useEffect(() => {
    if (activity) {
      dispatch(getCountrys());
      if (activity !== "all") {
        setTimeout(() => {
          dispatch(filterActivities(activity));
        }, 500);
      }
    }
  }, [activity, dispatch]);

  const handleSubmit = () => {
    let str = inputSearch.charAt(0).toUpperCase() + inputSearch.slice(1);
    dispatch(search(str));
  };

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
          {activities.map((a) => {
            return (
              <option value={a.name} key={a.id}>{a.name}</option>
            );
          })}
        </select>
      </div>
      <div className={style.Container__Search}>
        <div>
          <input
            onChange={(e) => setinputSearch(e.target.value)}
            name="search"
            type="text"
          />
          <button onClick={() => handleSubmit()}>
            <img src="https://svgsilh.com/svg_v2/1093183.svg" alt="lupa" />
          </button>
        </div>
      </div>
    </div>
  );
}
