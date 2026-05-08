import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemText,
  Stack,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import {
  Link as RouterLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { experiences } from "./data/experiences";
import { asset } from "./utils/asset";
import { ExperienceCard } from "./components/ExperienceCard";
import { ExperienceDetailPage } from "./pages/ExperienceDetailPage";
import { repos } from "./data/repos";
import { contacts, getHomeStats, navItems, skillGroups } from "./data/home";
import { SectionHeading } from "./components/SectionHeading";
import { ScrollToHash } from "./components/ScrollToHash";

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
  const stats = getHomeStats();

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
            path="/edumatic-robot-biru"
            element={<Navigate to="/experience/robot-biru" replace />}
          />
          <Route
            path="/henan"
            element={<Navigate to="/experience/henan" replace />}
          />
          <Route
            path="/"
            element={
              <Box component="main" sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  component="section"
                  sx={{
                    pt: { xs: 8, md: 12 },
                    pb: { xs: 8, md: 12 },
                  }}
                >
                  <Container maxWidth="lg">
                    <Grid
                      container
                      spacing={{ xs: 5, md: 7 }}
                      alignItems="center"
                    >
                      <Grid size={{ xs: 12, md: 7 }}>
                        <Stack spacing={3}>
                          <Stack
                            direction="row"
                            spacing={1}
                            useFlexGap
                            flexWrap="wrap"
                          >
                            <Chip
                              icon={<LocationOnIcon />}
                              label="Jakarta, Indonesia"
                              variant="outlined"
                            />
                          </Stack>
                          <Stack spacing={1.5} sx={{ maxWidth: 920 }}>
                            <Typography
                              component="p"
                              sx={{
                                color: "#ffffff",
                                fontSize: { xs: 58, sm: 84, md: 116 },
                                fontWeight: 900,
                                lineHeight: 0.9,
                                letterSpacing: 0,
                              }}
                            >
                              Qisas Hasanudin
                            </Typography>
                            <Typography
                              variant="h1"
                              sx={{
                                color: "rgba(248, 251, 255, 0.86)",
                                fontSize: { xs: 26, sm: 36, md: 46 },
                                maxWidth: 850,
                              }}
                            >
                              Technology consultant and full-stack developer
                            </Typography>
                          </Stack>
                          <Typography
                            color="text.secondary"
                            sx={{
                              maxWidth: 760,
                              fontSize: { xs: 18, md: 21 },
                              lineHeight: 1.8,
                            }}
                          >
                            A bilingual Computer Engineering graduate, senior
                            technology consultant, and software engineer focused
                            on React frontends, robust back-office platforms,
                            and practical delivery for teams that need software
                            that holds up in production.
                          </Typography>
                          <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={1.5}
                          >
                            <Button
                              variant="contained"
                              size="large"
                              component={RouterLink}
                              to="/#projects"
                              endIcon={<ArrowForwardIcon />}
                            >
                              View projects
                            </Button>
                            <Button
                              variant="outlined"
                              size="large"
                              href={asset("/qisas-hasanudin-resume.pdf")}
                              startIcon={<DownloadIcon />}
                            >
                              Download CV
                            </Button>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                          sx={{
                            p: { xs: 2, md: 2.5 },
                            border: "1px solid rgba(13, 99, 255, 0.18)",
                            bgcolor: "rgba(9, 15, 32, 0.74)",
                            borderRadius: 2,
                            background:
                              "linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(10, 18, 38, 0.68))",
                            boxShadow: "0 28px 100px rgba(0, 0, 0, 0.35)",
                            backdropFilter: "blur(18px)",
                          }}
                        >
                          <Stack spacing={3} alignItems="center">
                            <Avatar
                              src="https://avatars.githubusercontent.com/u/47523892?v=4"
                              alt="Qisas Hasanudin"
                              sx={{
                                width: { xs: 184, sm: 220, md: 260 },
                                height: { xs: 184, sm: 220, md: 260 },
                                border: "8px solid rgba(91, 140, 255, 0.16)",
                              }}
                            />
                            <Grid
                              container
                              spacing={1.5}
                              sx={{ width: "100%" }}
                            >
                              {stats.map((stat) => (
                                <Grid size={6} key={stat.label}>
                                  <Box
                                    sx={{
                                      p: 2,
                                      border:
                                        "1px solid rgba(148, 163, 184, 0.16)",
                                      borderRadius: 2,
                                      minHeight: 108,
                                      bgcolor: "rgba(255, 255, 255, 0.045)",
                                    }}
                                  >
                                    <Typography
                                      variant="h4"
                                      sx={{ fontWeight: 850, color: "#ffffff" }}
                                    >
                                      {stat.value}
                                    </Typography>
                                    <Typography
                                      color="text.secondary"
                                      sx={{ fontSize: 14 }}
                                    >
                                      {stat.label}
                                    </Typography>
                                  </Box>
                                </Grid>
                              ))}
                            </Grid>
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
                </Box>

                <Container maxWidth="lg">
                  <Box
                    component="section"
                    id="work"
                    sx={{ py: { xs: 8, md: 11 } }}
                  >
                    <SectionHeading
                      eyebrow="Work"
                      title="Bridging business needs and production-ready software."
                      copy="Qisas works across both client-facing projects and internal product developments, turning complex requirements into clear, reliable systems."
                    />
                    <Grid container spacing={2.5}>
                      {experiences.map((experience) => (
                        <Grid key={experience.slug} size={{ xs: 12, md: 6 }}>
                          <ExperienceCard experience={experience} />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Divider />

                  <Box
                    component="section"
                    id="projects"
                    sx={{ py: { xs: 8, md: 11 } }}
                  >
                    <SectionHeading
                      eyebrow="Projects"
                      title="Selected public GitHub work"
                      copy="A concise set of public repositories showing Qisas's expertise across frontend, backend, mobile, and systems fundamentals."
                    />
                    <Card variant="outlined">
                      <CardContent sx={{ p: 0 }}>
                        <List disablePadding>
                          {repos.map((repo, index) => (
                            <ListItem
                              key={repo.url}
                              divider={index !== repos.length - 1}
                              sx={{
                                px: { xs: 2.5, md: 3.5 },
                                py: { xs: 2.25, md: 2.75 },
                                gap: 2,
                                alignItems: "flex-start",
                              }}
                            >
                              <ListItemText
                                primary={
                                  <Stack
                                    direction={{ xs: "column", sm: "row" }}
                                    spacing={{ xs: 1, sm: 2 }}
                                    justifyContent="space-between"
                                    alignItems={{
                                      xs: "flex-start",
                                      sm: "center",
                                    }}
                                  >
                                    <Typography
                                      variant="h3"
                                      sx={{ fontSize: 20 }}
                                    >
                                      {repo.name}
                                    </Typography>
                                    <Stack
                                      direction="row"
                                      spacing={1}
                                      sx={{ flexShrink: 0 }}
                                    >
                                      <Button
                                        href={repo.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        variant="outlined"
                                        size="small"
                                        startIcon={<GitHubIcon />}
                                      >
                                        GitHub
                                      </Button>
                                      {repo.homepage ? (
                                        <Button
                                          href={repo.homepage}
                                          target="_blank"
                                          rel="noreferrer"
                                          variant="outlined"
                                          size="small"
                                          startIcon={<LanguageIcon />}
                                        >
                                          Live
                                        </Button>
                                      ) : null}
                                    </Stack>
                                  </Stack>
                                }
                                secondary={
                                  <Stack spacing={1.25} sx={{ mt: 1 }}>
                                    <Typography
                                      color="text.secondary"
                                      sx={{ lineHeight: 1.7 }}
                                    >
                                      {repo.description}
                                    </Typography>
                                    <Stack
                                      direction="row"
                                      spacing={1}
                                      useFlexGap
                                      flexWrap="wrap"
                                    >
                                      {repo.stack.map((item) => (
                                        <Chip
                                          key={item}
                                          size="small"
                                          label={item}
                                        />
                                      ))}
                                    </Stack>
                                  </Stack>
                                }
                                secondaryTypographyProps={{ component: "div" }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Box>

                  <Divider />

                  <Box
                    component="section"
                    id="skills"
                    sx={{ py: { xs: 8, md: 11 } }}
                  >
                    <SectionHeading
                      eyebrow="Skills"
                      title="A practical stack for shipping reliable software"
                      copy="Qisas combines frontend expertise, backend fluency, database work, and communication skills across varied cultural and professional environments."
                    />
                    <Grid container spacing={2.5}>
                      {skillGroups.map((group) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={group.title}>
                          <Card variant="outlined" sx={{ height: "100%" }}>
                            <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                              <Stack
                                direction="row"
                                spacing={1.5}
                                alignItems="center"
                                sx={{ mb: 2.5 }}
                              >
                                {group.title === "Programming" ? (
                                  <CodeIcon color="primary" />
                                ) : (
                                  <StarBorderIcon color="primary" />
                                )}
                                <Typography variant="h3" sx={{ fontSize: 22 }}>
                                  {group.title}
                                </Typography>
                              </Stack>
                              <Stack
                                direction="row"
                                spacing={1}
                                useFlexGap
                                flexWrap="wrap"
                              >
                                {group.items.map((item) => (
                                  <Chip
                                    key={item}
                                    label={item}
                                    variant="outlined"
                                  />
                                ))}
                              </Stack>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Container>

                <Box
                  component="section"
                  id="contact"
                  sx={{
                    py: { xs: 8, md: 10 },
                    bgcolor: "transparent",
                    borderTop: "1px solid rgba(148, 163, 184, 0.12)",
                    color: "#ffffff",
                  }}
                >
                  <Container maxWidth="lg">
                    <Grid
                      container
                      spacing={{ xs: 4, md: 8 }}
                      alignItems="center"
                    >
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={2.5}>
                          <Typography
                            variant="overline"
                            sx={{
                              color: "#7eb0ff",
                              fontWeight: 800,
                              letterSpacing: 1.4,
                            }}
                          >
                            Contact
                          </Typography>
                          <Typography
                            variant="h2"
                            sx={{ fontSize: { xs: 34, md: 52 } }}
                          >
                            Let's build something modern and useful.
                          </Typography>
                          <Typography
                            sx={{
                              color: "rgba(255,255,255,0.72)",
                              fontSize: 18,
                              lineHeight: 1.8,
                            }}
                          >
                            Open to software development, technology
                            consultation, and full-stack work.
                          </Typography>
                          <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={1.5}
                          >
                            <Button
                              variant="contained"
                              href="mailto:qisas.hasanudin@gmail.com"
                              startIcon={<MailOutlineIcon />}
                            >
                              Email Qisas
                            </Button>
                            <Button
                              variant="outlined"
                              href="https://www.linkedin.com/in/qisashasanudin/"
                              target="_blank"
                              rel="noreferrer"
                              startIcon={<LinkedInIcon />}
                              sx={{
                                color: "#ffffff",
                                borderColor: "rgba(255,255,255,0.35)",
                                "&:hover": {
                                  borderColor: "#ffffff",
                                  bgcolor: "rgba(255,255,255,0.06)",
                                },
                              }}
                            >
                              LinkedIn
                            </Button>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Grid container spacing={1.5}>
                          {contacts.map((contact) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={contact.label}>
                              <MuiLink
                                href={contact.href}
                                underline="none"
                                target={
                                  contact.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel="noreferrer"
                              >
                                <Box
                                  sx={{
                                    p: 2.5,
                                    minHeight: 132,
                                    border: "1px solid rgba(255,255,255,0.14)",
                                    borderRadius: 2,
                                    color: "#ffffff",
                                    bgcolor: "rgba(255,255,255,0.04)",
                                    transition:
                                      "border-color 180ms ease, background 180ms ease",
                                    "&:hover": {
                                      borderColor: "#7eb0ff",
                                      bgcolor: "rgba(13, 99, 255, 0.12)",
                                    },
                                  }}
                                >
                                  <Stack spacing={1.5}>
                                    <Box sx={{ color: "#7eb0ff" }}>
                                      {contact.icon}
                                    </Box>
                                    <Typography sx={{ fontWeight: 800 }}>
                                      {contact.label}
                                    </Typography>
                                    <Typography
                                      sx={{
                                        color: "rgba(255,255,255,0.7)",
                                        wordBreak: "break-word",
                                      }}
                                    >
                                      {contact.value}
                                    </Typography>
                                  </Stack>
                                </Box>
                              </MuiLink>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>
                </Box>
              </Box>
            }
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
