
const Card =({obj})=>{
    return(
        <li className="col-md-3 col-sm-4 col-10">
            <div className="card" >
  <img src={obj.flags?.png} width="100%" height="150px" className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title"> {obj.name.common}</h5>
    <p className="card-text">Population:{obj.population} </p>
    <p className="card-text">Region:{obj.region} </p>
    <p className="card-text">Capital:{obj?.capital} </p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
        </li>
    )
}
export default Card