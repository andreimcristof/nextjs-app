import { useRouter } from 'next/router';

const Project = () => {
    const router = useRouter();
    const projectid = router.query.projectid;
    const clientid = router.query.clientid;

    return (
        <div>
            <h1>Project {projectid} of client {clientid}</h1>
        </div>
    )
}
export default Project;