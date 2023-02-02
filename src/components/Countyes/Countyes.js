import { useEffect, useRef, useState } from "react";
import {Card} from "../Card/Card";
import { Loading } from "../Loading/Loading";
import { lang } from '../../lang/lang';
import { LangContext } from '../../context/LangContext';
import { useContext } from "react";
export const Countryes = ()=>{

  const {lang : til } = useContext(LangContext)
  
    const SelectVal = useRef();
    const elChangeInput = useRef();
  

    let [country, setCountry] = useState({
      isLoading: false,
      data: [],
      isError: "",
    });
  
    useEffect(() => {
      setCountry({
        ...country,
        isLoading: true,
      });
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setCountry({
              ...country,
              isLoading: false,
              data: data,
            });
          }
        })
        .catch((err) => {
          if (err) {
            setCountry({
              ...country,
              isLoading: false,
              data: [],
              isError: err.massage,
            });
          }
        });
    }, []);
    
    // https://restcountries.com/v3.1/name/{name}
    
    const handleSelect = () => {
      fetch("https://restcountries.com/v3.1/region/" + SelectVal.current.value)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setCountry({
              isLoading: false,
              data: data,
              isError: "",
            });
          }
        })
        .catch((err) => console.log(err));
    };
    const handleChange = () => {
      console.log("Change");
      fetch("https://restcountries.com/v3.1/name/" + elChangeInput.current.value)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setCountry({
              isLoading: false,
              data: data,
              isError: "",
            });
          }
        })
        .catch((err) => console.log(err));
    };
    return (
        <>
<div className="container">
<form className="form  gx-4">
        <input className="form-control"
          type="Search"
          placeholder={lang[til].form.placholder}
          onChange={handleChange}
          ref={elChangeInput}
        ></input>
        <select onChange={handleSelect} ref={SelectVal} className="form-select">
          <option disabled selected>{lang[til].form.filter} </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
      {country.isLoading ? (<Loading />) : ""}
      {country.isError ? <h1>{country.isError} </h1> : ""}
      {country.data.length ? (
        <ul className=" gy-4 d-flex flex-wrap gap-5 justify-content-center list-unstyled mt-4">
          {country.data.map((item) => (
            <Card key={item.name.common} obj={item} />
          ))}{" "}
        </ul>
      ) : (
        ""
      )}
</div>
        </>
    )
}