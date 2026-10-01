import {Box, Typography, } from '@mui/material';
import { AnswerCartProps } from '../types/flashcard';


export default function AnswerCart({ showAnswer, answer }: AnswerCartProps) {
    if (!showAnswer) {
        return null;
    }
    return (
        <Box
            sx={(theme) => ({
                height: 100,
                width: 500,
                padding: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'normal',
                bgcolor: 'grey.100',
                color: 'grey.800',
                border: '1px solid',
                borderColor: 'grey.300',
                fontSize: '1.5rem',
                fontWeight: '700',
                ...theme.applyStyles('dark', {
                    bgcolor: '#101010',
                    color: 'grey.300',
                    borderColor: 'grey.800',
                }),
            })}>

            <Typography>{answer}</Typography>
        </Box>

    )
}