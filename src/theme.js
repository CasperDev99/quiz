import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4a90e2",
    },
    secondary: {
      main: "#ff5a5f",
    },
    background: {
      default: "#e0f7fa",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "12px 24px",
          fontWeight: "bold",
          fontSize: "1rem",
          transition: "all 0.3s ease-in-out",
          textTransform: "none",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #4a90e2 30%, #357ABD 90%)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(135deg, #357ABD 30%, #2A5F94 90%)",
            transform: "scale(1.05)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #ff5a5f 30%, #e0484d 90%)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(135deg, #e0484d 30%, #c03940 90%)",
            transform: "scale(1.05)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          },
        },
        outlinedPrimary: {
          border: "2px solid #4a90e2",
          color: "#4a90e2",
          "&:hover": {
            border: "2px solid #357ABD",
            backgroundColor: "rgba(74, 144, 226, 0.1)",
          },
        },
        outlinedSecondary: {
          border: "2px solid #ff5a5f",
          color: "#ff5a5f",
          "&:hover": {
            border: "2px solid #e0484d",
            backgroundColor: "rgba(255, 90, 95, 0.1)",
          },
        },
        textPrimary: {
          color: "#4a90e2",
          "&:hover": {
            backgroundColor: "rgba(74, 144, 226, 0.1)",
          },
        },
      },
    },
  },
});

export default theme;
