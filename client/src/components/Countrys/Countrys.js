import style from './countrys.module.css'

import { useSelector } from "react-redux";
import { CardCountry } from "../CardCountry/CardCountry";
import NotFound from '../functions/NotFound/NotFound';
import { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner'
import { Paginacion } from './Pagination/Paginacion';


export default function Countrys({ searchTerm }) {

  let countrysAll = useSelector(state => state.user.countrys);


  countrysAll && console.log(countrysAll)

  let error = useSelector(state => state.user.error);

  const [pagina, setPagina] = useState(1);


  function searchFilter(term) {
    return function (x) {
      return x.name.toLowerCase().includes(term.toLowerCase()) || !term
    }
  }


  const porPagina = 10;

  const ceil = countrysAll.length / porPagina;

  const maximo = Math.ceil(ceil)

  return (
    <>

      {countrysAll.length > 0 ?
        <>
          <div className={style.Container}>
            {error ?
              <div className={style.ContainerNotFound}>
                <NotFound text="Country Not Found" />
              </div>
              :
              countrysAll && countrysAll.slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              ).filter(searchFilter(searchTerm)).map(country => {
                return (
                  <CardCountry
                    img={country.flag}
                    name={country.name}
                    continent={country.continent}
                    key={country.id}
                    id={country.id}
                  />
                )
              })
            }
          </div>
          {error ?
            null
            :
            <div className={style.Container__btns}>
              {!searchTerm &&
                <Paginacion
                  pagina={pagina}
                  setPagina={setPagina}
                  maximo={maximo}
                />
              }
            </div>
          }
        </>
        :
        <Spinner />
      }
    </>
  )
}