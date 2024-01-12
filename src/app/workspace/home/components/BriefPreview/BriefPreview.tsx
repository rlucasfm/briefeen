"use client";

import PrimaryButton from "@/app/components/Buttons/PrimaryButton/PrimaryButton";
import { generateColor, stringInitial } from "@/utils/helpers";
import { Avatar, Box, Typography } from "@mui/material";

export default function BriefPreview() {
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Meus briefings</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0f0f0', padding: '24px' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '500', marginBottom: '24px' }}>7 briefings ativos</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {<BriefUnit name='Maria' step='Encontro com o cliente' due='Hoje' />}
                    {<BriefUnit name='John' step='Proposta de Design' due='Amanhã' />}
                    {<BriefUnit name='Marcus' step='Discussão do Projeto' due='Ontem' />}
                </Box>
                <PrimaryButton 
                    sx={{
                        margin: '0 auto',
                        marginTop: '18px', 
                        backgroundColor: '#f0f0f0 !important', 
                        fontSize: '16px',
                        fontWeight: '600 !important',
                        maxWidth: '220px',
                        '&:hover': {
                            backgroundColor: 'black !important'
                        }
                    }}
                >
                    Ver todos os briefings
                </PrimaryButton>
            </Box>
        </Box>
    )
}

function BriefUnit({name, step, due}: {name: string, step: string, due: string}) {
    return(
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ width: { sm: '20%' }, display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Avatar sx={{ width: '32px', height: '32px', backgroundColor: generateColor(name) }}>
                    {stringInitial(name)}
                </Avatar>
                <Typography sx={{ fontSize: { xs: '12px', sm: '16px'}, fontWeight: '500' }}>{name}</Typography>
            </Box>
            <Box sx={{ width: { sm: '40%' }, textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: { xs: '12px', sm: '16px'}, fontWeight: '500' }}>{step}</Typography>
            </Box>
            <Box sx={{ width: { sm: '30%' }, textAlign: 'right', display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: { xs: '12px', sm: '16px'}, fontWeight: '500' }}>{due}</Typography>
            </Box>
        </Box>
    )
}