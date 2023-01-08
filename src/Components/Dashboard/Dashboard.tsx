import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import { actions } from "../../redux/appSlice";
import { appSelectors } from "../../redux/app.selectors";
import LeftPane from "../LeftPane";
import HamburgerButton from "../Shared/HamburgerButton";
import { useTranslation } from "react-i18next";
export default function Dashboard() {
  const dispatch = useDispatch();
  const isLeftDrawerOpen = useSelector(appSelectors.isLeftDrawerOpen);
  const { t } = useTranslation();

  return (
    <Flex>
      <LeftPane />
      {!isLeftDrawerOpen && (
        <HamburgerButton
          onClick={() => {
            dispatch(actions.openLeftDrawer());
          }}
        />
      )}

      <h1>{t("doism")}</h1>
    </Flex>
  );
}
