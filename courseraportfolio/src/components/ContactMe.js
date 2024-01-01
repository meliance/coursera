import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreen from "./FullScreen";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {},
    validationSchema: Yup.object({}),
  });

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <FullScreen isDarkBackground backgroundColor="#512DA8" py={16} spacing={8}>
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme">
          Contact me
        </Heading>
        {/* Add internal links to Projects and Contact Me sections */}
        <Box>
          <a href="#projects-section" onClick={handleClick("projects")}>
            Projects
          </a>{" "}
          |{" "}
          <a href="#contactme-section" onClick={handleClick("contactme")}>
            Contact Me
          </a>
        </Box>
        <Box p={6} rounded="md" w="100%">
          <form>
            <VStack spacing={4}>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input id="firstName" name="firstName" />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              {/* ... (other form controls) */}
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreen>
  );
};

export default LandingSection;
