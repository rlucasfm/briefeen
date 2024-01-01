import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

export const SecondaryBtn = styled(Button)<ButtonProps>({
    textTransform: 'none',
    color: 'black',
    fontWeight: '400',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: 0,
    '&:hover': {
        backgroundColor: 'black',
        color: 'white'
    }
})