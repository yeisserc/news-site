import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <Typography variant="h1" gutterBottom>
      { children }
    </Typography>
  );
}

export default PageTitle;