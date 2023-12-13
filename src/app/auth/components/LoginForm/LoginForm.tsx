"use client";

import { Box, OutlinedInput, Typography } from "@mui/material";
import { LoginFormBox } from "./styles";

export default function LoginForm() {
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>Acessar meu Briefeen!</Typography>
            <LoginFormBox>
                <Typography>Seu email</Typography>
                <OutlinedInput id="email-login" label="Outlined" placeholder="Email" />
            </LoginFormBox>
            <LoginFormBox>
                <Typography>Sua senha</Typography>
                <OutlinedInput id="password-login" type="password" label="Outlined" placeholder="******" />
            </LoginFormBox>
        </Box>
    )
}