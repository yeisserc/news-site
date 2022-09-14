import { AppBar, styled, Toolbar, useTheme, useMediaQuery } from '@mui/material';
import Menu from '../Menu/Menu';
import Logo from './Logo';
import MobileMenu from '../Menu/MobileMenu';

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  height: '4rem'
});

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <AppBar component="nav" elevation={0}>
      <CustomToolbar>
        { isMobile && <MobileMenu /> }
        { !isMobile && <Logo /> }
        { !isMobile && <Menu /> }
      </CustomToolbar>
    </AppBar>
  );
}

export default Header;