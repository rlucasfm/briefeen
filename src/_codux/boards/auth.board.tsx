import React from 'react'
import { createBoard } from '@wixc3/react-board';
import Page from '../../app/auth/page';

export default createBoard({
    name: 'Auth',
    Board: () => <Page />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 2520,
        windowWidth: 1670,
        canvasHeight: 1122,
        windowHeight: 1055
    }
});
