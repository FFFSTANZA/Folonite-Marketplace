import React, { useEffect, useState } from 'react';
import { fetchComponents } from '../utils/api';
import ComponentCard from '../components/ComponentCard';

const HomePage = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const loadComponents = async () => {
      const data = await fetchComponents();
      setComponents(data);
    };

    loadComponents();
  }, []);

  return (
    <div className="container">
      <main>
        <section className="section">
          <h2>Welcome to Folonite.js Marketplace</h2>
          <p>
            Folonite.js is a flexible and powerful framework created to simplify component-based development with built-in support for Server-Side Rendering (SSR) and streaming.
          </p>
          <p>
            This marketplace serves as a hub for components, templates, and other features that can help you build your web applications faster and with more flexibility.
          </p>
        </section>

        <section className="section grid">
          <div className="card">
            <h2>Components</h2>
            <p>Browse and install reusable components contributed by the community to speed up your development.</p>
            <a href="/components" className="button">Browse Components</a>
          </div>
          <div className="card">
            <h2>Templates</h2>
            <p>Use pre-built website templates to kickstart your projects with ease.</p>
            <a href="/templates" className="button">Browse Templates</a>
          </div>
          <div className="card">
            <h2>Get Involved</h2>
            <p>Submit your own components and templates to help grow the ecosystem!</p>
            <a href="/submit" className="button">Contribute</a>
          </div>
        </section>

        <section className="section">
          <h2>Available Components</h2>
          {components.length === 0 ? (
            <p>No components available yet. Please check back later!</p>
          ) : (
            <div className="grid">
              {components.map((component) => (
                <ComponentCard key={component.id} component={component} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
