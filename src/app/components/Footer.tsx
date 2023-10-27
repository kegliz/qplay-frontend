import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function Footer() {
  const { setColorScheme } = useMantineColorScheme();

  return (

    <Group justify="center" mt="xl">
      {'Q'}
      {' '}
      {new Date().getFullYear()}.

      <Button variant="outline" onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
    </Group>
  );
}
