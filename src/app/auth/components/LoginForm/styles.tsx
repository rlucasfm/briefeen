import styled from "@emotion/styled";
import { Box, Button, ButtonProps } from "@mui/material";

export const LoginFormBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginTop: '30px'
})

export const LoginButton = styled(Button)<ButtonProps>({
    fontSize: '16px',
    textTransform: 'none',
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
        backgroundColor: 'grey'
    }
})