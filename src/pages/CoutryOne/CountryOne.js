// import { useEffect } from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
export const CountryOne = () => {
  const { name } = useParams();
  const navigate = useNavigate();


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
    fetch("https://restcountries.com/v3.1/name/" + name)
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
  }, [name]);

  // useEffect(() => {

  // }, []);

  return (
    <>
      <div className="container">
        <button className="btn btn-danger mt-3" onClick={() => navigate(-1)}>
          Back
        </button>

        {country.isLoading ? <Loading /> : ""}
        {country.isError ? <h1>{country.isError} </h1> : ""}
        {country.data.length ? (
          <ul className="row gy-4 justify-content-center list-unstyled mt-4">
            {country.data.map((item) => (
                <li key={name} className="col-md-3 col-sm-4 col-10">
      <div className=" card">
        <img
          src={item.flags?.png}
          width="100%"
          height="150px"
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title" >
            {item.name.common}
          </h5>
          <p className="card-text">Population:{item.population} </p>
          <p className="card-text">Region:{item.region} </p>
          <p className="card-text">Capital:{item?.capital} </p>
          <p className="card-text">Subregion:{item?.subregion} </p>
      
        </div>
      </div>
    </li>
            ))}{" "}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
