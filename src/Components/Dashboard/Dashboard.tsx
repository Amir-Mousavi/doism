import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import { actions } from "../../redux/appSlice";
import { appSelectors } from "../../redux/app.selectors";
import LeftPane from "../LeftPane";
import HamburgerButton from "../Shared/HamburgerButton";

export default function Dashboard() {
  const dispatch = useDispatch();
  const isLeftDrawerOpen = useSelector(appSelectors.isLeftDrawerOpen);
  return (
    <Flex>
      <LeftPane />
      <div>
        {!isLeftDrawerOpen && (
          <HamburgerButton
            onClick={() => {
              dispatch(actions.openLeftDrawer());
            }}
          />
        )}
        <h2>Dashboard</h2>
      </div>
    </Flex>
  );
}
