import { Box } from "@mui/material";
import MyForm from "../components/MyForm";
import email from '../static/email.png'
import pageImage from '../static/landing.jpg' 
import bg from '../static/bg.png'
// -----------------------------------------------------------

function LoginPage() {
    return (
        <>
        
            <Box sx={{
            width: 1,
            height:'100vh',
            display: 'flex',
            justifyContent:'end',
                alignItems: 'center',
                // backgroundImage: 'url("https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                background: ' linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)',
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
            
        }}>
            <Box sx={{
                width: '50%',
                    height: '50%',
                    pt: 10,
                    zIndex:1,
                }}>
                    {/* login form  */}
            <MyForm/>
                    <img id="bgimage" src={bg}></img>
        </Box>
</Box>
        </>
    );
}
export default LoginPage;