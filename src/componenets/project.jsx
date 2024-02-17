import React from 'react';

const Project = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <a href={item.link}>Learn More</a>
        </div>
      ))}
    </div>
  );
};

export default Project;
