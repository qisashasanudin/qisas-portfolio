import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link as RouterLink } from "react-router-dom";
import { useMemo, useState } from "react";
import type { Experience } from "../data/experiences";

function initials(company: string) {
  return company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  const [imageFailed, setImageFailed] = useState(false);
  const fallback = useMemo(() => initials(experience.company), [experience.company]);

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "rgba(212, 175, 55, 0.46)",
          boxShadow: "0 24px 86px rgba(212, 175, 55, 0.22)",
        },
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 3.5 }, height: "100%" }}>
        <Stack spacing={2.5} sx={{ height: "100%" }}>
          <Stack direction="row" spacing={2} alignItems="flex-start" justifyContent="space-between">
            <Stack direction="row" spacing={2} alignItems="center" sx={{ minWidth: 0 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2,
                  border: "1px solid rgba(212, 175, 55, 0.18)",
                  bgcolor: "rgba(255,255,255,0.04)",
                  display: "grid",
                  placeItems: "center",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                {experience.logoSrc && !imageFailed ? (
                  <Box
                    component="img"
                    src={experience.logoSrc}
                    alt={`${experience.company} logo`}
                    onError={() => setImageFailed(true)}
                    sx={{ width: "100%", height: "100%", objectFit: "contain", p: 1 }}
                  />
                ) : (
                  <Typography sx={{ fontWeight: 900, letterSpacing: 1.4, color: "rgba(255,255,255,0.86)" }}>
                    {fallback}
                  </Typography>
                )}
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h3" sx={{ fontSize: 22, lineHeight: 1.2 }}>
                  {experience.company}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                  {experience.role}
                </Typography>
              </Box>
            </Stack>
          </Stack>

          <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
            {experience.teaser}
          </Typography>

          <Stack spacing={0.5} sx={{ color: "text.secondary" }}>
            <Typography variant="body2">{experience.period}</Typography>
            <Typography variant="body2">{experience.location}</Typography>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          <Button component={RouterLink} to={`/experience/${experience.slug}`} variant="outlined" startIcon={<LaunchIcon />}>
            View details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

