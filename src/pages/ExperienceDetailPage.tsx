import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LanguageIcon from "@mui/icons-material/Language";
import { Link as RouterLink, useParams } from "react-router-dom";
import { experiences } from "../data/experiences";

export function ExperienceDetailPage() {
  const { slug } = useParams();
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    return (
      <Box component="main" sx={{ position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Stack spacing={2}>
            <Button
              component={RouterLink}
              to="/#work"
              startIcon={<ArrowBackIcon />}
              sx={{ alignSelf: "flex-start" }}
            >
              Back to work
            </Button>
            <Typography variant="h2">Not found</Typography>
            <Typography color="text.secondary">
              This experience page does not exist.
            </Typography>
          </Stack>
        </Container>
      </Box>
    );
  }

  const { detail } = experience;
  const screenshots = detail.screenshots ?? [];

  return (
    <Box component="main" sx={{ position: "relative", zIndex: 1 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Stack spacing={{ xs: 5, md: 7 }}>
          <Stack spacing={2.5} sx={{ maxWidth: 960 }}>
            <Button
              component={RouterLink}
              to="/#work"
              startIcon={<ArrowBackIcon />}
              sx={{ alignSelf: "flex-start" }}
            >
              Back to work
            </Button>
            <Typography
              variant="overline"
              color="primary"
              sx={{ fontWeight: 800, letterSpacing: 1.4 }}
            >
              {detail.eyebrow}
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: 44, sm: 68, md: 92 } }}
            >
              {detail.title}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontSize: { xs: 15, md: 16 }, fontWeight: 650 }}
            >
              {experience.role} · {experience.period} · {experience.location}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 820,
                fontSize: { xs: 17, md: 20 },
                lineHeight: 1.8,
              }}
            >
              {detail.intro}
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {detail.chips.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Stack>

          <Grid container spacing={2.5}>
            {detail.highlights.map((item) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h3" sx={{ fontSize: 22, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {item.copy}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {detail.hero ? (
            <Card variant="outlined">
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                {detail.heroVariant === "phone" ? (
                  <Box
                    sx={{
                      p: { xs: 1.5, md: 2 },
                      borderRadius: 2,
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                      bgcolor: "rgba(255,255,255,0.03)",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 220, sm: 260, md: 300 },
                        borderRadius: 2.5,
                        overflow: "hidden",
                        border: "1px solid rgba(148, 163, 184, 0.3)",
                        bgcolor: "rgba(10, 15, 30, 0.92)",
                      }}
                    >
                      <Box
                        component="img"
                        src={detail.hero.src}
                        alt={detail.hero.title}
                        sx={{
                          width: "100%",
                          display: "block",
                        }}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box
                    component="img"
                    src={detail.hero.src}
                    alt={detail.hero.title}
                    sx={{
                      width: "100%",
                      borderRadius: 2,
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                      bgcolor: "rgba(255,255,255,0.04)",
                    }}
                  />
                )}
                <Stack spacing={1} sx={{ mt: 2 }}>
                  <Typography variant="h3" sx={{ fontSize: 24 }}>
                    {detail.hero.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {detail.hero.description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ) : null}

          {detail.links?.length ? (
            <Box>
              <Stack spacing={1.5} sx={{ maxWidth: 760, mb: { xs: 4, md: 6 } }}>
                <Typography
                  variant="overline"
                  color="primary"
                  sx={{ fontWeight: 800, letterSpacing: 1.4 }}
                >
                  Shipped work
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 46 } }}>
                  Public websites and launches
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: { xs: 16, md: 18 }, lineHeight: 1.75 }}
                >
                  Selected public-facing web properties shipped as part of work
                  experience.
                </Typography>
              </Stack>

              <Grid container spacing={2.5}>
                {detail.links.map((link) => (
                  <Grid key={link.href} size={{ xs: 12, md: 6 }}>
                    <Card variant="outlined" sx={{ height: "100%" }}>
                      <CardContent
                        sx={{ p: { xs: 3, md: 3.5 }, height: "100%" }}
                      >
                        <Stack spacing={1.5} sx={{ height: "100%" }}>
                          <Typography variant="h3" sx={{ fontSize: 24 }}>
                            {link.label}
                          </Typography>
                          <Typography
                            color="text.secondary"
                            sx={{ lineHeight: 1.7 }}
                          >
                            {link.description}
                          </Typography>
                          <Box
                            sx={{
                              borderRadius: 2,
                              overflow: "hidden",
                              border: "1px solid rgba(148, 163, 184, 0.18)",
                              bgcolor: "rgba(255,255,255,0.02)",
                              minHeight: { xs: 260, md: 320 },
                            }}
                          >
                            <Box
                              component="iframe"
                              src={link.href}
                              title={`${link.label} website preview`}
                              loading="lazy"
                              referrerPolicy="strict-origin-when-cross-origin"
                              sx={{
                                width: "100%",
                                height: { xs: 260, md: 320 },
                                border: 0,
                                display: "block",
                                bgcolor: "#fff",
                              }}
                            />
                          </Box>
                          <Box sx={{ flexGrow: 1 }} />
                          <Stack
                            direction="row"
                            spacing={1.25}
                            useFlexGap
                            flexWrap="wrap"
                          >
                            <Button
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              variant="outlined"
                              startIcon={<LanguageIcon />}
                            >
                              Open full site
                            </Button>
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 13, alignSelf: "center" }}
                            >
                              If preview is blocked, open in a new tab.
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : null}

          {/*
            Intentionally omitting a standalone "Impact / Delivery highlights" section.
            Key information should live in Role/Scope/Focus, shipped work, and screenshots.
          */}

          {screenshots.length > 1 ? (
            <Box>
              <Stack spacing={1.5} sx={{ maxWidth: 760, mb: { xs: 4, md: 6 } }}>
                <Typography
                  variant="overline"
                  color="primary"
                  sx={{ fontWeight: 800, letterSpacing: 1.4 }}
                >
                  Screens
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 46 } }}>
                  Selected screenshots and flows.
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: { xs: 16, md: 18 }, lineHeight: 1.75 }}
                >
                  A quick visual tour of the core surfaces shipped during this
                  experience.
                </Typography>
              </Stack>

              <Grid container spacing={2.5}>
                {screenshots.slice(1).map((shot) => (
                  <Grid size={{ xs: 12, md: 6 }} key={shot.src}>
                    <Card variant="outlined" sx={{ height: "100%" }}>
                      <CardContent sx={{ p: 2.5 }}>
                        <Box
                          component="img"
                          src={shot.src}
                          alt={shot.title}
                          loading="lazy"
                          sx={{
                            width: "100%",
                            borderRadius: 2,
                            border: "1px solid rgba(148, 163, 184, 0.18)",
                          }}
                        />
                        <Typography variant="h3" sx={{ fontSize: 20, mt: 2 }}>
                          {shot.title}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          sx={{ mt: 0.75, lineHeight: 1.65 }}
                        >
                          {shot.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
}
