import { Box, Button, Modal } from "@mui/material";
import { imageModalStyle } from "../../stylings/DetailPageStyle";

import CloseIcon from "@mui/icons-material/Close";


function ImageModal(props) {

  return (
    <Modal
      open={props.openImage}
      onClose={props.handleCloseImage}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={imageModalStyle}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Button
            variant="outlined"
            color="error"
            onClick={props.handleCloseImage}
            startIcon={<CloseIcon />}
            sx={{
              marginTop: "5px",
            }}
          >
            Close
          </Button>
        </Box>
        <img src={props.image} alt="Profile Image" loading="lazy" />
      </Box>
    </Modal>
  );
}
export default ImageModal;
