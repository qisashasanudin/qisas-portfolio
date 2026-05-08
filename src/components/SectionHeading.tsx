import { Stack, Typography } from "@mui/material";

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <Stack spacing={1.5} sx={{ maxWidth: 760, mb: { xs: 4, md: 6 } }}>
      <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 1.4 }}>
        {eyebrow}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 46 } }}>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ fontSize: { xs: 16, md: 18 }, lineHeight: 1.75 }}>
        {copy}
      </Typography>
    </Stack>
  );
}

