import { getStoryblokApi } from "@storyblok/react/rsc";
import { StoryblokStory } from "@/storyblok/storyblokSetup";

const fetchProductPage = async (slug: string) => {
    const client = getStoryblokApi();
    const response = await client.get(`cdn/stories/products/${slug}`, {
        version: "draft",
    });
    return response.data.story;
}

const ProductPage = async (props: any) => {
    const params = await props.params;
    const story = await fetchProductPage(params.slug);

    if (!story) {
        return <div>Product not found</div>;
    }

    return <StoryblokStory story={story} />;
}

export default ProductPage;
