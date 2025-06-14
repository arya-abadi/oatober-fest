import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { Product } from "@/components/Product/Product";

// Initialize Storyblok with your components here
storyblokInit({
    accessToken: process.env.STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {
        Product,
    },
});

export { StoryblokStory } from "@storyblok/react/rsc";
