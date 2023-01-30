import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

export const SingleUser = () => {
const navigate = useNavigate()

    const [user, setUser] = useState({});
    const [posts, setposts] = useState({
        isLoading:false,
        data:[],
        isError:"",
    });
    const {id} =useParams()
  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=" + id)
      .then((data) => {
        if(data.status === 200){
            setUser(
                data.data?.[0]
            )
        }
      })
      .catch((err) => console.log(err));
  };

  const getposts = () => {
    setposts({
      ...posts,
      isLoading: true,
    });
    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=" + id)
      .then((data) => {
        if (data.status === 200) {
          setposts({
            ...posts,
            isLoading: false,
            data: data.data,
          });
        }
      })
      .catch((err) => {
        if (err) {
          setposts({
            ...posts,
            isLoading: false,
            data: [],
            isError: err.massage,
          });
        }
      });
  };

  useEffect(() => {
    getUser()
    getposts()
  }, [id]);
  return (
    <>
    <button className="btn btn-danger" onClick={()=> navigate(-1)} >Back</button>
      <h1 className=" text-center  fs-5 my-5 "> Singles User Page</h1>
      <div className="w-50 mx-auto p-3 shadow">
        <h3 > {user.name} </h3>
        <h4 > {user.username} </h4>
        <a href={`mailto:${user.email}`}> {user.email}</a>
      </div>

      <h2 className="text-center my-4">User Posts List</h2>
    {posts.isLoading ? <Loading /> : ""}
      {posts.isError ? <h2 className="text-danger"> {posts.isError} </h2> : ""}
      {posts.data.length ? (
        <ul className="list-group w-50 mx-auto pb-5">
       {posts.data.map(post => <li key={post.id} className="list-group-item" >{post.title} </li>)}         
        </ul>
      ) : (
        ""
      )}
    </>
  );
};
