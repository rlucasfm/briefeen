"use client";

import PrimaryButton from "@/app/components/Buttons/PrimaryButton/PrimaryButton";
import { Box, Typography } from "@mui/material";

export default function HeaderBrief() {
    const onAddBrief = () => {
        console.log('Add brief')
    }

    return(
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Bom dia, Marfa</Typography>
                <Typography sx={{ fontSize: '14px', color: '#5d5d5b' }}>Abra o painel e acompanhe o progresso de seus briefings e projetos.</Typography>
            </Box>
            <Box>
                <PrimaryButton onClick={onAddBrief} sx={{ fontSize: { xs: '12px', sm: '16px'} }}>+ Criar novo brief</PrimaryButton>
            </Box>
        </Box>
    )
}