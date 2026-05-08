import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Link as MuiLink,
  Stack,
  ThemeProvider,
  Toolbar,
  Tooltip,
  createTheme,
} from "@mui/material";
import { Link as RouterLink, Navigate, Route, Routes } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ExperienceDetailPage } from "./pages/ExperienceDetailPage";
import { HomePage } from "./pages/HomePage";
import { ScrollToHash } from "./components/ScrollToHash";
import { navItems } from "./data/home";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d4af37",
      dark: "#b0891c",
    },
    secondary: {
      main: "#f4ce6a",
    },
    background: {
      default: "#020202",
      paper: "rgba(10, 10, 10, 0.88)",
    },
    text: {
      primary: "#f8fbff",
      secondary: "#ede4bf",
    },
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 0.98,
    },
    h2: {
      fontWeight: 760,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 720,
      letterSpacing: 0,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          minHeight: 44,
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          borderColor: "rgba(212, 175, 55, 0.18)",
          background:
            "linear-gradient(145deg, rgba(4, 4, 4, 0.94), rgba(18, 14, 6, 0.76))",
          boxShadow: "0 24px 90px rgba(0, 0, 0, 0.28)",
          backdropFilter: "blur(18px)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 650,
        },
      },
    },
  },
});

// Experience detail pages are now handled by /experience/:slug.

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToHash />
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          bgcolor: "background.default",
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 14% 14%, rgba(212, 175, 55, 0.14) 0, rgba(212, 175, 55, 0) 24%), radial-gradient(circle at 82% 18%, rgba(244, 206, 106, 0.10) 0, rgba(244, 206, 106, 0) 20%), linear-gradient(180deg, #050504 0%, #070603 45%, #020202 100%)",
          }}
        />
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            zIndex: 10,
            bgcolor: "rgba(5, 5, 5, 0.88)",
            color: "text.primary",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(212, 175, 55, 0.18)",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
              <MuiLink
                component={RouterLink}
                to="/"
                underline="none"
                sx={{ fontWeight: 850, fontSize: 18 }}
              >
                QH
              </MuiLink>
              <Box sx={{ flexGrow: 1 }} />
              <Stack
                direction="row"
                spacing={1.5}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    color="inherit"
                    component={RouterLink}
                    to={`/${item.href}`}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
              <Tooltip title="GitHub">
                <IconButton
                  aria-label="GitHub profile"
                  href="https://github.com/qisashasanudin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </Container>
        </AppBar>

        <Routes>
          <Route path="/experience/:slug" element={<ExperienceDetailPage />} />
          <Route
            path="/virus-media"
            element={<Navigate to="/experience/virus-media" replace />}
          />
          <Route
            path="/edumatic"
            element={<Navigate to="/experience/edumatic" replace />}
          />
          <Route
            path="/henan"
            element={<Navigate to="/experience/henan" replace />}
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
