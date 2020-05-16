import { createMuiTheme } from "@material-ui/core/styles"
import { generateRgbScale } from "./utils/generateRgbScale"
import pxToRem from "./utils/pxToRem"

export const palette = {
  general: {
    white: "#ffffff",
    black: generateRgbScale(0, 0, 0),
  }
}

const overrides = {}

const defaultTypography = {}

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
