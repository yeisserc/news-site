import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <Box
      pt={9}
      pb={5}
    >
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
}

export default Content;