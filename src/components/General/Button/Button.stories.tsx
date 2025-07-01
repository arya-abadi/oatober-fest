import Button from './Button';
import {Meta, StoryObj} from "@storybook/nextjs";


const meta: Meta<typeof Button> = {
    component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
    args: {
        color: "dark",
        children: "Click me",
        onClick: () => alert("is clicked!!!!"),
        isLoading: false,
    },
}