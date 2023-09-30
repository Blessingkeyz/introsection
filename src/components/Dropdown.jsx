import { Box, Flex, HStack, Image, Text, extendTheme } from "@chakra-ui/react";
import Todo from "../assets/images/icon-todo.svg";
import Calender from "../assets/images/icon-calendar.svg";
import Reminders from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";

export const Features = () => {
  return (
    <Box
      pos={"absolute"}
      borderRadius={"10px"}
      w={["320px", "320px", "320px", "150px", "160px"]}
      ml={["0px", "0px", "0px", "50px", "85px"]}
      mt={["30px", "30px", "30px", "10px", "10px"]}
      bgColor={"white"}
    >
      <Flex
        flexDirection={"column"}
        h={["200px", "320px", "320px", "160px", "160px"]}
        gap={"2"}
        pt={"3"}
        pl={"25px"}
      >
        <HStack>
          <Image src={Todo} />
          <Text
            fontSize={"18px"}
            fontWeight={"500"}
            textAlign={"justify"}
            textColor={"hsl(0, 0%, 41%)"}
          >
            TodoList
          </Text>
        </HStack>
        <HStack>
          <Image src={Calender} />
          <Text
            fontSize={"18px"}
            fontWeight={"500"}
            textAlign={"justify"}
            textColor={"hsl(0, 0%, 41%)"}
          >
            Calendar
          </Text>
        </HStack>
        <HStack>
          <Image src={Reminders} />
          <Text
            fontSize={"18px"}
            fontWeight={"500"}
            textAlign={"justify"}
            textColor={"hsl(0, 0%, 41%)"}
          >
            Reminders
          </Text>
        </HStack>
        <HStack>
          <Image src={Planning} />
          <Text
            fontSize={"18px"}
            fontWeight={"500"}
            textAlign={"justify"}
            textColor={"hsl(0, 0%, 41%)"}
          >
            planning
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};
export const Company = () => {
  return (
    <Box
      pos={"absolute"}
      borderRadius={"10px"}
      w={["320px", "320px", "320px", "120px", "130px"]}
      ml={["0px", "0px", "0px", "200px", "280px"]}
      mt={["80px", "80px", "70px", "10px", "10px"]}
      bgColor={"hsl(0, 0%, 100%)"}
    >
      <Flex
        flexDirection={"column"}
        h={["320px", "320px", "110px", "110px", "130px"]}
        gap={"2"}
        pt={"3"}
        pl={"25px"}
      >
        <Text
          fontSize={"18px"}
          fontWeight={"500"}
          textAlign={"justify"}
          textColor={"hsl(0, 0%, 41%)"}
        >
          History
        </Text>
        <Text
          fontSize={"18px"}
          fontWeight={"500"}
          textAlign={"justify"}
          textColor={"hsl(0, 0%, 41%)"}
        >
          Our Team
        </Text>
        <Text
          fontSize={"18px"}
          fontWeight={"500"}
          textAlign={"justify"}
          textColor={"hsl(0, 0%, 41%)"}
        >
          Blog
        </Text>
      </Flex>
    </Box>
  );
};

export const Theme = extendTheme({
  components: {
    Drawer: {
      parts: ["dialog", "header", "body"],
      variants: {
        primary: {
          secondary: {
            dialog: {
              maxW: "220px",
            },
          },
        },
      },
    },
  },
});
