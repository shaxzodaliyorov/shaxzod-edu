import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { FiChevronDown } from "react-icons/fi";
import { Languages, navigation } from "../../config/constants";
import { SideBarProps } from "./sidebar.props";

const Sidebar = ({ Toggle }: SideBarProps) => {
  const { asPath } = useRouter();
  const { t, i18n } = useTranslation();

  const onLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box
      w={{ base: "full", md: "300px" }}
      pos={"fixed"}
      zIndex={99}
      transition={"all 0.3s linear"}
      left={{ base: Toggle ? 0 : "-100%", lg: 0 }}
      top={"10vh"}
      overflowY="scroll"
      css={{
        "&::-webkit-scrollbar": { width: "1px" },
        "&::-webkit-scrollbar-track": { width: "1px" },
        "&::-webkit-scrollbar-thumb": { background: "transparent" },
      }}
      h={"90vh"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.900", "gray.50")}
      borderRight={"1px"}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Container maxW={"container.xl"}>
        <Menu>
          <MenuButton
            w={"full"}
            my={4}
            display={{ base: "block", md: "none" }}
            as={Button}
            rightIcon={<FiChevronDown />}
            colorScheme={"green"}
          >
            {i18n.resolvedLanguage.toLocaleUpperCase()}
          </MenuButton>
          <MenuList p={0} overflow={"hidden"}>
            {Languages.map((item) => (
              <MenuItem
                backgroundColor={
                  i18n.resolvedLanguage === item.type ? "green.500" : ""
                }
                icon={<item.icon />}
                minH="48px"
                key={item.type}
                onClick={() => onLanguage(item.type)}
              >
                <span>{item.label}</span>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        {navigation.map((item, index) => {
          return (
            <Box key={index}>
              <Text
                color={useColorModeValue("gray.700", "gray.300")}
                fontWeight={"bold"}
                mt={2}
                fontSize={"xl"}
              >
                {t(item.title, { ns: "layout" })}
              </Text>
              {item.nav.map((nav, idx) => {
                const active = asPath === nav.route;
                return (
                  <Link href={nav.route} key={idx} prefetch={false} >
                    <Button
                      colorScheme={"green"}
                      variant={active ? "solid" : "ghost"}
                      w={"full"}
                      justifyContent={"flex-start"}
                      h={14}
                      mt={4}
                    >
                      <HStack gap={2}>
                        <Icon as={nav.icon} />
                        <Text>{t(nav.label, { ns: "layout" })}</Text>
                      </HStack>
                    </Button>
                  </Link>
                );
              })}
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default Sidebar;
