import Box from '@mui/material/Box';
import { FlashCardProps } from '../types/flashcard';


export default function FlashCard({ questions, currentQuestion }: FlashCardProps) {
   
    return (
        <div>
            <Box
                component="div"
                sx={(theme) => ({
                    height: 250,
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
                <p>  {questions[currentQuestion].question} </p>

            </Box>
        </div>
    )
}