// components/Layout.js
import { Container, CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';

const Layout = ({ children }) => (
  <Container component="main" maxWidth="sm">
    <CssBaseline />
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Pantry Tracker
        </Typography>
      </Toolbar>
    </AppBar>
    {children}
  </Container>
);

export default Layout;

