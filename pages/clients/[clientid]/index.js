import { useRouter } from 'next/router';

const Projects = () => {
    const projects = [ 'testproject 1', 'testproject 2'];
    const router = useRouter();
    const clientid = router.query.clientid;

    const onProjectClick = (projectid) => {
        router.push({
            pathname: '/clients/[clientid]/[projectid]',
            query: {
                clientid,
                projectid
            }
        })
    }

    return (
        <div>
            <h1>Projects of client {clientid}</h1>
            <ul>
                {projects.map(projectid => 
                    <div key={projectid}>
                        <button onClick={_ => onProjectClick(projectid)}>{projectid}</button>
                        <hr></hr>
                    </div>
            )}                
            </ul>
        </div>
    )
}
export default Projects;