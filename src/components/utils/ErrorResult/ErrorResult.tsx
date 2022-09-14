import { Typography } from "@mui/material";
import Result from "../Result";
import errorIcon from "assets/images/error.png";
import { ReactNode } from "react";

interface ErrorResultProps {
  image?: ReactNode;
  message?: string;
}

const ErrorResult = ({ image, message }: ErrorResultProps) => {
  return (
    <Result>
      {image || <img src={errorIcon} alt="Error icon" />}
      <Typography variant="h5" gutterBottom textAlign="center" color="error.main">
        {message || "Upps, something failed. Try again later!"}
      </Typography>
    </Result>
  );
}

export default ErrorResult;