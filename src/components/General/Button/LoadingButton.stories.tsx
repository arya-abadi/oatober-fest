import Button from './Button';
import {Meta, StoryObj} from "@storybook/nextjs";


const meta: Meta<typeof Button> = {
    title: "components/Buttons/loadingButton",
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
    },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
    args: {
        isLoading: true,
    },
};





