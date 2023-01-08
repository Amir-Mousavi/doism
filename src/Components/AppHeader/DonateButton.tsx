import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/react";
import { FaDonate } from "react-icons/fa";
import React from "react";

export function DonateButton() {
  const { t } = useTranslation();
  return (
    <Button
      onClick={() => {
        window.open("https://paypal.me/amirmousavie?locale.x=en_US", "_blank");
      }}
      color="white"
      variant="unstyled"
      leftIcon={<FaDonate />}
    >
      {t("donate")}
    </Button>
  );
}
