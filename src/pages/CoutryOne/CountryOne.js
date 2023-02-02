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
          <div className=" justify-content-center  mt-2">
            {country.data.map((item) => (
              <div className=" d-flex align-items-center justify-content-center gap-3  flex-wrap flex-md-nowrap pb-4">
                  <img
                    src={item.flags?.png}
                    className="card-img-one"
                    alt="img"
                  />
                  <div className="d-flex flex-wrap flex-md-nowrap">
                    <div className="card-body">
                      <h2 className="card-title">{item.name.common}</h2>
                      <p className="card-text">
                        {" "}
                        <b> Population:</b> {item.population}{" "}
                      </p>
                      <p className="card-text">
                        <b> Region:</b> {item.region}{" "}
                      </p>
                      <p className="card-text">
                        <b> Capital:</b> {item?.capital}{" "}
                      </p>
                      <p className="card-text">
                        {" "}
                        <b>Subregion:</b> {item?.subregion}{" "}
                      </p>
                    </div>
                    <ul className="list-unstyled m-0 mt-md-0 mt-sm-0 mt-3">
                      <li>
                        <p className="fw-regular">
                          Top Level Domain:{" "}
                          <span className="fw-light">{item.name?.common}</span>
                        </p>
                      </li>
                      <li>
                        <p className="fw-regular">
                          Currencies:{" "}
                          <span className="fw-light"> {item.name?.common}</span>
                        </p>
                      </li>
                      <li>
                        <p className="fw-regular">
                          Languages:{" "}
                          <span className="fw-light">{item.name?.common}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
            ))}{" "}
          </div>
        ) : (
          ""
        )}

 
      </div>
    </>
  );
};
