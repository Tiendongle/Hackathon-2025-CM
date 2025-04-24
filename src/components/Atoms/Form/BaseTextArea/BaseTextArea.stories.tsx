import type { Meta, StoryObj } from "@storybook/react";

import BaseTextArea from "./BaseTextArea";

const meta: Meta<typeof BaseTextArea> = {
  component: BaseTextArea,
};

export default meta;

type Story = StoryObj<typeof BaseTextArea>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder for input compoenent",
    value:
      "Nam tempor lectus interdum nibh iaculis dapibus. Mauris placerat cursus ligula, pharetra posuere diam condimentum eget. Donec congue pharetra est, id cursus odio condimentum sit amet. Donec rutrum arcu quam, eget sollicitudin velit mollis in. Praesent felis felis, tristique ac ultricies non, iaculis vitae urna. Curabitur vestibulum velit quis fermentum interdum. Nullam in velit at nisl dignissim porta ut et ante. Duis vitae ex a sem rhoncus sagittis. Ut dignissim eros in lacus bibendum, eget auctor ipsum ornare. Praesent consectetur nisi sed aliquam dapibus. Fusce quis turpis urna. Nam tortor enim, ultricies ac mattis a, aliquam sed felis. Donec ultricies malesuada metus at pulvinar.",
  },
};
