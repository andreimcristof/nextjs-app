import { useRouter } from "next/router";

const BlogPosts = () => {
    const router = useRouter();
    console.log(router.query);
    
    return (
        <div>
            <h1>blog with route param {router.query.slug}</h1>
        </div>
    )
}
export default BlogPosts;