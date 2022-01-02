import { useRouter } from 'next/router';

const PortfolioItem = () => {
    const router = useRouter();
    return <h1>item with id {router.query.id}</h1>
}
export default PortfolioItem;