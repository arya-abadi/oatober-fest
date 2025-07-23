'use server';

import { Post } from "@/interfaces/IPost";

export async function fetchPostsAction(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) throw new Error("Failed to fetch posts");

    return response.json();
}
