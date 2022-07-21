import React from "react";
import style from "./selectoptions.module.css";
export default function SelectOptions() {
  return (
    <div className={style.select_box}>
      <div className={style.select_box__current} tabindex="1">
        <div className={style.select_box__value}>
          <input
            className={style.select_box__input}
            type="radio"
            id="0"
            value="1"
            name="Ben"
            checked="checked"
          />
          <p className={style.select_boxtext}>Cream</p>
        </div>
        <div className={style.select_box__value}>
          <input
            className={style.select_box__input}
            type="radio"
            id="1"
            value="2"
            name="Ben"
          />
          <p className={style.select_boxtext}>Cheese</p>
        </div>
        <div className={style.select_box__value}>
          <input
            className={style.select_box__input}
            type="radio"
            id="2"
            value="3"
            name="Ben"
          />
          <p className={style.select_boxtext}>Milk</p>
        </div>
        <div className={style.select_box__value}>
          <input
            className={style.select_box__input}
            type="radio"
            id="3"
            value="4"
            name="Ben"
          />
          <p className={style.select_boxtext}>Honey</p>
        </div>
        <div className={style.select_box__value}>
          <input
            className={style.select_box__input}
            type="radio"
            id="4"
            value="5"
            name="Ben"
          />
          <p className={style.select_boxtext}>Toast</p>
        </div>
        <img
          class="select-box__icon"
          src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul class="select-box__list">
        <li>
          <label class="select-box__option" for="0" aria-hidden="aria-hidden">
            Cream
          </label>
        </li>
        <li>
          <label class="select-box__option" for="1" aria-hidden="aria-hidden">
            Cheese
          </label>
        </li>
        <li>
          <label class="select-box__option" for="2" aria-hidden="aria-hidden">
            Milk
          </label>
        </li>
        <li>
          <label class="select-box__option" for="3" aria-hidden="aria-hidden">
            Honey
          </label>
        </li>
        <li>
          <label class="select-box__option" for="4" aria-hidden="aria-hidden">
            Toast
          </label>
        </li>
      </ul>
    </div>
  );
}
