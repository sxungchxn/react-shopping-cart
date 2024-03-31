import { defineConfig } from '@pandacss/dev'
import { tokens } from '@/styles/tokens'
import { textStyles } from '@/styles/text-styles'
import { globalCss } from '@/styles/global'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // global css
  globalCss,

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
      // tokens: {
      //   colors: {
      //     aqua: {
      //       light: {
      //         value: '#2AC1BC',
      //       },
      //       dark: {
      //         value: '#22A6A2',
      //       },
      //     },
      //     brown: { value: '#73675C' },
      //     black: { value: '#333333' },
      //     white: { value: '#FFFFFF' },
      //     gray: {
      //       100: { value: '#DDDDDD' },
      //       300: { value: '#BBBBBB' },
      //       500: { value: '#AAAAAA' },
      //       700: { value: '#22A6A2' },
      //     },
      //   },
      // },
      textStyles,
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
