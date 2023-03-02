import { useRecoilState } from 'recoil';
import { Flex, CSSReset, Button } from "@chakra-ui/react";

import { greetingToggleState } from "./atoms";

export const App = () => {
  const [greetingToggle, setGreetingToggle] = useRecoilState(greetingToggleState);
  const handleButtonClick = () => {
    setGreetingToggle(!greetingToggle);
  }
  return (
    <>
      <CSSReset />
      <Flex bg="special.background" as="main" w="100%" h="100vh" justify="center" align="center">
        <Button background="special.button" color="white" onClick={handleButtonClick}>{greetingToggle? "Hello world" : "Hola mundo"}</Button>
      </Flex>
    </>
  );
};
