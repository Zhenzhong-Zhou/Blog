import Head from 'next/head'
import {Categories, PostCard, PostWidget} from "../components";
import {fetchPosts} from "../services";

const Home = ({posts}) => {
    return (
        <div className={"container mx-auto px-10 mb-8"}>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/icon.png" />
            </Head>
            <div className={"grid grid-cols-1 lg:grid-cols-12 gap-12"}>
                <div className={"lg:col-span-8 col-span-1"}>
                    {posts.map(post =>
                        <PostCard post={post} key={post.title}/>
                    )}
                </div>
                <div className={"lg:col-span-4 col-span-1"}>
                    <div className={"lg:sticky relative top-8"}>
                        <PostWidget/>
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;

export const getStaticProps = async () => {
    const posts = (await fetchPosts()) || [];
    return {
        props: {posts}
    };
}