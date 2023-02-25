import { lighten, rgba } from "polished";

const darkBackgroundColor = "#151515";
const lightBackgroundColor = "#fff";
const secondaryBg = "#2B2B2B";
const brandPrimary = "#FF5858";
const buttonPrimaryBg = brandPrimary;
const buttonSecondaryBg = secondaryBg;
const darkBorderColor = "#343434";
const lightBorderColor = "#f1f1f1";
const primaryFontFamily = "Inter, sans-serif";
const brandBlueShade = "#64D2FF";
const darkShade = "#272727";
const lightShade = "#fff";
const darkTextColor = "#333";
const lightTextColor = "#fff";

const lightTheme = {
  backgroundColor: lightBackgroundColor,
  text: darkTextColor,
  secondaryText: rgba(lightTextColor, 0.5),
  border: lightBorderColor,
  cardBackground: lightShade,
  mutedText: rgba(darkTextColor, 0.5),
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
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
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

    surface: darkBackgroundColor,
    // themeing specific colors
    light: {
      background: "#fff",
      text: darkTextColor,
      secondaryText: rgba(lightTextColor, 0.5),
      border: lightBorderColor,
      cardBackground: lightShade,
      mutedText: rgba(darkTextColor, 0.5),
    },
    dark: {
      background: lightBackgroundColor,
      text: lightTextColor,
      secondaryText: rgba(lightTextColor, 0.5),
      border: darkBorderColor,
      iconColor: rgba(lightShade, 0.8),
      cardBackground: darkShade,
      mutedText: lighten(0.4, darkTextColor),
    },
  },
  dragHandle: {
    backgroundColor: brandPrimary,
  },
  header: {
    backgroundColor: lightBackgroundColor,
  },
  sidebar: {
    width: "300px",
    background: (props) => props.theme.backgroundColor,
    color: (props) => props.theme.text,
    border: (props) => props.theme.colors.border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    fontWeight: (props) => props.theme.typography.fontWeights.normal,
    borderColor: (props) => props.theme.colors.border,
    borderOnHoverColor: (props) => props.theme.colors.primaryBg,
  },
  searchInput: {
    backgroundColor: (props) =>
      rgba(props.theme.searchInput.backgroundColor, 0),
    color: (props) => props.theme.text,
    placeholderColor: (props) => rgba(props.theme.text, 0.6),
    iconColor: (props) => props.theme.text,
    border: (props) => props.theme.colors.border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    inputHoverBg: (props) => rgba(props.theme.backgroundColor, 0.6),
    shadow: "0 2px 4px rgba(0, 0, 0, 0.1)",

    variants: {
      default: {
        background: (props) => rgba(props.theme.backgroundColor, 0),
        padding: (props) => props.theme.spacing.sm,
      },
      borderStyle: {
        background: (props) => rgba(props.theme.backgroundColor, 0.4),
        borderColor: (props) => props.theme.colors.border,
        padding: (props) => props.theme.spacing.md,
      },
    },
  },
  ListItem: {
    background: (props) => props.theme.backgroundColor,
    backgroundHover: (props) => rgba(props.theme.backgroundColor, 0.6),
    color: (props) => props.theme.text,
    border: (props) => props.theme.colors.border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    onHoverIconColor: (props) => rgba(props.theme.text, 0.4),
  },
  card: {
    background: (props) => props.theme.colors.cardBackground,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
  },
  zIndex: {
    sidebar: 10,
    header: 20,
    modal: 30,
  },
  // #TODO: optimize this later with spacing for all compoents and global
  spacing: {
    xs: "8px 16px",
    sm: "10px 20px",
    md: "12px 24px",
    lg: "16px 32px",
  },
};
const darkTheme = {
  backgroundColor: darkBackgroundColor,
  text: lightTextColor,
  secondaryText: rgba(lightTextColor, 0.5),
  border: darkBorderColor,
  iconColor: rgba(lightShade, 0.8),
  cardBackground: darkShade,
  mutedText: rgba(darkTextColor, 0.5),
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
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
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

    surface: darkBackgroundColor,
    // themeing specific colors
    light: {
      background: "#fff",
      text: darkTextColor,
      secondaryText: rgba(lightTextColor, 0.5),
      border: lightBorderColor,
      cardBackground: lightShade,
      mutedText: rgba(darkTextColor, 0.5),
    },
    dark: {
      background: lightBackgroundColor,
      text: lightTextColor,
      secondaryText: rgba(lightTextColor, 0.5),
      border: darkBorderColor,
      iconColor: rgba(lightShade, 0.8),
      cardBackground: darkShade,
      mutedText: lighten(0.4, darkTextColor),
    },
  },
  header: {
    backgroundColor: darkBackgroundColor,
  },
  sidebar: {
    width: "300px",
    background: (props) => props.theme.backgroundColor,
    color: (props) => props.theme.text,
    border: (props) => props.theme.colors.border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    fontWeight: (props) => props.theme.typography.fontWeights.normal,
    borderColor: (props) => props.theme.colors.border,
    borderOnHoverColor: (props) => props.theme.colors.primaryBg,
  },

  searchInput: {
    backgroundColor: (props) =>
      rgba(props.theme.searchInput.backgroundColor, 0),
    color: (props) => props.theme.text,
    placeholderColor: (props) => rgba(props.theme.text, 0.6),
    iconColor: (props) => props.theme.text,
    border: (props) => props.theme.colors.border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    inputHoverBg: (props) => rgba(props.theme.backgroundColor, 0.6),
    shadow: "0 2px 4px rgba(0, 0, 0, 0.1)",

    variants: {
      default: {
        background: (props) => rgba(props.theme.backgroundColor, 0),
        padding: (props) => props.theme.spacing.sm,
      },
      borderStyle: {
        background: (props) => rgba(props.theme.backgroundColor, 0.4),
        borderColor: (props) => props.theme.colors.border,
        padding: (props) => props.theme.spacing.md,
      },
    },
  },
  dragHandle: {
    backgroundColor: brandPrimary,
  },
  ListItem: {
    backgroundColor: (props) => props.theme.backgroundColor,
    backgroundHover: (props) => rgba(props.theme.backgroundColor, 0.6),
    textColor: (props) => props.theme.text,
    border: (props) => props.theme.colors.border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    onHoverIconColor: (props) => rgba(props.theme.text, 0.4),
  },
  card: {
    textColor: (props) => props.theme.text,
    backgroundColor: (props) => props.theme.cardBackground,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
  },
  zIndex: {
    sidebar: 10,
    header: 20,
    modal: 30,
  },
  // #TODO: optimize this later with spacing for all compoents and global
  spacing: {
    xs: "8px 16px",
    sm: "10px 20px",
    md: "12px 24px",
    lg: "16px 32px",
  },
};

