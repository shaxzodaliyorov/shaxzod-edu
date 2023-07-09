import { Box, Button, Spinner, useToast } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/redux";
import USER from "../../services/user.services";
import ProfileValidation from "../../validations/profile.validation";
import SectionTitle from "../section-title/section-title";
import TextFeild from "../TextFeild/TextFeild";

const ProfileChangePassword = () => {
  const [isloading, setIsloading] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();
  const toast = useToast();
  const ChangePasswordSubmit = async (
    formdata: { password: string },
    actions: FormikHelpers<any>
  ) => {
    setIsloading(true);
    const response = await USER.UpdatePassword(
      user?.email as string,
      formdata.password
    );
    setIsloading(false);
    toast({
      title: "Parol Muafaqiyatli o'zgartirildi !",
      position: "top-right",
      status: "success",
      isClosable: true,
      duration: 3000,
    });
    actions.resetForm();
  };
  return (
    <Box>
      <SectionTitle
        title="Yangi parol !"
        subtitle="Yangi parolingiz o'rnatishingiz mumkin."
      />
      <Formik
        initialValues={{ password: "" }}
        validationSchema={ProfileValidation.chanagePassword()}
        onSubmit={ChangePasswordSubmit}
      >
        <Form>
          <TextFeild
            label={"Yangi Parol"}
            type="password"
            name="password"
            placeholder="****"
          />
          <Button
            w="full"
            mt={2}
            h={12}
            bg="green.400"
            color={"white"}
            colorScheme={"green"}
            type={"submit"}
            isDisabled={isloading}
          >
            {isloading ? <Spinner size={"md"} /> : "Saqlash"}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default ProfileChangePassword;
