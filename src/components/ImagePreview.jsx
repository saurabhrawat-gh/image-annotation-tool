import React from "react";
import { Modal, Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward, Close, ZoomIn, Crop, Edit, Add } from "@mui/icons-material";

const ImagePreview = ({ open, onClose, images, currentIndex, onNext, onPrev }) => {
  if (!images || images.length === 0) return null;
  const image = images[currentIndex];

  return (
    <Modal open={open} onClose={onClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "black",
          padding: 2,
          borderRadius: 2,
          maxWidth: "90vw",
          maxHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton onClick={onClose} sx={{ position: "absolute", top: 8, right: 8, color: "white" }}>
          <Close />
        </IconButton>

        {images.length > 1 && (
          <IconButton onClick={onPrev} sx={{ position: "absolute", left: 16, color: "white" }}>
            <ArrowBack fontSize="large" />
          </IconButton>
        )}

        <Box sx={{ position: "relative" }}>
          <img src={image.url} alt={image.name} style={{ maxWidth: "80vw", maxHeight: "80vh", borderRadius: 8 }} />
          <IconButton sx={{ position: "absolute", top: "10%", left: "10%", backgroundColor: "rgba(255,255,255,0.8)" }}>
            <Add />
          </IconButton>
        </Box>

        {images.length > 1 && (
          <IconButton onClick={onNext} sx={{ position: "absolute", right: 16, color: "white" }}>
            <ArrowForward fontSize="large" />
          </IconButton>
        )}

        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 16,
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color="white">
            {image.name}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 48,
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <IconButton sx={{ color: "white" }}>
            <ZoomIn />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <Crop />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <Edit />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImagePreview;
