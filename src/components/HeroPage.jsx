import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Hero from "../assets/images/image-hero-desktop.png";
import PropTypes from "prop-types";
import Databiz from "../assets/images/client-databiz.svg";
import Audiophile from "../assets/images/client-audiophile.svg";
import Meet from "../assets/images/client-meet.svg";
import Maker from "../assets/images/client-maker.svg";

const HeroPage = ({ setShowFeatures, setShowCompany }) => {
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      display={"flex"}
      onClick={() => {
        [setShowFeatures(false), setShowCompany(false)];
      }}
      flexDirection={"row-reverse"}
      flexWrap={"wrap"}
      w={["375px", "768px", "768px", "1024px", "1440px"]}
      justifyContent={"space-between"}
    >
      <Box
        paddingRight={["0px", "320px", "10px", "30px", "130px"]}
        pt={["0px", "320px", "30px", "30px", "0px"]}
        pb={["320px", "320px", "200px", "150px", "130px"]}
      >
        <Image
          src={Hero}
          w={["0px", "320px", "290px", "370px", "480px"]}
          alt="hero-image"
        />
      </Box>
      <Box
        paddingLeft={["20px", "320px", "40px", "60px", "170px"]}
        w={["340px", "320px", "468px", "600px", "770px"]}
        paddingTop={["320px", "320px", "70px", "100px", "100px"]}
      >
        <Box display={"flex"} flexDir={{ base: "row", md: "column" }}>
          <Text
            mr={"0.5rem"}
            fontWeight={"700"}
            fontFamily={"epilogue"}
            lineHeight={["20px", "320px", "50px", "65px", "70px"]}
            fontSize={["30px", "320px", "55px", "65px", "80px"]}
          >
            Make
          </Text>
          <Text
            mr={"0.5rem"}
            fontWeight={"700"}
            fontFamily={"epilogue"}
            lineHeight={["20px", "320px", "50px", "65px", "70px"]}
            fontSize={["30px", "320px", "55px", "65px", "80px"]}
          >
            remote work
          </Text>
        </Box>
        <Text
          w={["320px", "320px", "338px", "428px", "428px"]}
          marginTop={["320px", "320px", "10px", "10px", "50px"]}
          fontSize={"20px"}
          fontWeight={"500"}
          textAlign={"justify"}
          textColor={"hsl(0, 0%, 41%)"}
        >
          Get your team in sync, no matter your location.
          {isSmallerScreen ? null : <br />}
          Streamline processes, create team rituals, and watch productivity
          soar.
        </Text>

        <Button
          w={"165px"}
          h={"60px"}
          borderRadius={"15px"}
          marginTop={["320px", "320px", "20px", "30px", "60px"]}
          bgColor={"black"}
          _hover={{
            textColor: "black",
            borderColor: "white",
            bgColor: "hsl(0, 0%, 96%)",
            outlineColor: "black",
          }}
          textColor={"white"}
        >
          <Text fontSize={"20px"}>Learn more</Text>
        </Button>
        <HStack
          gap={["320px", "320px", "15px", "40px", "40px"]}
          mt={["320px", "320px", "40px", "70px", "110px"]}
        >
          <Image src={Databiz} alt="hero-image" />
          <Image src={Audiophile} alt="hero-image" />
          <Image src={Meet} alt="hero-image" />
          <Image src={Maker} alt="hero-image" />
        </HStack>
      </Box>
    </Box>
  );
};
HeroPage.propTypes = {
  setShowFeatures: PropTypes.func,
  setShowCompany: PropTypes.func,
};
export default HeroPage;
