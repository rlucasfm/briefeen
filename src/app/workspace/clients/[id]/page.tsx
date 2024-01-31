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

const anotacoes = [
    {
        comment: 'Testando os comentários aqui, vamos fazer valer com um comentário bem delicioso e agradável para todos os amigos do PC',

    },
    {
        comment: 'Testando os comentários aqui, vamos fazer valer com um comentário bem delicioso e agradável para todos os amigos do PC',
        
    }
]

const feedbacks = [
    {
        comment: 'Amei a aplicação dos briefings através do Briefeen! Com certeza é uma ótima ferramenta'
    },
    {
        comment: 'Amei a aplicação dos briefings através do Briefeen! Com certeza é uma ótima ferramenta'
    }
]

export default function Page({ params }: { params: { id: number }}) {
    return(
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: { xs: '100%', md: '50%' }, maxWidth: { xs: '100%', sm: '50%' } }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '30px', padding: '5px', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <Avatar sx={{ width: '120px', height: '120px', backgroundColor: generateColor('a') }}>A</Avatar>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <Typography sx={{ fontSize: '32px', fontWeight: '400', textAlign: { xs: 'center', md: 'left' } }}>Client Name</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                <PersonIcon sx={{ fontSize: '20px' }} />
                                <Typography>Informações Gerais</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', backgroundColor: '#f0f0f0', padding: '20px', gap: '40px', marginTop: '20px' }}>
                                <CenteredColumnBox>
                                    <Typography>Status</Typography>
                                    <Typography>Briefing Completo</Typography>
                                </CenteredColumnBox>
                                <CenteredColumnBox>
                                    <Typography>3</Typography>
                                    <Typography>Briefings</Typography>
                                </CenteredColumnBox>
                                <CenteredColumnBox>
                                    <Typography>12</Typography>
                                    <Typography>Anotações</Typography>
                                </CenteredColumnBox>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '20px', marginBottom: '20px' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: '500', marginBottom: '24px' }}>Briefings</Typography>
                        {clients.map((client, index) => (
                            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0f0f0', padding: '20px', width: '100%' }} key={index}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                                    <Avatar sx={{ width: {xs: '40px', sm: '50px'}, height: {xs: '40px', sm: '50px'} }}>{client.name.charAt(0)}</Avatar>
                                    <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>{client.fase}</Typography>
                                    <PrimaryButton style={{ backgroundColor: '#f0f0f0' }}>Acessar briefing</PrimaryButton>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: { xs: '100%', sm: '40%' }}}>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: '500', marginBottom: '24px' }}>Anotações</Typography>
                            {anotacoes.map((annot, index) => (
                                <Box sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    backgroundColor: '#f0f0f0', 
                                    padding: '20px', 
                                    width: '100%' 
                                }} key={index}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>{annot.comment}</Typography>
                                        <PrimaryButton style={{ backgroundColor: '#f0f0f0' }}>Baixar anexos</PrimaryButton>
                                    </Box>
                                </Box>
                                
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', marginTop: '20px', marginBottom: '30px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: '500', marginBottom: '24px' }}>Feedbacks</Typography>
                            {feedbacks.map((feed, index) => (
                                <Box sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    backgroundColor: '#f0f0f0', 
                                    padding: '20px', 
                                    width: '100%' 
                                }} key={index}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                                        <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>{feed.comment}</Typography>
                                    </Box>
                                </Box>
                                
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}