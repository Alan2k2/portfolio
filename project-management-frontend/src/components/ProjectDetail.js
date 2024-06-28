import React, { useState, useEffect } from 'react';
import { getProjectById } from '../api/api';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        getProjectById(id)
            .then(response => setProject(response.data))
            .catch(error => setError(error.message));
    }, [id]);

    if (error) {
        return <p > { error } < /p>;
    }

    if (!project) {
        return <p > Loading... < /p>;
    }

    return ( <
        div >
        <
        h1 > { project.name } < /h1> <
        p > { project.description } < /p> <
        p > Status: { project.status } < /p> <
        /div>
    );
};

export default ProjectDetail;