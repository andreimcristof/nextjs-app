import { useRouter } from 'next/router';
import Link from 'next/link';

const Projects = () => {
    const projects = [ 'testproject 1', 'testproject 2'];
    const router = useRouter();
    const clientid = router.query.clientid;

    return (
        <div>
            <h1>Projects of client {clientid}</h1>
            <ul>
                {projects.map(project => <li key={project}>
                    <Link href={`/clients/${clientid}/${project}`}>{project}</Link>
                </li> 
            )}                
            </ul>
        </div>
    )
}
export default Projects;