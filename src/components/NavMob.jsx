import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack as VStack,
  Image,
  Link,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Features, Company } from "./Dropdown";
import PropTypes from "prop-types";
import ArrowDown from "../assets/images/icon-arrow-down.svg";
import ArrowUp from "../assets/images/icon-arrow-up.svg";
import Logo from "/logo.svg";

const NavMob = ({
  showFeatures,
  setShowFeatures,
  showCompany,
  setShowCompany,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      py={["25px", "25px", "45px"]}
      px={["15px", "15px", "35px"]}
      w={"100%"}
      justifyContent={"space-between"}
    >
      <Image
        src={Logo}
        pos={"relative"}
        w={["25%", "25%", "20%"]}
        h={["25%", "25%", "100%"]}
        alt={"logo"}
      />

      <IconButton
        mt={"-15px"}
        size={"lg"}
        variant={"ghost"}
        aria-label="menu"
        onClick={onOpen}
        icon={<HamburgerIcon boxSize={["30px", "30px", "50px"]} />}
      />
      <Drawer
        placement="right"
        variant={"secondary"}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <IconButton
              ml={["240px", "240px", "230px"]}
              size={"lg"}
              variant={"ghost"}
              aria-label="close"
              onClick={onClose}
              icon={<CloseIcon boxSize={["30px", "30px", "40px"]} />}
            />
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDirection={"column"} justifyContent={"space-between"}>
              <VStack>
                <Flex flexDirection={"column"} h="150px" gap={3}>
                  <Link _hover={{ textDecoration: "none" }}>
                    <VStack
                      onClick={() => [
                        setShowFeatures((prev) => !prev),
                        setShowCompany(false),
                      ]}
                    >
                      <Text
                        fontSize={["18px", "18px", "20px"]}
                        fontWeight={"500"}
                        _hover={{ textColor: "black", fontWeight: "700" }}
                        textAlign={"justify"}
                        textColor={"hsl(0, 0%, 60%)"}
                      >
                        Features
                      </Text>
                      {/* Dropdown */}
                      <Image src={!showFeatures ? ArrowDown : ArrowUp} />
                    </VStack>
                  </Link>
                  {showFeatures ? <Features /> : null}
                  <Link _hover={{ textDecoration: "none" }}>
                    <VStack
                      pos={"relative"}
                      pt={
                        showFeatures || showCompany
                          ? !showCompany
                            ? "145px"
                            : "0px"
                          : "0px"
                      }
                      onClick={() => [
                        setShowCompany((prev) => !prev),
                        setShowFeatures(false),
                      ]}
                    >
                      <Text
                        fontSize={["18px", "18px", "20px"]}
                        fontWeight={"500"}
                        textAlign={"justify"}
                        textColor={"hsl(0, 0%, 60%)"}
                        _hover={{ textColor: "black", fontWeight: "700" }}
                      >
                        Company
                      </Text>
                      {/* Dropdown */}
                      <Image src={!showCompany ? ArrowDown : ArrowUp} />
                    </VStack>
                  </Link>
                  {showCompany ? <Company /> : null}
                  <Link
                    _hover={{ textDecoration: "none" }}
                    onClick={() => {
                      [setShowFeatures(false), setShowCompany(false)];
                    }}
                    pt={
                      showFeatures || showCompany
                        ? !showCompany
                          ? "0px"
                          : "110px"
                        : "0px"
                    }
                    pos={"relative"}
                  >
                    <Text
                      fontSize={["18px", "18px", "20px"]}
                      fontWeight={"500"}
                      _hover={{ textColor: "black", fontWeight: "700" }}
                      textAlign={"justify"}
                      textColor={"hsl(0, 0%, 60%)"}
                    >
                      Careers
                    </Text>
                  </Link>
                  <Link
                    pos={"relative"}
                    _hover={{ textDecoration: "none" }}
                    onClick={() => {
                      [setShowFeatures(false), setShowCompany(false)];
                    }}
                  >
                    <Text
                      fontSize={["18px", "18px", "20px"]}
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
              </VStack>
              <Flex
                pos={"relative"}
                flexDirection={"column"}
                w={"100%"}
                pt={
                  showFeatures || showCompany
                    ? !showCompany
                      ? "200px"
                      : "150px"
                    : "30px"
                }
                onClick={() => {
                  [setShowFeatures(false), setShowCompany(false)];
                }}
                align={"center"}
                // alignContent={"center"}
              >
                <Link
                  _hover={{ textDecoration: "none" }}
                  onClick={() => {
                    [setShowFeatures(false), setShowCompany(false)];
                  }}
                >
                  <Text
                    fontSize={["18px", "18px", "20px"]}
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
                  pt={"20px"}
                  onClick={() => {
                    [setShowFeatures(false), setShowCompany(false)];
                  }}
                >
                  <Button
                    fontSize={["18px", "18px", "20px"]}
                    fontWeight={"500"}
                    borderRadius={"10px"}
                    h={"35px"}
                    w={"190px"}
                    textAlign={"justify"}
                    _hover={{
                      textColor: "black",
                      borderColor: "white",
                      bgColor: "white",
                      outlineColor: "black",
                    }}
                    textColor={"hsl(0, 0%, 60%)"}
                    bgColor={"white"}
                    outlineColor={"hsl(0, 0%, 60%)"}
                  >
                    Register
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
NavMob.propTypes = {
  showFeatures: PropTypes.bool,
  showCompany: PropTypes.bool,
  setShowFeatures: PropTypes.func,
  setShowCompany: PropTypes.func,
};

export default NavMob;
