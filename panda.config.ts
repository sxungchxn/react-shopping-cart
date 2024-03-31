import { defineConfig } from '@pandacss/dev'
import { tokens } from '@/styles/tokens'
import { textStyles } from '@/styles/text-styles'
import { globalCss } from '@/styles/global'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.stories.{tsx}',
  ],

  // Files to exclude
  exclude: [],

  plugins: [require('@pandacss/dev')],

  // global css
  globalCss,

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
      textStyles,
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
