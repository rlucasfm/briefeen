"use client";

import { Box, TextField, Typography } from "@mui/material";
import { LoginButton, LoginFormBox } from "./styles";

export default function LoginForm() {
    return(
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            width: '410px', 
            padding: '5px'
        }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>Log in</Typography>
            <LoginFormBox>
                <Typography>Seu email</Typography>
                <TextField id="email-login" label="Email" placeholder="Digite o seu email" variant="outlined"/>
            </LoginFormBox>
            <LoginFormBox>
                <Typography>Sua senha</Typography>
                <TextField id="password-login" type="password" label="Senha" placeholder="*********" variant="outlined"/>
            </LoginFormBox>
            <LoginButton sx={{ marginTop: '20px' }}>Log in</LoginButton>
            <Typography sx={{ marginTop: '20px', fontSize: '16px', fontWeight: '300' }}>Esqueceu sua senha?</Typography>
        </Box>
    )
}