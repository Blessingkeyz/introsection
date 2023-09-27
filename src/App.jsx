import { Box } from "@chakra-ui/react";
import "./App.css";
import HeroPage from "./components/HeroPage";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  return (
    <Box
      w={["375px", "425px", "768px", "1024px", "1440px"]}
      bgColor={"hsl(0, 0%, 96%)"}
    >
      <Nav
        showFeatures={showFeatures}
        setShowFeatures={setShowFeatures}
        showCompany={showCompany}
        setShowCompany={setShowCompany}
      />
      <HeroPage
        showFeatures={showFeatures}
        setShowFeatures={setShowFeatures}
        showCompany={showCompany}
        setShowCompany={setShowCompany}
      />
    </Box>
  );
}

export default App;
