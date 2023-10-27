import { globalStyle, style } from "@vanilla-extract/css";

export const nomatch404 = style({
  color: 'var(--color-dark-blue)',
}); 
export const nomatch = style({
  flexDirection: 'column',
  backgroundColor: 'var(--color-container-bg)',
}); 

globalStyle('body', {
  margin: 0,
  vars: {
    '--color-dark-blue': '#191D3E',
    '--color-next-blue': '#103081',
    '--color-term-bg': '#FCF0F0',
    '--color-container-bg': '#DFE0F0',
    '--color-primary-blue': '#1976D2',
    '--color-disable-grey': '#91979D',
    '--color-frame-red': '#CA2626',
    '--color-incorrect-red': '#EB3223',
    '--color-correct-green': '#48B426',
    '--color-menu-hover': '#ED834E'
  }
});