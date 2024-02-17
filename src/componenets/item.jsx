import Project from './project.jsx';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import React from 'react';
import Project from './project.jsx';

const Item = () => {
  const data = [
    {
      id: 1,
      image: {project1},
      title: 'Title 1',
      description: 'Description 1',
      link: 'https://example.com/page1',
    },
    {
      id: 2,
      image: {project2},
      title: 'Title 2',
      description: 'Description 2',
      link: 'https://example.com/page2',
    },
    // Add more items as needed
  ];

  return <Project data={data} />;
};

export default Item;

