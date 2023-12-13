import React from 'react'
import { createBoard } from '@wixc3/react-board';
import LoginForm from '../../app/auth/components/LoginForm/LoginForm'

export default createBoard({
    name: 'LoginForm',
    Board: () => <LoginForm />,
    isSnippet: true,
});
