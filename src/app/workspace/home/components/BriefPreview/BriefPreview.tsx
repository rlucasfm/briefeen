"use client";

import PrimaryButton from "@/app/components/Buttons/PrimaryButton/PrimaryButton";
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
    function stringInitial(nome: string): string {
        if (nome && nome.trim() !== "") {
            return nome.trim()[0].toUpperCase();
        }
        return "";
    }

    function generateColor(nome: string): string {
        // Função para converter uma string em um número
        const stringParaNumero = (str: string): number => {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            return hash;
        };
    
        // Função para gerar uma cor hexadecimal a partir de um número
        const gerarCorHex = (numero: number): string => {
            const corHex = (numero & 0x00FFFFFF).toString(16).toUpperCase();
            return "00000".substring(0, 6 - corHex.length) + corHex;
        };
    
        // Gerar número a partir do nome
        const numero = stringParaNumero(nome);
    
        // Gerar cor hexadecimal a partir do número
        const corHex = gerarCorHex(numero);
    
        return `#${corHex}`;
    }
    
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