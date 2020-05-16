import { createMuiTheme } from "@material-ui/core/styles"
import { generateRgbScale } from "./utils/generateRgbScale"
import pxToRem from "./utils/pxToRem"

export const palette = {
  general: {
    white: "#ffffff",
    black: generateRgbScale(0, 0, 0),
    cta: "#1B31A8",
    ctaHover: "#6071cc"
  }
}

const overrides = {
  MuiButton: {
    contained: {
      backgroundColor: palette.general.cta,
      borderRadius: pxToRem(32),
      width: pxToRem(400),
      height: pxToRem(56),
      boxShadow: "none",
      "&:hover": {
        backgroundColor: palette.general.ctaHover,
        boxShadow: "none",
      }
    },
    label: {
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: pxToRem(18),
      lineHeight: pxToRem(24),
      color: palette.general.white,
      textTransform: "none",
    }
  }
}

const defaultTypography = {
  fontFamily: "'Work Sans', sans-serif"
}

export default createMuiTheme({
  overrides,
  typography: {
    ...defaultTypography,
    h4: {
      ...defaultTypography,
    },
  },
  palette,
})
