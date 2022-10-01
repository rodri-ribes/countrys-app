import style from './countrys.module.css'

import { useSelector } from "react-redux";
import { CardCountry } from "../CardCountry/CardCountry";
import NotFound from '../functions/NotFound/NotFound';
import { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner'
import { Paginacion } from './Pagination/Paginacion';


export default function Countrys() {
  let countrysAll = useSelector(state => state.countrys);

  let error = useSelector(state => state.error);

  const [pagina, setPagina] = useState(1);



  const porPagina = 10;

  const ceil = countrysAll.length / porPagina;

  const maximo = Math.ceil(ceil)

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
              countrysAll.slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              ).map(country => {
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
              <Paginacion
                pagina={pagina}
                setPagina={setPagina}
                maximo={maximo}
              />
            </div>
          }
        </>
        :
        <Spinner />
      }
    </>
  )
}