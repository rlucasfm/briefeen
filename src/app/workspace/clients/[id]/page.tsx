"use client";
import { generateColor } from "@/utils/helpers";
import { Avatar, Box, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { CenteredColumnBox } from "./styles";
import PrimaryButton from "@/app/components/Buttons/PrimaryButton/PrimaryButton";

const clients = [
    {
        name: 'João',
        fase: 'Meeting with client'
    },
    {
        name: 'Marta',
        fase: 'Complete Briefing'
    },
    {
        name: 'Da Silva',
        fase: 'Closed Contract'
    },
]

export default function Page({ params }: { params: { id: number }}) {
    return(
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '26px', minWidth: { xs: '100%', md: '50%' }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Avatar sx={{ width: '120px', height: '120px', backgroundColor: generateColor('a') }}>A</Avatar>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: '32px', fontWeight: '400' }}>Client Name</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px', alignItems: 'center' }}>
                            <PersonIcon sx={{ fontSize: '20px' }} />
                            <Typography>Informações Gerais</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', backgroundColor: '#f0f0f0', padding: '20px', gap: '30px', marginTop: '20px' }}>
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
                <Box sx={{ display: 'flex', minWidth: { xs: '100%', md: '45%' } }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: '500', marginBottom: '24px' }}>Briefings</Typography>
                        {clients.map((client, index) => (
                            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0f0f0', padding: '20px', width: '100%' }} key={index}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                                    <Avatar>{client.name.charAt(0)}</Avatar>
                                    <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>{client.fase}</Typography>
                                    <PrimaryButton style={{ backgroundColor: '#f0f0f0' }}>Acessar briefing</PrimaryButton>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
}