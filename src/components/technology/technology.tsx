import { Flex, Grid } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { technology } from "../../config/constants";
import SectionTitle from "../section-title/section-title";
import TechnologyCard from "../Technology-card/technology-card";

const Technology = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle
        title={t("Technology_home_title", { ns: "home" })}
        subtitle={t("Technology_sub_title", { ns: "home" })}
      />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={4}
        py={4}
      >
        {technology.map((item, index) => {
          return <TechnologyCard key={index} item={item} />;
        })}
      </Grid>
    </>
  );
};

export default Technology;
