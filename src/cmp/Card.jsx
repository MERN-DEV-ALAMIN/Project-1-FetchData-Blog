import React from "react";
import { Link } from "react-router-dom";

const Card = ({ blogInfo }) => {
  return (
    <div>
      <div className="card w-96 bg-emerald-200 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">{blogInfo.title}</h2>
          <p>{blogInfo.body}</p>
          <div className="card-actions justify-end">
            <Link to={`/blog/${blogInfo.id}`}>
              <button className="btn btn-warning">View post</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
