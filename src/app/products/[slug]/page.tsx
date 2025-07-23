'use client';

import { useQuery } from "@tanstack/react-query";
import { Post } from "@/interfaces/IPost";
import { fetchPostsAction } from "@/actions/postActions";

const ProductPage = () => {
    const { data, error, isLoading } = useQuery<Post[]>({
        queryKey: ["posts"],
        queryFn: fetchPostsAction,
    });

    if (isLoading) return <p>LOADING...</p>;
    if (error) return <p>Something went wrong.</p>;

    return (
        <>
            {data?.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </>
    );
};

export default ProductPage;
