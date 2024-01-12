"use client";

import PrimaryButton from "@/app/components/Buttons/PrimaryButton/PrimaryButton";
import { IBriefList } from "@/app/interfaces/briefings";
import { Box, Divider, Typography } from "@mui/material";
import BriefList from "./components/BriefList";

const dummy_briefs: IBriefList[] = [
    {
        id: 0,
        name: 'Briefing Casa do George',
        client_name: 'George Downtown',
        client_address: 'Rua Topázio, 385 Ap 5',
        client_phone: '(99) 99199-9191',
        client_stage: 'Briefing Completo'
    },
    {
        id: 1,
        name: 'Briefing AP da Bia',
        client_name: 'Bia Medeiros',
        client_address: 'Rua Esquerda, 385 Ap 5',
        client_phone: '(99) 99199-9191',
        client_stage: 'Planejamento de Projeto'
    },
    {
        id: 2,
        name: 'Briefing Studio da Fox',
        client_name: 'Clooney Fox',
        client_address: 'Spider Street, N 95',
        client_phone: '(81) 99199-9191',
        client_stage: 'Projeto concluído'
    },
    {
        id: 3,
        name: 'Briefing Casa do Anderssen',
        client_name: 'John Anderssen',
        client_address: 'Groove Street',
        client_phone: '(99) 99199-9191',
        client_stage: 'Briefing não respondido'
    }
]

export default function Page() {
    const onAddBrief = () => {
        console.log('Add brief');
    }

    return(
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>Briefings</Typography>
                    <Typography sx={{ fontSize: '', fontWeight: '300', color: '#272b30' }}>4 Briefings</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <PrimaryButton onClick={onAddBrief} sx={{ fontSize: { xs: '12px', sm: '16px'} }}>+ Criar novo brief</PrimaryButton>
                </Box>
            </Box>
            <Divider sx={{ marginTop: '8px' }} />
            <BriefList briefs={dummy_briefs} />
        </>
    )
}