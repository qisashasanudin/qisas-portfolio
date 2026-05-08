import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import type { ExperienceLink, ExperienceScreenshot } from "../data/experiences";

interface ScreenshotCarouselProps {
  screenshots?: ExperienceScreenshot[];
  links?: ExperienceLink[];
}

export function ScreenshotCarousel({
  screenshots = [],
  links = [],
}: ScreenshotCarouselProps) {
  const [previewImage, setPreviewImage] = useState<ExperienceScreenshot | null>(
    null,
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          pb: 1,
          mx: { xs: -1.5, md: -2 },
          px: { xs: 1.5, md: 2 },
          scrollSnapType: "x mandatory",
        }}
      >
        {screenshots.length > 0
          ? screenshots.map((shot) => (
              <Box
                key={shot.src}
                role="button"
                tabIndex={0}
                onClick={() => setPreviewImage(shot)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setPreviewImage(shot);
                  }
                }}
                sx={{
                  minWidth: { xs: "80%", sm: "48%", md: "32%" },
                  maxWidth: 380,
                  scrollSnapAlign: "start",
                  borderRadius: 2,
                  border: "1px solid rgba(212, 175, 55, 0.28)",
                  bgcolor: "rgba(8, 8, 8, 0.88)",
                  overflow: "hidden",
                  cursor: "pointer",
                  outline: "none",
                  transition: "box-shadow 180ms ease, border-color 180ms ease",
                  "&:hover": {
                    borderColor: "rgba(212, 175, 55, 0.45)",
                    boxShadow: "0 28px 80px rgba(212, 175, 55, 0.16)",
                  },
                  "&:focus-visible": {
                    boxShadow: "0 0 0 3px rgba(212, 175, 55, 0.35)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16/9",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={shot.src}
                    alt={shot.title}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
                <Box sx={{ p: 1.75 }}>
                  <Typography variant="h3" sx={{ fontSize: 15, mb: 0.5 }}>
                    {shot.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 13, lineHeight: 1.6 }}
                  >
                    {shot.description}
                  </Typography>
                </Box>
              </Box>
            ))
          : links.map((link) => (
              <Box
                key={link.href}
                sx={{
                  minWidth: { xs: "80%", sm: "48%", md: "32%" },
                  maxWidth: 420,
                  scrollSnapAlign: "start",
                  borderRadius: 2,
                  border: "1px solid rgba(212, 175, 55, 0.28)",
                  bgcolor: "rgba(8, 8, 8, 0.88)",
                  overflow: "hidden",
                  transition: "box-shadow 180ms ease, border-color 180ms ease",
                  "&:hover": {
                    borderColor: "rgba(212, 175, 55, 0.45)",
                    boxShadow: "0 28px 80px rgba(212, 175, 55, 0.16)",
                  },
                }}
              >
                <Box
                  component="iframe"
                  src={link.href}
                  title={`${link.label} preview`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sx={{
                    width: "100%",
                    height: { xs: 260, md: 300 },
                    border: 0,
                    display: "block",
                    bgcolor: "#fff",
                  }}
                />
                <Box sx={{ p: 1.75 }}>
                  <Typography variant="h3" sx={{ fontSize: 15, mb: 0.5 }}>
                    {link.label}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 13, lineHeight: 1.6 }}
                  >
                    {link.description}
                  </Typography>
                  <Button
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    variant="outlined"
                    size="small"
                    startIcon={<LanguageIcon />}
                    sx={{ mt: 1.25, width: "100%" }}
                  >
                    Open full site
                  </Button>
                </Box>
              </Box>
            ))}
      </Box>

      <Dialog
        open={Boolean(previewImage)}
        onClose={() => setPreviewImage(null)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2, position: "relative" }}>
          {previewImage?.title}
          <IconButton
            aria-label="close preview"
            onClick={() => setPreviewImage(null)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, bgcolor: "rgba(0,0,0,0.95)" }}>
          {previewImage ? (
            <Box
              component="img"
              src={previewImage.src}
              alt={previewImage.title}
              loading="lazy"
              sx={{
                width: "100%",
                maxHeight: { xs: "70vh", md: "80vh" },
                objectFit: "contain",
                display: "block",
                bgcolor: "#000",
              }}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
