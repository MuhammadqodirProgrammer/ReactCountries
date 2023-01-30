// import { useEffect } from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Loading } from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
export const CountryOne = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  console.log(navigate);

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
        <button className="btn btn-danger" onClick={() => navigate(-1)}>
          Back
        </button>

        {country.isLoading ? <Loading /> : ""}
        {country.isError ? <h1>{country.isError} </h1> : ""}
        {country.data.length ? (
          <ul className="row gy-4 justify-content-center list-unstyled mt-4">
            {country.data.map((item) => (
              <Card key={item.name.common} obj={item} />
            ))}{" "}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
