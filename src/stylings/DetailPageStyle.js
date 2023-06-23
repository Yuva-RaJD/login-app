import styled from "@emotion/styled";


export const ModalStyle = {
position: "absolute",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
width: 400,
gap: 3,
bgcolor: "background.paper",
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
height: 100,
justifyContent: "center",
alignContent: "center",
};

export const ButtonSectionStyle = {
    display: "flex",
    flexDirection: { xs: 'column', sm: 'column',md:'row' },
                justifyContent: "space-evenly",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
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
`;
