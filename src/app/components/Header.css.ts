import { rem } from "@mantine/core";
import { style } from "@vanilla-extract/css";

export const header = style({
  height: rem('56px'),
  marginBottom: rem('20px'),
  backgroundColor: 'var(--mantine-color-body)',
  borderBottom: rem('1px') + " solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))"
});

export const inner = style({
  height: rem('56px'),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const link = style({
  display: 'block',
  lineHeight: 1,
  padding: rem('8px') + " " + rem('12px'),
  borderRadius: 'var(--mantine-radius-sm)',
  textDecoration: 'none',
  color: 'light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))',
  fontSize: 'var(--mantine-font-size-sm)',
  fontWeight: 500,
  ':hover': {
    backgroundColor: 'var(--color-menu-hover)',
    color: 'var(--mantine-color-white)'
  }
});

export const link_active = style(
  [link, 
    {
      backgroundColor: 'var(--mantine-color-blue-filled)',
      color: 'var(--mantine-color-white)',
      ':hover': {
        backgroundColor: 'var(--mantine-color-blue-filled)',
        color: 'var(--mantine-color-white)',
         }    
    }
  ]);

  