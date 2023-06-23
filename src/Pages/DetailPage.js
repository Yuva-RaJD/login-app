import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Divider, Paper } from "@mui/material";

import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";

import { ButtonSectionStyle, mainDivStyle } from "../stylings/DetailPageStyle";

import ImageModal from "../components/Modals/ImageModal";
import EditModal from "../components/Modals/EditModal";

import DetailForm from "../components/Items/DetailsForm";
import ImageBox from "../components/Items/ImageBox";

function DetailPage() {
    const navigate = useNavigate();
    
  const [usersData, setUserData] = useState({});

  const [open, setOpen] = React.useState(false);
  const [openImage, setOpenImage] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageView = () => setOpenImage(true);
  const handleCloseImage = () => setOpenImage(false);

    const handleFormSubmit = (e) => {
      // e.preventDefault();
    console.log("edit sbmitted");
    // navigate("/");
  };

  const handleLogout = () => {
    sessionStorage.setItem("loginEmail", "");
    navigate("/");

  };

  const url = "https://reqres.in/api/users/2";
  async function getdata() {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    const jsonData = await response.json();
    setUserData(jsonData.data);
  }

    useEffect(() => {
        if (sessionStorage.getItem("loginEmail") === "") {
            navigate('/');
        } else {
            getdata();
        }
  }, []);

  return (
    <>
      <Box sx={mainDivStyle}>
        <Box
          sx={{
            width: { xs: "90%", md: "50%", lg: "30%" },
            height: "80%",
          }}
        >
          <Paper
            elevation={24}
            sx={{
              height: "auto",
            }}
          >
            {/* User Profile Image  */}
            <ImageBox
              imageLink={usersData.avatar}
              handleClick={handleImageView}
            />

            {/* Image modal  */}
            <ImageModal
              image={usersData.avatar}
              openImage={openImage}
              handleCloseImage={handleCloseImage}
            />

            <Divider>{usersData.first_name}</Divider>

            {/* Detail form  */}
            <DetailForm usersData={usersData} />

            <Box sx={ButtonSectionStyle}>
              <Button
                variant="contained"
                color="error"
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
                sx={{
                  bottom: 0,
                  mt: "30px",
                }}
              >
                Logout
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                startIcon={<CreateIcon />}
                sx={{
                  bottom: 0,
                  mt: "30px",
                }}
              >
                Edit
              </Button>
            </Box>

            {/* editing modal  */}
            <EditModal
              open={open}
              handleClose={handleClose}
              handleFormSubmit={handleFormSubmit}
              usersData={usersData}
            />
          </Paper>
          {/* <div>{sessionStorage.getItem("loginEmail")}</div>     */}
        </Box>
      </Box>
    </>
  );
}
export default DetailPage;
