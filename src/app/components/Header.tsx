//import { useState } from 'react';
import { Container, Group, Text } from '@mantine/core';
import * as classes from "./Header.css";
import { Link, useLocation } from 'react-router-dom';
import { pages } from '../routes';

export function Header() {
  const { state } = useLocation();

  const items = pages.map((link) => {
    let linkClassName = classes.link;
    if (state === link.state) {
      linkClassName = classes.link_active;
    }
    return (

      <Link
        state={link.state}
        to={link.link}
        className={linkClassName}
      >
        {link.name}
      </Link>
    )
  });

  return (
    <header className={classes.header}>
      <Container fluid className={classes.inner}>
        <Text>Quantum Playground</Text>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
    </header>
  );
}