import React, { useState } from 'react';
import { 
  Container, 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Paper,
  CircularProgress
} from '@mui/material';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false);

  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  if (!backendUrl) {
    throw new Error('REACT_APP_BACKEND_URL environment variable is not set');
  }

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${backendUrl}/api/marco`, {
        text: inputText
      });
      setResponseText(response.data.marco);
    } catch (error) {
      console.error('Error:', error);
      setResponseText('An error occurred while processing your text.');
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" 
          sx={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
          Marco Polo y Chinos y Juanca y Angel
        </Typography>
        
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            label="Enter your text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            sx={{ mb: 2 }}
          />
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Button 
              variant="contained" 
              onClick={handleSubmit}
              disabled={loading || !inputText}
              sx={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                color: 'white',
                padding: '10px 30px',
                borderRadius: '25px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FE6B8B 20%, #FF8E53 80%)',
                }
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Marco'}
            </Button>
          </Box>

          {responseText && (
            <Paper elevation={2} sx={{ p: 3, bgcolor: '#f8f9fa' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Response
              </Typography>
              <Typography variant="body1">
                {responseText}
              </Typography>
            </Paper>
          )}
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
