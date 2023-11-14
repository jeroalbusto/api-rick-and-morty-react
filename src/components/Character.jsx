import React from "react";

const Character = ({ p }) => {
  return (
    <div className="card m-2">
    <img src={p.image} className="card-img-top" alt={p.name} />
    <div className="card-body">
      <h2 className="card-title">{p.name}</h2>
      <p className="card-subtitle">{p.status}</p>
      <p className="card-subtitle">{p.species}
      </p>
      <p className="card-subtitle">{p.location.name}
      </p>
    </div>
  </div>
  );
};

export default Character;
