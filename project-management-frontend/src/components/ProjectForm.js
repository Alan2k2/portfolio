import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById, createProject, updateProject } from '../api/api';

const ProjectForm = ({ isEditing }) => {
        const [project, setProject] = useState({ name: '', description: '' });
        const [error, setError] = useState('');
        const { id } = useParams();
        const navigate = useNavigate();

        useEffect(() => {
            if (isEditing && id) {
                getProjectById(id)
                    .then(response => setProject(response.data))
                    .catch(error => setError(error.message));
            }
        }, [id, isEditing]);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setProject({...project, [name]: value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (isEditing) {
                updateProject(id, project)
                    .then(() => navigate(`/projects/${id}`))
                    .catch(error => setError(error.message));
            } else {
                createProject(project)
                    .then(() => navigate('/'))
                    .catch(error => setError(error.message));
            }
        };

        return ( <
            div >
            <
            h1 > { isEditing ? 'Edit Project' : 'Create Project' } < /h1> {
                error && < p > { error } < /p>} <
                    form onSubmit = { handleSubmit } >
                    <
                    div >
                    <
                    label > Name < /label> <
                    input
                type = "text"
                name = "name"
                value = { project.name }
                onChange = { handleChange }
                /> <
                /div> <
                div >
                    <
                    label > Description < /label> <
                    textarea
                name = "description"
                value = { project.description }
                onChange = { handleChange }
                /> <
                /div> <
                button type = "submit" > { isEditing ? 'Update' : 'Create' } < /button> <
                    /form> <
                    /div>
            );
        };

        export default ProjectForm;