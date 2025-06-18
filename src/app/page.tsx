'use client';
import Header from "@/components/Header/Header";
import PageContainer from "@/components/General/PageContainer/PageContainer";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@/interfaces/IPost";

async function fetchPosts(): Promise<Post[]> {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    return response.json();
}

export default function Home() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });

    if (isLoading) return <p>LOADING...</p>;
    if (error) return <p>Something went wrong.</p>;

    return (
        <PageContainer>
            <Header />
            {data?.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </PageContainer>
    );
}
