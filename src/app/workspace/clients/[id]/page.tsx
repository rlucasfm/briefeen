"use client";
import { generateColor } from "@/utils/helpers";
import { Avatar, Box, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { CenteredColumnBox } from "./styles";

export default function Page({ params }: { params: { id: number }}) {
    return(
        <>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', gap: '26px' }}>
                    <Avatar sx={{ width: '170px', height: '170px', backgroundColor: generateColor('a') }}>A</Avatar>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '32px', fontWeight: '400' }}>Client Name</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px', alignItems: 'center' }}>
                            <PersonIcon sx={{ fontSize: '20px' }} />
                            <Typography>Informações Gerais</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', backgroundColor: '#f0f0f0', padding: '20px', gap: '15px', marginTop: '20px' }}>
                            <CenteredColumnBox>
                                <Typography>Status</Typography>
                                <Typography>Briefing Completo</Typography>
                            </CenteredColumnBox>
                            <CenteredColumnBox>
                                <Typography>Briefings</Typography>
                                <Typography>3</Typography>
                            </CenteredColumnBox>
                            <CenteredColumnBox>
                                <Typography>Anotações</Typography>
                                <Typography>12</Typography>
                            </CenteredColumnBox>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}