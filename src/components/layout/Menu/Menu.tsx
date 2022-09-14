import { Box } from "@mui/material";
import MenuLink from "components/layout/Menu/MenuLink"; 
import { navItems } from "./navItems";

const Menu = () => {
  return (
    <Box
      display='flex'
      gap={2}
      height='100%'
      ml={4}
    >
      {navItems.map((item) => (
        <MenuLink key={item.to} to={item.to}>
          {item.title}
        </MenuLink>
      ))}
    </Box>
  );
}

export default Menu;