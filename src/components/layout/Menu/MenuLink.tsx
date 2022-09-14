import { useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface MenuLinkProps {
  to: string;
  children: ReactNode;
}

const MenuLink = ({ to, children }: MenuLinkProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

 const desktopStyle = {
  backgroundColor: "transparent",
  padding: theme.spacing(0, 3),
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.common.white
};

const desktopActiveStyle = {
  backgroundColor: theme.palette.secondary.main
};

const mobileStyle = {
  backgroundColor: "transparent",
  padding: theme.spacing(1.5, 3),
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.primary
};

const mobileActiveStyle = {
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white
}

  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...(isMobile ? mobileStyle : desktopStyle),
        ...(isActive && (isMobile ? mobileActiveStyle : desktopActiveStyle))
      })}
    >
      {children}
    </NavLink>
  );
}

export default MenuLink;