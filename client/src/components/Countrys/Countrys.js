import style from './countrys.module.css'

import { useSelector } from "react-redux";
import { CardCountry } from "../CardCountry/CardCountry";
import NotFound from '../functions/NotFound/NotFound';
import { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner'


export default function Countrys() {
  let countrysAll = useSelector(state => state.countrys);

  let error = useSelector(state => state.error);

  const [paginado, setPaginado] = useState(0);


  let nextPage = () => {
    if (countrysAll.length <= paginado + 10) {
      setPaginado(paginado);
    } else setPaginado(paginado + 10);
  };

  let prevPage = () => {
    if (paginado < 9) {
      setPaginado(0);
    } else {
      setPaginado(paginado - 10);
    }
  };

  const firstPage = () => {
    setPaginado(0);
  };

  const lastPage = () => {
    setPaginado(countrysAll.length - 10);
  };

  useEffect(() => {
    firstPage()
  }, [countrysAll]);

  let filteredC;

  if (paginado === 0) {
    filteredC = countrysAll.slice(paginado, paginado + 9);
  } else {
    filteredC = countrysAll.slice(paginado, paginado + 10);
  }

  return (
    <>
      {countrysAll ?
        <>
          <div className={style.Container}>
            {error ?
              <div className={style.ContainerNotFound}>
                <NotFound text="Country Not Found" />
              </div>
              :
              filteredC.map(country => {
                return (
                  <CardCountry
                    img={country.flag}
                    name={country.name}
                    continent={country.continent}
                    key={country.id}
                  />
                )
              })
            }
          </div>
          {error ?
            null
            :
            <div className={style.Container__btns}>
              <button onClick={firstPage}>{'<<'}</button>
              <button onClick={prevPage}>{'<'}</button>
              <button onClick={nextPage}>{'>'}</button>
              <button onClick={lastPage}>{'>>'}</button>
            </div>
          }
        </>
        :
        <Spinner />
      }
    </>
  )
}