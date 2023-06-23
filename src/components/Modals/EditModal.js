import { ModalStyle } from "../../stylings/DetailPageStyle";


import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";


import Modal from "@mui/material/Modal";
import { Box, Button, FormControl, FormGroup, Input } from "@mui/material";

// ------------------------------------------------------------------

function EditModal(props) {
  
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={ModalStyle}>
        <form onSubmit={props.handleFormSubmit}>
          <FormGroup
            sx={{
              display: "flex",
              gap: 5,
            }}
          >
            <Box sx={{ textAlign: "center", m: 1 }}>
              Change Your Details here
            </Box>
            <FormControl color="info">
              <Input
                placeholder={props.usersData.first_name + " " + props.usersData.last_name}
                variant="outline"
                required
              />
            </FormControl>
            <FormControl color="info">
              <Input placeholder="Job" variant="outline" required />
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <Button
                variant="contained"
                color="error"
                onClick={props.handleClose}
                startIcon={<CloseIcon />}
                sx={{
                  marginTop: "5px",
                }}
              >
                Cacel
              </Button>
              <Button
                variant="contained"
                color="success"
                type="submit"
                startIcon={<CheckIcon />}
                sx={{
                  marginTop: "5px",
                }}
              >
                Submit
              </Button>
            </Box>
          </FormGroup>
        </form>
      </Box>
    </Modal>
  );
}
export default EditModal;
