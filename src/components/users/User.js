import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    title: "",
    video: "",
    quality: "",
    size: "",
    website: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h6 className="display-4">Video Details: {id}</h6>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Title: {user.title}</li>
        <li className="list-group-item">
          Video:{" "}
        <ReactPlayer
          className='react-player'
          url={user.video}
          width='100%'
          height='100%'
        />
        </li>
        <li className="list-group-item">Video Quality: {user.quality}</li>
        <li className="list-group-item">Video Size: {user.size}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;
