import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import Flex from "../Flex";

interface ResultProps {
  children: ReactNode
}

const Result = ({ children }: ResultProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Flex sx={{ p: 3 }} justifyContent="center">
      <Box sx={{
        width: isMobile ? '100%' : 400,
        '& > :not(style)': {
          width: '100%'
        }
      }}>
        { children }
      </Box>
    </Flex>
  );
}

export default Result;