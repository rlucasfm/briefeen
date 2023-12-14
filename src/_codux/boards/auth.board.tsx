import React from 'react'
import { createBoard } from '@wixc3/react-board';
import Page from '../../app/auth/page';

export default createBoard({
    name: 'Auth',
    Board: () => <Page />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1600,
        windowWidth: 1592,
        canvasHeight: 490
    }
});
