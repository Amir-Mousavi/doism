import React from "react";
import { IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HamburgerButtonProps } from "./HamburgerButton.type";

export default function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    <IconButton
      aria-label={"Close Left Pane"}
      icon={<RxHamburgerMenu />}
      variant="ghost"
      onClick={onClick}
    />
  );
}
