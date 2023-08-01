import Header from "./components/Header";
import { Container } from "./styles/AppStyles";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
