import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ComponentDetails() {
  const { id } = useParams();
  const [component, setComponent] = useState(null);

  useEffect(() => {
    async function fetchComponent() {
      const response = await axios.get(`/api/components/${id}`);
      setComponent(response.data);
    }
    fetchComponent();
  }, [id]);

  if (!component) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{component.name}</h1>
      <p className="text-gray-600">{component.description}</p>
      <pre className="bg-gray-200 p-4 rounded mt-4">{component.code}</pre>
    </div>
  );
}

export default ComponentDetails;
