import PsychologyIcon from '@mui/icons-material/Psychology';
import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import useChatStore from './store';

const Chat: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { messages, callStatus } = useChatStore();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: isMobile ? '100%' : '400px',
          height: isMobile ? '100%' : '600px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: 2,
            display: 'flex',
            alignItems: 'center',
            boxShadow: 1,
          }}
        >
          <PsychologyIcon sx={{ fontSize: 32, marginRight: 1 }} />
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
            Mindflayer
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
          <ChatMessages messages={messages} />
        </Box>
        <ChatInput isLoading={callStatus === 'in_progress'} />
      </Paper>
    </Box>
  );
};

export default Chat;
