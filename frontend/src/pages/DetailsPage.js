import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchComponentById } from '../utils/api';

const DetailsPage = () => {
  const { id } = useParams();
  const [component, setComponent] = useState(null);

  useEffect(() => {
    async function loadComponent() {
      const data = await fetchComponentById(id);
      setComponent(data);
    }

    loadComponent();
  }, [id]);

  if (!component) return <p>Loading...</p>;

  return (
    <div className="details-page container mx-auto p-6">
      <h1 className="text-3xl font-bold">{component.name}</h1>
      <p className="text-gray-500">{component.description}</p>
      <p className="text-gray-700">Version: {component.version}</p>
      <pre className="code-block">{component.code}</pre>
    </div>
  );
};

export default DetailsPage;
