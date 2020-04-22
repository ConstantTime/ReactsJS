import React from "react";

const Ninjas = ({ ninjas }) => {
  //    console.log(this.props);
  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name :{ninja.name}</div>
        <div>Age : {ninja.age}</div>
        <div>Belt : {ninja.belt}</div>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
