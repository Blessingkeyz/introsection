import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Hero from "../assets/images/image-hero-desktop.png";
import Heros from "../assets/images/image-hero-mobile.png";
import PropTypes from "prop-types";
import Data from "../assets/images/client-databiz.svg";
import Audio from "../assets/images/client-audiophile.svg";
import Meet from "../assets/images/client-meet.svg";
import Maker from "../assets/images/client-maker.svg";
import NavMob from "./NavMob";

const HeroPage = ({
  showFeatures,
  setShowFeatures,
  showCompany,
  setShowCompany,
}) => {
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      // display={"flex"}
      display={isSmallerScreen ? "block" : "flex"}
      onClick={() => {
        [setShowFeatures(false), setShowCompany(false)];
      }}
      flexDirection={"row-reverse"}
      flexWrap={"wrap"}
      w={["375px", "425px", "768px", "1024px", "1440px"]}
      justifyContent={"space-between"}
    >
      {isSmallerScreen ? (
        <NavMob
          showFeatures={showFeatures}
          setShowFeatures={setShowFeatures}
          showCompany={showCompany}
          setShowCompany={setShowCompany}
        />
      ) : null}
      <Box
        paddingRight={["0px", "0px", "0px", "30px", "130px"]}
        ml={["0px", "0px", "19%", "0px", "0px"]}
        pt={["0px", "0px", "0px", "30px", "0px"]}
        pb={["0px", "0px", "0px", "150px", "130px"]}
      >
        <Image
          src={isSmallerScreen ? Heros : Hero}
          w={["100%", "564px", "80%", "370px", "480px"]}
          alt="hero-image"
        />
      </Box>
      <Box
        paddingLeft={["20px", "20px", "25%", "60px", "170px"]}
        w={["340px", "350px", "500px", "600px", "770px"]}
        paddingTop={["32px", "33px", "70px", "100px", "100px"]}
      >
        <Text
          fontWeight={"700"}
          fontFamily={"epilogue"}
          w={["336px", "320px", "450px", "435px", "525px"]}
          textAlign={{ base: "center", md: "left" }}
          lineHeight={["20px", "20px", "50px", "65px", "70px"]}
          fontSize={["32px", "32px", "45px", "65px", "80px"]}
        >
          Make
          {isSmallerScreen ? null : <br />} remote work
        </Text>

        <Text
          w={["336px", "320px", "420px", "435px", "435px"]}
          marginTop={["30px", "30px", "10px", "10px", "50px"]}
          fontSize={{ base: "18px", md: "20px" }}
          fontWeight={"500"}
          textAlign={{ base: "center", md: "justify" }}
          textColor={"hsl(0, 0%, 41%)"}
        >
          Get your team in sync, no matter your location.&nbsp;
          {isSmallerScreen ? null : <br />}
          Streamline processes, create team rituals, and watch productivity
          soar.
        </Text>

        <Button
          w={{ base: "135px", md: "165px" }}
          h={"60px"}
          borderRadius={"15px"}
          mt={["30px", "30px", "50px", "30px", "60px"]}
          ml={["100px", "120px", "120px", "0px", "0px"]}
          bgColor={"black"}
          _hover={{
            textColor: "black",
            borderColor: "white",
            bgColor: "hsl(0, 0%, 96%)",
            outlineColor: "black",
          }}
          textColor={"white"}
        >
          <Text fontSize={{ base: "18", md: "20px" }}>Learn more</Text>
        </Button>
        <HStack
          gap={["30px", "30px", "20px", "40px", "40px"]}
          mt={["50px", "50px", "70px", "70px", "110px"]}
          pb={isSmallerScreen ? "25%" : 0}
        >
          <Image w={{ base: "20%", md: "100%" }} src={Data} alt="hero-image" />
          <Image w={{ base: "20%", md: "100%" }} src={Audio} alt="hero-image" />
          <Image w={{ base: "20%", md: "100%" }} src={Meet} alt="hero-image" />
          <Image w={{ base: "20%", md: "100%" }} src={Maker} alt="hero-image" />
        </HStack>
      </Box>
    </Box>
  );
};
HeroPage.propTypes = {
  showFeatures: PropTypes.bool,
  showCompany: PropTypes.bool,
  setShowFeatures: PropTypes.func,
  setShowCompany: PropTypes.func,
};
export default HeroPage;
