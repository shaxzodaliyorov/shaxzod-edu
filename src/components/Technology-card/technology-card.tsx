import { Card, Heading, Icon, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const TechnologyCard = ({ item }: any) => {
  const { t } = useTranslation();
  return (
    <Card p={8} w={"full"}>
      <Icon my={2} w={50} h={50} as={item.icon} />
      <Heading>{item.title}</Heading>
      <Text my={2}>{t(item.subtitle, { ns: "home" })}</Text>
    </Card>
  );
};

export default TechnologyCard;
