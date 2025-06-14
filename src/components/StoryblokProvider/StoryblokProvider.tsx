import type {PropsWithChildren} from "react";
import {storyblokInit} from "@storyblok/react/rsc";
import {Product} from "@/components/Product/Product";

storyblokInit({
    components: {
        product: Product,
    },
    enableFallbackComponent: true,
})


const StoryblokProvider = ({children}: PropsWithChildren) => {
    return <>{children}</>
}
export default StoryblokProvider;