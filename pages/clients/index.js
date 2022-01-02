import Link from 'next/link';

const Clients = () => {
    const clients = [ 'max', 'manu'];
    return (
        <div>
            <h1>Clients page</h1>
            <ul>
            {clients.map(client => <li key={client}>
                    <Link href={`/clients/${client}`}>{client}</Link>
                </li>
            )}                
            </ul>
        </div>
    )
}
export default Clients;