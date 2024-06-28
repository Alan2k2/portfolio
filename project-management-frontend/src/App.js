import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import ProjectForm from './components/ProjectForm';

const App = () => {
        return ( < Router >
                <
                Routes >
                <
                Route path = "/"
                element = { < ProjectList / > }
                /> <
                Route path = "/projects/new"
                element = { < ProjectForm isEditing = { false }
                    />} / >
                    <
                    Route path = "/projects/:id/edit"
                    element = { < ProjectForm isEditing = { true }
                        />} / >
                        <
                        Route path = "/projects/:id"
                        element = { < ProjectDetail / > }
                        /> </Routes >
                        <
                        /Router>
                    );
                };

                export default App;