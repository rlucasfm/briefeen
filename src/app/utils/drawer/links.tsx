import { IDrawerMenu } from "@/app/interfaces/workspace";

import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GroupsIcon from '@mui/icons-material/Groups';

export const drawer_menus: IDrawerMenu[] = [
    {
        label: 'Workspace',
        icon: <BusinessIcon />,
        link: '/workspace/home'
    },
    {
        label: 'Briefings',
        icon: <AssignmentIcon />,
        link: '/workspace/briefings'
    },
    {
        label: 'Clientes',
        icon: <GroupsIcon />,
        link: '/workspace/clients'
    },
    {
        label: 'Catálogos',
        icon: <FormatListBulletedIcon />,
        link: '/workspace/catalogs'
    },
    {
        label: 'Portfolios',
        icon: <FolderOpenIcon />,
        link: '/workspace/portfolios'
    }
];