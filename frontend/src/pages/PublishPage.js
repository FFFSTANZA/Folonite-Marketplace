import React, { useState } from 'react';
import { publishComponent } from '../utils/api';

const PublishPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    version: '',
    description: '',
    code: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await publishComponent(formData);
    alert('Component published successfully!');
  };

  return (
    <div className="publish-page container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Publish New Component</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Component Name"
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="version"
          placeholder="Version"
          onChange={handleChange}
          className="input"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="textarea"
        />
        <textarea
          name="code"
          placeholder="Component Code"
          onChange={handleChange}
          className="textarea"
        />
        <button type="submit" className="btn-primary">
          Publish
        </button>
      </form>
    </div>
  );
};

export default PublishPage;
