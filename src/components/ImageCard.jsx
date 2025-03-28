// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//   Paper,
//   IconButton,
//   Typography,
//   Menu,
//   MenuItem,
//   Box,
// } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import EditIcon from "@mui/icons-material/Edit";
// import { renameImage, removeImage } from "../redux/imageSlice";

// const ImageCard = ({ image }) => {
//   const dispatch = useDispatch();
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [hovered, setHovered] = useState(false);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleRename = () => {
//     const newName = prompt("Enter new name:", image.name);
//     if (newName) {
//       dispatch(renameImage({ id: image.id, newName }));
//     }
//     handleMenuClose();
//   };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = image.id;
//     link.download = image.name;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     handleMenuClose();
//   };

//   const handleDelete = () => {
//     dispatch(removeImage(image.id));
//   };

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         borderRadius: 2,
//         overflow: "hidden",
//         width: "100%",
//         height: 230,
//         position: "relative",
//         transition: "transform 0.3s ease-in-out",
//       }}
//     >
//       {/* Header Section */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "8px 12px",
//           backgroundColor: "#f5f5f5",
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <InsertPhotoIcon fontSize="small" sx={{ marginRight: 1 }} />
//           <Typography variant="body2" noWrap>
//             {image.name}
//           </Typography>
//         </Box>
//         <IconButton onClick={handleMenuOpen} size="small">
//           <MoreVertIcon />
//         </IconButton>
//       </Box>

//       {/* Context Menu */}
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//       >
//         <MenuItem onClick={handleRename}>
//           <EditIcon fontSize="small" sx={{ marginRight: 1 }} />
//           Rename
//         </MenuItem>
//         <MenuItem onClick={handleDownload}>
//           <FileDownloadIcon fontSize="small" sx={{ marginRight: 1 }} />
//           Download
//         </MenuItem>
//         <MenuItem onClick={handleDelete}>
//           🗑️ Delete
//         </MenuItem>
//       </Menu>

//       {/* Image Section */}
//       <Box
//         component="img"
//         src={image.id}
//         alt={image.name}
//         sx={{
//           width: "100%",
//           height: "100%",
//           flexGrow: 1,
//           objectFit: "cover",
//           transition: "transform 0.3s ease-in-out",
//           transform: hovered ? "scale(1.05)" : "scale(1)",
//         }}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       />
//     </Paper>
//   );
// };

// export default ImageCard;

// ImageCard.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Paper,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EditIcon from "@mui/icons-material/Edit";
import { renameImage, removeImage } from "../redux/imageSlice";

const ImageCard = ({ image, index, onClick }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [hovered, setHovered] = useState(false);

  const handleMenuOpen = (event) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRename = () => {
    const newName = prompt("Enter new name:", image.name);
    if (newName) {
      dispatch(renameImage({ id: image.id, newName }));
    }
    handleMenuClose();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image.id;
    link.download = image.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleMenuClose();
  };

  const handleDelete = () => {
    dispatch(removeImage(image.id));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
        width: "100%",
        height: 230,
        position: "relative",
        transition: "transform 0.3s ease-in-out",
        cursor: 'pointer'
      }}
      onClick={onClick} // Opens preview when clicked
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <InsertPhotoIcon fontSize="small" sx={{ marginRight: 1 }} />
          <Typography variant="body2" noWrap>
            {image.name}
          </Typography>
        </Box>
        <IconButton onClick={handleMenuOpen} size="small">
          <MoreVertIcon />
        </IconButton>
      </Box>

      {/* Context Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleRename}>
          <EditIcon fontSize="small" sx={{ marginRight: 1 }} /> Rename
        </MenuItem>
        <MenuItem onClick={handleDownload}>
          <FileDownloadIcon fontSize="small" sx={{ marginRight: 1 }} /> Download
        </MenuItem>
        <MenuItem onClick={handleDelete}>🗑️ Delete</MenuItem>
      </Menu>

      {/* Image Section */}
      <Box
        component="img"
        src={image.id}
        alt={image.name}
        sx={{
          width: "100%",
          height: "100%",
          flexGrow: 1,
          objectFit: "cover",
          transition: "transform 0.3s ease-in-out",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </Paper>
  );
};

export default ImageCard;
