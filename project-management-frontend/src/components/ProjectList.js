import React, { useState, useEffect } from 'react';
import { getProjects } from '../api/api';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getProjects()
      .then(response => setProjects(response.data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div>
      <h1>Project List</h1>
      {error && <p>{error}</p>}
      <ul>
        {projects.map(project => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
