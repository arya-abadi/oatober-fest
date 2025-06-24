import { StoryblokStory } from "@/storyblok/storyblokSetup";
import {fetchProductPage} from "@/utils/fetchProductPage";

const ProductPage = async (props: any) => {
    const params = await props.params;
    const story = await fetchProductPage(params.slug);

    if (!story) {
        return <div>Product not found</div>;
    }

    return <StoryblokStory story={story} />;
}

export default ProductPage;
