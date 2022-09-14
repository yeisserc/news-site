import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface FlexProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gap?: number;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const Flex = ({ justifyContent, alignItems, direction, gap, sx, children }: FlexProps) => {
  return (
    <Box
      display='flex'
      flexDirection={direction || 'row'}
      justifyContent={justifyContent || 'flex-start'}
      alignItems={alignItems || 'center'}
      gap={gap || 0}
      sx={sx}
    >
      { children }
    </Box>
  );
}

export default Flex;