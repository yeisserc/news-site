import { Stack } from "@mui/material";
import Flex from "components/utils/Flex";
import { ReactNode } from "react";

interface IconTextProps {
  icon: ReactNode;
  text: ReactNode;
}

const IconText = ({icon, text}: IconTextProps) => {
  return (
    <Flex
      gap={0.6}
    >
      {icon}
      {text}
    </Flex>
  );
}

export default IconText;