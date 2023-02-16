import { rgba } from "polished";

const backgroundColor = "#151515";
const secondaryBg = "#2B2B2B";
const brandPrimary = "#FF5858";
const buttonPrimaryBg = brandPrimary;
const buttonSecondaryBg = secondaryBg;
const borderColor = "#343434";
const primaryFontFamily = "Inter, sans-serif";
const brandBlueShade = "#64D2FF";
const darkShade = "#272727";
const lightShade = "#fff";

const theme = {
  mode: "dark",
  backgroundColor: backgroundColor,
  textColor: "#fff",
  headerBackgroundColor: "#151515",
  headerTextColor: "#fff",

  // #TODO: optimize this later with spacing for all compoents and global
  spacing: {
    xs: "8px 16px",
    sm: "10px 20px",
    md: "12px 24px",
    lg: "16px 32px",
  },
  colors: {
    primary: "#FFF",
    primaryBg: "#FF5858",
    secondary: "#FFF",
    secondaryBg: secondaryBg,
    gray: "#6c757d",
    lightgray: "rgba(108, 117, 125, 0.05)",
    primaryHover: rgba(secondaryBg, 0.6),
    secondaryHover: rgba(secondaryBg, 0.4),
    collectionTypeColors: {
      collections: brandBlueShade,
      groupCollections: "#9564ff",
      feeds: "#ffed64",
    },

    surface: backgroundColor,
    // themeing specific colors
    light: {
      background: "#fff",
      text: "#333",
      border: borderColor,
      cardBackground: lightShade,
    },
    dark: {
      background: "#333",
      text: "#fff",
      border: borderColor,
      iconColor: rgba(lightShade, 0.8),
      cardBackground: darkShade,
    },
  },
  typography: {
    fontFamily: primaryFontFamily,
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
    },
  },

  shadow: {
    searchInput: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
  },
  button: {
    variants: {
      primary: {
        color: buttonPrimaryBg,
        backgroundColor: "rgba(0, 123, 255, 0.05)",
        hoverBg: rgba(buttonPrimaryBg, 0.6),
      },
      secondary: {
        color: "#6c757d",
        backgroundColor: "rgba(108, 117, 125, 0.05)",
        hoverBg: rgba(buttonSecondaryBg, 0.6),
      },
    },
    spacing: {
      xs: "8px 16px",
      sm: "10px 20px",
      md: "12px 24px",
      lg: "16px 32px",
    },
    sizes: {
      xs: {
        fontSize: "12px",
      },
      sm: {
        fontSize: "14px",
      },
      md: {
        fontSize: "16px",
      },
      lg: {
        fontSize: "18px",
      },
    },
  },
  zIndex: {
    sidebar: 10,
    header: 20,
    modal: 30,
  },
  sidebar: {
    width: "300px",
    background: (props) => props.theme.colors[props.theme.mode].background,
    color: (props) => props.theme.colors[props.theme.mode].text,
    border: (props) => props.theme.colors[props.theme.mode].border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    fontWeight: (props) => props.theme.typography.fontWeights.normal,
    borderColor: (props) => props.theme.colors[props.theme.mode].border,
    borderOnHoverColor: (props) => props.theme.colors.primaryBg,
  },
  searchInput: {
    background: (props) =>
      rgba(props.theme.colors[props.theme.mode].background, 0),
    color: (props) => props.theme.colors[props.theme.mode].text,
    placeholderColor: (props) =>
      rgba(props.theme.colors[props.theme.mode].text, 0.6),
    iconColor: (props) => props.theme.colors[props.theme.mode].text,
    border: (props) => props.theme.colors[props.theme.mode].border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    inputHoverBg: (props) =>
      rgba(props.theme.colors[props.theme.mode].background, 0.6),

    variants: {
      default: {
        background: (props) =>
          rgba(props.theme.colors[props.theme.mode].background, 0),
        padding: (props) => props.theme.spacing.sm,
      },
      borderStyle: {
        background: (props) =>
          rgba(props.theme.colors[props.theme.mode].background, 0.4),
        borderColor: (props) => props.theme.colors[props.theme.mode].border,
        padding: (props) => props.theme.spacing.md,
      },
    },
  },
  ListItem: {
    background: (props) => props.theme.colors[props.theme.mode].background,
    backgroundHover: (props) =>
      rgba(props.theme.colors[props.theme.mode].background, 0.6),
    color: (props) => props.theme.colors[props.theme.mode].text,
    border: (props) => props.theme.colors[props.theme.mode].border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    onHoverIconColor: (props) =>
      rgba(props.theme.colors[props.theme.mode].text, 0.4),
  },
  card: {
    background: (props) => props.theme.colors[props.theme.mode].cardBackground,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
  },
};

export default theme;
