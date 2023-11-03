import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ListData = (props) => {
  return (
    <div className="bg-white shadow-lg h-[full] w-[full] rounded-lg">
      <Link className="text-xl font-semibold mb-2" to={`/detail/${props.id}`}>
        <div className="relative w-[100%] h-[90%] object-cover">
          <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${props.posterPath}`}  alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center bottom-[-2.8rem] justify-end text-white" onClick={()=>{}}>
            <div className="text-xl font-semibold mb-2 text-center p-4" to={`/detail/${props.id}`}>{props.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};