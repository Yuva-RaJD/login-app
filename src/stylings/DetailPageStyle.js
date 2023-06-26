import styled from "@emotion/styled";


export const ModalStyle = {
position: "absolute",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
width: 400,
gap: 3,
bgcolor: "background.paper",
              borderRadius: 2,
              border: "1px solid #000",
boxShadow: 12,
p: 4,
};

export const imageModalStyle = {
position: "absolute",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
width: 300,
gap: 3,
bgcolor: "background.paper",
              borderRadius: 2,
              border: "1px solid #000",
boxShadow: 12,
p: 4,
};

export const mainDivStyle = {
width: 1,
height: "100vh",
display: "flex",
justifyContent: "center",
          alignItems: "center",
};

export const imageBoxStyle = {
display: "flex",
width: 1,
borderRadius: 2,
height: 120,
justifyContent: "center",
  backgroundColor: '#19A7CE',
  alignContent: "center",
};

export const ButtonSectionStyle = {
    display: "flex",
    flexDirection: { xs: 'column', sm: 'column',md:'row' },
                justifyContent: "space-evenly",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
  backgroundColor: '#F6F1F1',
  borderRadius: 1,
}


export const FormGroup = styled.form`
  width:60%;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 10px;
  padding:auto;
  color:white;
  justify-content: evenly;
  background-color:rgba(253, 253, 253, 0.463);
  border-radius:5px;
  box-shadow:1px 1px 15px 2px #b3b3b3;
  padding:20px;
  -webkit-backdrop-filter: blur(55px);
  backdrop-filter: blur(5px);
  
`;