const theme = {
  mode: "dark",
  backgroundColor: darkBackgroundColor,
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

    surface: darkBackgroundColor,
    // themeing specific colors
    light: {
      background: "#fff",
      text: darkTextColor,
      secondaryText: rgba(lightTextColor, 0.5),
      border: lightBorderColor,
      cardBackground: lightShade,
      mutedText: rgba(darkTextColor, 0.5),
    },
    dark: {
      background: lightBackgroundColor,
      text: lightTextColor,
      secondaryText: rgba(lightTextColor, 0.5),
      border: darkBorderColor,
      iconColor: rgba(lightShade, 0.8),
      cardBackground: darkShade,
      mutedText: lighten(0.4, darkTextColor),
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
    background: (props) => props.theme.backgroundColor,
    color: (props) => props.theme.textColor,
    border: (props) => props.theme.colors.border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    fontWeight: (props) => props.theme.typography.fontWeights.normal,
    borderColor: (props) => props.theme.colors.border,
    borderOnHoverColor: (props) => props.theme.colors.primaryBg,
  },
  searchInput: {
    backgroundColor: (props) => rgba(props.theme.backgroundColor, 0),
    color: (props) => props.theme.text,
    placeholderColor: (props) => rgba(props.theme.text, 0.6),
    iconColor: (props) => props.theme.text,
    border: (props) => props.theme.colors.border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    inputHoverBg: (props) => rgba(props.theme.backgroundColor, 0.6),

    variants: {
      default: {
        background: (props) => rgba(props.theme.backgroundColor, 0),
        padding: (props) => props.theme.spacing.sm,
      },
      borderStyle: {
        background: (props) => rgba(props.theme.backgroundColor, 0.4),
        borderColor: (props) => props.theme.colors.border,
        padding: (props) => props.theme.spacing.md,
      },
    },
  },
  ListItem: {
    background: (props) => props.theme.backgroundColor,
    backgroundHover: (props) => rgba(props.theme.backgroundColor, 0.6),
    color: (props) => props.theme.text,
    border: (props) => props.theme.colors.border,
    fontFamily: (props) => props.theme.typography.fontFamily,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
    onHoverIconColor: (props) => rgba(props.theme.text, 0.4),
  },
  card: {
    backgroundColor: (props) => props.theme.cardBackground,
    fontSize: (props) => props.theme.typography.fontSizes.sm,
  },
};

export { lightTheme, darkTheme };
export default theme;
