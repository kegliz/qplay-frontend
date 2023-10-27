//import React from 'react'
import { Link } from "react-router-dom";
import * as classes from "./Home.css";
import { Paper, Text, Button, Center } from '@mantine/core';
import { ROUTE_DESIGN, ROUTE_DESIGN_STATE } from "../routes";

function Home() {
  return (
    <Center className={classes.home}>
      <Paper className={classes.paper}>
        <Text size="xl">Welcome to the Quantum Playground!</Text>
        <Text size="sm">This is a place to learn about and design quantum circuits.</Text>
        <Text size="sm">Click the button below to start designing!</Text>
        <br />
        <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
          <Link className={classes.link} to={ROUTE_DESIGN} state={ROUTE_DESIGN_STATE} >Start Designing Quantum Circuits</Link>
        </Button>
        <br />

      </Paper>



    </Center >
  );
}

export default Home