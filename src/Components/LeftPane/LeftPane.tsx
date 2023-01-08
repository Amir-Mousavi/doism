import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSelectors } from "../../redux/app.selectors";
import { actions } from "../../redux/appSlice";
import { LeftPaneContainer } from "./LeftPane.style";
import HamburgerButton from "../Shared/HamburgerButton";

export default function LeftPane() {
  const dispatch = useDispatch();
  const isLeftDrawerOpen = useSelector(appSelectors.isLeftDrawerOpen);

  if (!isLeftDrawerOpen) {
    return null;
  }

  // RxHamburgerMenu

  return (
    <LeftPaneContainer>
      <HamburgerButton
        onClick={() => {
          dispatch(actions.closeLeftDrawer());
        }}
      />
    </LeftPaneContainer>
  );
}
