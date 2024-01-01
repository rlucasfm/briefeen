"use server";

import { Box } from "@mui/material";
import HeaderBrief from "./components/HeaderBrief/HeaderBrief";
import BriefPreview from "./components/BriefPreview/BriefPreview";

export default async function Page() {
    return(
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '22px', width: { xs: '100%', lg: '60%' } }}>
                <HeaderBrief />
                <BriefPreview />
            </Box>
            <Box></Box>
        </Box>
    )
}