import { Box, Button, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import { Features, Company } from "./Dropdown";
import PropTypes from "prop-types";
import Logo from "/logo.svg";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import ArrowUp from "../assets/images/icon-arrow-up.svg";

const Nav = ({
  showFeatures,
  setShowFeatures,
  showCompany,
  setShowCompany,
}) => {
  return (
    <Box
      display={["none", "none", "none", "block", "block"]}
      // w={["320px", "320px", "160px", "160px", "1440px"]}
      ml={["none", "none", "30px", "40px", "40px"]}
      pt={["320px", "320px", "20px", "20px", "20px"]}
      pb={["320px", "320px", "110px", "80px", "80px"]}
    >
      <Flex justifyContent={"space-between"}>
        <HStack w={["375px", "425px", "450px", "600px", "600px"]}>
          <Image src={Logo} />
          <Flex
            flexDirection={"row"}
            pl={["320px", "320px", "30px", "30px", "70px"]}
            w={["320px", "320px", "400px", "400px", "690px"]}
            justifyContent={"space-between"}
          >
            <Link _hover={{ textDecoration: "none" }}>
              <HStack
                onClick={() => [
                  setShowFeatures((prev) => !prev),
                  setShowCompany(false),
                ]}
              >
                <Text
                  fontSize={"18px"}
                  fontWeight={"500"}
                  _hover={{ textColor: "black", fontWeight: "700" }}
                  textAlign={"justify"}
                  textColor={"hsl(0, 0%, 60%)"}
                >
                  Features
                </Text>
                {/* Dropdown */}
                <Image src={!showFeatures ? ArrowDown : ArrowUp} />
              </HStack>
            </Link>

            <Link _hover={{ textDecoration: "none" }}>
              <HStack
                onClick={() => [
                  setShowCompany((prev) => !prev),
                  setShowFeatures(false),
                ]}
              >
                <Text
                  fontSize={"18px"}
                  fontWeight={"500"}
                  textAlign={"justify"}
                  textColor={"hsl(0, 0%, 60%)"}
                  _hover={{ textColor: "black", fontWeight: "700" }}
                >
                  Company
                </Text>
                {/* Dropdown */}
                <Image src={!showCompany ? ArrowDown : ArrowUp} />
              </HStack>
            </Link>
            <Link
              _hover={{ textDecoration: "none" }}
              onClick={() => {
                [setShowFeatures(false), setShowCompany(false)];
              }}
            >
              <Text
                fontSize={"18px"}
                fontWeight={"500"}
                _hover={{ textColor: "black", fontWeight: "700" }}
                textAlign={"justify"}
                textColor={"hsl(0, 0%, 60%)"}
              >
                Careers
              </Text>
            </Link>
            <Link
              _hover={{ textDecoration: "none" }}
              onClick={() => {
                [setShowFeatures(false), setShowCompany(false)];
              }}
            >
              <Text
                fontSize={"18px"}
                fontWeight={"500"}
                _hover={{
                  textColor: "black",
                  fontWeight: "700",
                }}
                textAlign={"justify"}
                textColor={"hsl(0, 0%, 60%)"}
              >
                About
              </Text>
            </Link>
          </Flex>
        </HStack>
        <Flex
          flexDirection={"row"}
          w={["320px", "320px", "180px", "180px", "180px"]}
          mr={["320px", "320px", "35px", "70px", "70px"]}
          pt={"10px"}
          onClick={() => {
            [setShowFeatures(false), setShowCompany(false)];
          }}
          justifyContent={"space-between"}
        >
          <Link
            _hover={{ textDecoration: "none" }}
            onClick={() => {
              [setShowFeatures(false), setShowCompany(false)];
            }}
          >
            <Text
              fontSize={"18px"}
              textDecoration={"none"}
              fontWeight={"500"}
              _hover={{
                textColor: "black",
              }}
              textAlign={"justify"}
              textColor={"hsl(0, 0%, 60%)"}
            >
              Login
            </Text>
          </Link>
          <Link
            _hover={{ textDecoration: "none" }}
            onClick={() => {
              [setShowFeatures(false), setShowCompany(false)];
            }}
          >
            <Button
              fontSize={"18px"}
              fontWeight={"500"}
              borderRadius={"10px"}
              h={"35px"}
              textAlign={"justify"}
              _hover={{
                textColor: "black",
                borderColor: "white",
                bgColor: "white",
                outlineColor: "black",
              }}
              textColor={"hsl(0, 0%, 60%)"}
              bgColor={"hsl(0, 0%, 96%)"}
              outlineColor={"hsl(0, 0%, 60%)"}
            >
              Register
            </Button>
          </Link>
        </Flex>
      </Flex>
      {showCompany ? <Company /> : null}
      {showFeatures ? <Features /> : null}
    </Box>
  );
};
Nav.propTypes = {
  showFeatures: PropTypes.bool,
  showCompany: PropTypes.bool,
  setShowFeatures: PropTypes.func,
  setShowCompany: PropTypes.func,
};

export default Nav;
