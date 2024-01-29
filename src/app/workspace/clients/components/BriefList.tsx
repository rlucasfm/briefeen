import { IBriefList } from "@/app/interfaces/briefings";
import { generateColor, stringInitial } from "@/utils/helpers";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import PrimaryButton from "@/app/components/Buttons/PrimaryButton/PrimaryButton";

export default function BriefList({ briefs }: { briefs: IBriefList[] }) {
    const onDetailView = (id: number) => {
        console.log(id);
    };

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {briefs.map((brief, index) => (
                <Box key={index} sx={{ marginTop: '24px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
                        <Grid container justifyContent="space-between" columns={12} spacing={1}>
                            {/* Primeira coluna */}
                            <Grid item xs={8} sm={5}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Avatar sx={{ width: '50px', height: '50px', backgroundColor: generateColor(brief.client_name) }}>
                                        {stringInitial(brief.client_name)}
                                    </Avatar>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <Typography sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: '400' }}>{brief.name}</Typography>
                                        <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, fontWeight: '300' }}>{brief.client_name}</Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Segunda coluna */}
                            <Grid item xs={5}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: '400' }}>{brief.client_address}</Typography>
                                    <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, fontWeight: '300' }}>{brief.client_stage}</Typography>
                                </Box>
                            </Grid>

                            {/* Terceira coluna */}
                            <Grid item xs={2}>
                                <Box>
                                    <PrimaryButton onClick={() => onDetailView(brief.id)} sx={{ fontSize: { xs: '12px', sm: '16px' } }}>Ver detalhes</PrimaryButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider sx={{ marginTop: '24px' }}/>
                </Box>
            ))}
        </Box>
    )
}