import React from 'react';
import { Link } from 'react-router-dom';

const ComponentCard = ({ component }) => {
  return (
    <div className="component-card p-4 border rounded-md shadow-md">
      <h3 className="font-bold text-xl">{component.name}</h3>
      <p className="text-gray-500">{component.description}</p>
      <p className="text-gray-700">Version: {component.version}</p>
      <Link
        to={`/details/${component.id}`}
        className="text-blue-500 underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ComponentCard;
