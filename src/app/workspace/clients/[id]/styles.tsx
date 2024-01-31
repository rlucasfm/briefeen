import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CenteredColumnBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p:first-child {
        font-size: 20px;
        font-weight: 500;
    };
    p:nth-child(2) {
        font-size: 14px;
        font-weight: 500;
        font-style: italic;
    };
`;