import { Box, Typography } from "@mui/material";

export default function Header({ currentQuestion, totalQuestions, progressPercentage }) {
  return (
    <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto', my: 2 }}>

      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1.5, textAlign: 'left' }}>
        Flash Cards
      </Typography>


      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          border: '1px solid',
          borderColor: 'grey.400',
          borderRadius: 4,
          p: 1,
          px: 1.5,
          bgcolor: '#fff',
          gap: 1.5
        }}
      >
   
        <Box
          sx={{
            flexGrow: 1,
            height: 22,
            bgcolor: 'grey.100',
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
         
          <Box
            sx={{
              width: `${progressPercentage}%`,
              height: '100%',
              bgcolor: 'grey.500',
              borderRadius: 3,
              transition: 'width 0.3s ease-in-out',
            }}
          />
        </Box>

    
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 'fit-content' }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
            {progressPercentage}%
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
            {currentQuestion + 1} of {totalQuestions}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}