import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsJSON from '../../data/projects.json';

import { Grid } from "@chakra-ui/react"


const Index = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);

    const projectCards = projectsList.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
    });

    return (
        <>
            <h1>Projects</h1>
            <Grid templateColumns="repeat(2, 1fr)" gap="6">
                {projectCards}
            </Grid>

        </>
    );

};

export default Index;