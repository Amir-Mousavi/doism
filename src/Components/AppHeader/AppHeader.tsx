import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { AppSearch } from "./AppSearch";
import { DonateButton } from "./DonateButton";

export default function AppHeader() {
  const { t } = useTranslation();
  return (
    <Flex
      bg="#2564cf"
      padding={2}
      paddingLeft={4}
      paddingRight={8}
      justifyContent="space-between"
    >
      <Text paddingTop={1} color="white" fontSize="xl" fontWeight="bold">
        {t("doism")}
      </Text>
      <Spacer />
      <AppSearch />
      <Spacer />
      <DonateButton />
    </Flex>
  );
}
