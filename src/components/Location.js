import React from 'react';

const Location = ({city}) => {
  //destructuring
  //console.log("props-location:", city)
  //debugger
  return (
    <div>
      <h1>
        {city}
      </h1>
    </div>
  );

};

export default Location;