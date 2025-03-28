// ImageGrid.jsx
import React from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ImageCard from "./ImageCard";

const ImageGrid = () => {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();

  const handleImageClick = (index) => {
    dispatch(setSelectedImage(index));
  };

  return (
    <Grid container spacing={5} sx={{ padding: 2 }}>
      {images?.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
          <ImageCard image={image} index={index} onClick={() => handleImageClick(index)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGrid;