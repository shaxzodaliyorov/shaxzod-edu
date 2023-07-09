import { Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { SectionTitle } from "../../components";

const AboutPage = () => {
  return (
    <>
      <SectionTitle
        title="About Us"
        subtitle="Siz biz biz haqimizda bilmoqchi bo'lsangiz ushbu sahifada batafsil tanishasiz !"
      />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        h={{ base: "95vh", md: "80vh" }}
        alignItems={"center"}
      >
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Our Mission</Heading>
          <Text fontSize={"lg"}>
            oluptatibus recusandae nobis pariatur doloribus a dolores quaerat
            fuga ullam dolore quod nemo ipsa! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusantium, expedita tempora
            doloremque id laudantium distinctio dignissimos voluptatibus
            recusandae nobis pariatur doloribus a dolores quaerat fuga ullam
            dolore quod nemo ipsa!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusantium, expedita tempora doloremque id
            laudantium distinctio dignissimos v
          </Text>
        </Stack>
        <Stack>
          <Image src="/demo.png" alt={"shaxzod aliyorov"} />
        </Stack>
      </Grid>
    </>
  );
};

export default AboutPage;
