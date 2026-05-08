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
      main: "#5b8cff",
      dark: "#2862e8",
    },
    secondary: {
      main: "#60e6ff",
    },
    background: {
      default: "#050816",
      paper: "rgba(12, 18, 36, 0.82)",
    },
    text: {
      primary: "#f8fbff",
      secondary: "#aebbd2",
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
          borderColor: "rgba(148, 163, 184, 0.18)",
          background:
            "linear-gradient(145deg, rgba(17, 25, 46, 0.88), rgba(8, 13, 29, 0.78))",
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
              "radial-gradient(circle at 18% 12%, rgba(37, 99, 235, 0.46) 0, rgba(37, 99, 235, 0) 30%), radial-gradient(circle at 82% 18%, rgba(34, 211, 238, 0.22) 0, rgba(34, 211, 238, 0) 28%), radial-gradient(circle at 52% 76%, rgba(79, 70, 229, 0.18) 0, rgba(79, 70, 229, 0) 34%), linear-gradient(180deg, #050816 0%, #081a38 48%, #050816 100%)",
          }}
        />
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            zIndex: 10,
            bgcolor: "rgba(5, 8, 22, 0.62)",
            color: "text.primary",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(148, 163, 184, 0.12)",
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
