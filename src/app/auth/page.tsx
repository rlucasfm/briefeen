import { Box, Grid, Typography } from "@mui/material";
import LoginForm from "./components/LoginForm/LoginForm";
import Image from "next/image";
import authImage from "../../../public/images/auth-image.svg";

export default function Page() {
    return(
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
            <Grid container height="100%">
                <Grid item xs sx={{
                    backgroundColor: '#f0f0f0', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    '@media (max-width:500px)': {
                        display: 'none'
                    }
                }}>
                    <img src={authImage} alt="People working on briefeen" />
                    <Typography sx={{ fontSize: '26px', fontWeight: '600'}}>Bem-vindo ao Briefeen</Typography>
                    <Typography sx={{ maxWidth: '400px', textAlign: 'center' }}>Gerencie seus briefings, clientes e projetos com agilidade.</Typography>
                </Grid>
                <Grid 
                    item 
                    sx={{
                        display: 'none',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        '@media (max-width:500px)': {
                            display: 'flex'
                        }
                    }}>
                        <Typography sx={{ fontSize: '26px', fontWeight: '600'}}>Bem-vindo ao Briefeen</Typography>
                        <Typography sx={{ maxWidth: '400px', textAlign: 'center' }}>Gerencie seus briefings, clientes e projetos com agilidade.</Typography>
                </Grid>
                <Grid item xs sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <LoginForm />
                </Grid>
            </Grid>
        </Box>
    )
}