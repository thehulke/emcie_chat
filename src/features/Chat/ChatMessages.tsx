import React, { useRef, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { ChatMessage } from './types';

interface ChatMessagesProps {
  messages: ChatMessage[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const theme = useTheme();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Box sx={{ flexGrow: 1, overflow: 'auto', padding: 2, paddingTop: 1 }}>
      {messages.map((message) => (
        <Box
          key={message.id}
          sx={{
            display: 'flex',
            justifyContent:
              message.type === 'request' ? 'flex-end' : 'flex-start',
            mb: 2,
          }}
        >
          <Box
            sx={{
              maxWidth: '70%',
              padding: 2,
              borderRadius: 2,
              backgroundColor:
                message.type === 'request'
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
              color: theme.palette.getContrastText(
                message.type === 'request'
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main
              ),
            }}
          >
            <Typography variant="body1">{message.content}</Typography>
          </Box>
        </Box>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default ChatMessages;
