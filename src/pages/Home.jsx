import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageGrid from "../components/ImageGrid";
import UploadButton from "../components/UploadButton";
import SearchBar from "../components/SearchBar";
import { addImage } from "../redux/imageSlice";
import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const comments = useSelector((state) => state.comments);

  const hasImages = images.length > 0;
  const hasComments = Object.keys(comments).length > 0;

  const handleUpload = (files) => {
    if (!files || files.length === 0) {
      console.warn("No files provided.");
      return;
    }
    const fileArray = Array.from(files);
    const newImages = fileArray
      .filter(({ file }) => {
        if (!file || !file.type) {
          return false;
        }
        return file.type.startsWith("image/");
      })
      .map(({ file }) => {
        return {
          id: URL.createObjectURL(file),
          name: file.name,
          file,
        };
      });

    if (newImages.length === 0) {
      console.warn("No valid images found.");
      return;
    }
    newImages.forEach((image) => dispatch(addImage(image)));
  };

  return (
    <Grid
      container
      sx={{ height: "100vh", display: "flex", flexDirection: "row" }}
    >
      {hasComments && (
        <Grid
          item
          xs={3}
          sx={{ backgroundColor: "#f4f4f4", padding: 2, flexShrink: 0 }}
        >
          <Typography variant="h6">Comments</Typography>
          {/* Sidebar Content Here */}
        </Grid>
      )}
      <Grid
        item
        xs
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Typography variant="h6">Folder</Typography>

          {hasImages && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <SearchBar />
              <UploadButton onUpload={handleUpload} />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            ...(!hasImages && {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }),
          }}
        >
          {hasImages ? (
            <ImageGrid images={images} />
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h5" sx={{ marginTop: 2 }}>
                Drop images here
              </Typography>
              <Typography variant="body1" sx={{ color: "gray" }}>
                or use Upload button to upload images
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                <UploadButton onUpload={handleUpload} />
              </Box>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
