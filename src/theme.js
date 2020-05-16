import { createMuiTheme } from "@material-ui/core/styles"
import { generateRgbScale } from "./utils/generateRgbScale"
import pxToRem from "./utils/pxToRem"

export const palette = {
  general: {
    white: "#ffffff",
    black: generateRgbScale(0, 0, 0),
    cta: "#1B31A8",
    ctaHover: "#6071cc",
    darkBlue: "#1C1E1F",
    darkGray: "#F4F8FA",
    lightGray: "#E1E8ED"
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
  },
  MuiFormLabel: {
    root: {
      color: palette.general.darkBlue,
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: pxToRem(16),
      lineHeight: pxToRem(20),
      "&.Mui-focused": {
        color: palette.general.darkBlue,
      }
    }
  },
  MuiInputBase: {
    root: {
      marginTop: `${pxToRem(20)} !important`,
    },
    input: {
      padding: 0,
      width: "unset",
      flex: "1 1 auto",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: pxToRem(20),
      letterSpacing: pxToRem(-0.166667),
      color: palette.general.darkBlue,
    }
  },
  MuiInputAdornment: {
    root: {
      width: pxToRem(54),
      height: pxToRem(54),
      maxHeight: pxToRem(54),
      justifyContent: "center",
      backgroundColor: palette.general.darkGray,
      borderRight: `${pxToRem(1)} solid ${palette.general.lightGray}`,
      boxSizing: "border-box",
      borderRadius: `${pxToRem(4)} 0 0 ${pxToRem(4)}`,
    },
    positionStart: {
      marginRight: pxToRem(16)
    }
  },
  MuiInput: {
    root: {
      border: `${pxToRem(1)} solid ${palette.general.lightGray}`,
      borderRadius: `${pxToRem(4)}`,
    },
    underline: {
      "&:before": {
        borderBottom: 0,
      },
      "&:after": {
        borderBottom: 0,
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: 0,
      }
    },
  },
  MuiFormControl: {
    root: {
      width: "100%"
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
