import React from "react";
import { Button } from "@mui/material";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const UploadButton = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    if (!files.length) return;

    const newImages = files
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => ({
        id: URL.createObjectURL(file),
        name: file.name,
        file,
      }));

    onUpload(newImages);
  };

  return (
    <Button
      variant="contained"
      component="label"
      color="primary"
      startIcon={<FileUploadOutlinedIcon />}
      sx={{
        textTransform: "none", // Keeps text as "Upload" without uppercase
        fontSize: "16px",
        borderRadius: "4px",
      }}
    >
      Upload
      <input type="file" hidden multiple onChange={handleFileChange} />
    </Button>
  );
};

export default UploadButton;

