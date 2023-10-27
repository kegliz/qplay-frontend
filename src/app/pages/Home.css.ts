import { style } from "@vanilla-extract/css";

export const home = style({
  padding: 20,
  width: '80%',
  backgroundColor: 'var(--color-container-bg)',
});

export const paper = style({
  color: 'var(--color-dark-blue)',
  backgroundColor: 'var(--color-container-bg)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '5px',
});

export const link = style({
    textDecoration: 'none',
    color: 'var(--mantine-color-white)', 
  }
);
