import { Container } from "./styles/AppStyles";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default App;
