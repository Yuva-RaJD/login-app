import { Avatar, Box } from "@mui/material";
import { imageBoxStyle } from "../../stylings/DetailPageStyle";

function ImageBox(props) {
    const {imageLink,handleClick }=props
    return (
        <Box sx={imageBoxStyle}>
              <Avatar
                alt="profile image"
                src={imageLink}
                variant="outlined"
                onClick={handleClick}
                size="lg"
                sx={{
                  mt: 2,
                  width: 90,
                  height: 90,
                }}
              />
            </Box>
    );
}
export default ImageBox;