import Button from './Button';
import {Meta, StoryObj} from "@storybook/nextjs";


const meta: Meta<typeof Button> = {
    title: "components/Buttons/default",
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
    },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
    args: {
        color: "dark",
        isLoading: false,
        children: "Click Me!",
    },
};






