import {getStoryblokApi} from "@storyblok/react/rsc";

export const fetchHomePage = async () => {
    const client = getStoryblokApi();
    const response = await client.get(`cdn/stories/home`, {
        version: "draft",
    });
    return response.data.story;
}