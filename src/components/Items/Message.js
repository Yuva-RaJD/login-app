import { Alert, Snackbar } from "@mui/material";
import React from "react";

function Message(props) {
const [open, setOpen] = React.useState(true);

const handleClose = (event, reason) => {
    if (reason === "clickaway") {
    return;
    }
    setOpen(false);
};
return (
    <>
    {/* {sessionStorage.getItem("loginEmail")}
    {props.type} */}
    <Snackbar
        open={props.open && open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
    >
        <Alert
        onClose={handleClose}
        severity={props.type}
        sx={{ width: "100%" }}
        >
        {props.text}
        </Alert>
    </Snackbar>
    </>
);
}
export default Message;
