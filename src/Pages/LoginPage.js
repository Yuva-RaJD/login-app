import { Box } from "@mui/material";
import MyForm from "../components/MyForm";
// -----------------------------------------------------------

function LoginPage() {
    return (
        <>
        
            <Box sx={{
            width: 1,
            height:'100vh',
            display: 'flex',
            justifyContent:'center',
            backgroundColor: 'lightblue',
                alignItems: 'center'
            
        }}>
            <Box sx={{
                width: '50%',
                height: '50%',
                }}>
            {/* login form  */}
            <MyForm/>
        </Box>
</Box>
        </>
    );
}
export default LoginPage;