import { Meta, StoryObj } from "@storybook/react";
import Header from "../components/Header";

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {};
