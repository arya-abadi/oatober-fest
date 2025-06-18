import {getStoryblokApi} from "@storyblok/react/rsc";

export const fetchProductPage = async (slug: string) => {
    const client = getStoryblokApi();
    const response = await client.get(`cdn/stories/products/${slug}`, {
        version: "draft",
    });
    return response.data.story;
}