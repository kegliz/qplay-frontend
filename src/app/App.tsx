import "@mantine/core/styles.css";
import { Center, Container, MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { Footer } from "./components/Footer";
import * as classes from "./App.css";
import { Header } from "./components//Header";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { ROUTE_DESIGN, ROUTE_HOME, ROUTE_HOME_STATE, ROUTE_LEARN } from "./routes";
import Home from "./pages/Home";
import Design from "./pages/Design";
import Learn from "./pages/Learn";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container fluid>
        <Routes>
          <Route path={ROUTE_HOME} element={<Layout />} >
            <Route index element={<Home />} /> :
            <Route path={ROUTE_DESIGN} element={<Design />} />
            <Route path={ROUTE_LEARN} element={<Learn />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Container>
    </MantineProvider>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Center>
        <Outlet />
      </Center>
      <Footer />

    </>
  )
}

function NoMatch() {
  return (
    <Center className={classes.nomatch}>
      <h2 className={classes.nomatch404}>404 Page Not Found</h2>
      <p>
        <Link to="/" state={ROUTE_HOME_STATE}>Go to the home page</Link>
      </p>
    </Center>
  )
}