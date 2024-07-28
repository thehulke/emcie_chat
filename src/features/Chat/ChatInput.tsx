import React from 'react';
import { Box, TextField, IconButton, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import useChatStore from './store';

interface ChatInputProps {
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ isLoading }) => {
  const { textInputValue, setTextInputValue, sendMessage } = useChatStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInputValue.trim() && !isLoading) {
      sendMessage(textInputValue.trim());
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        padding: 2,
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        value={textInputValue}
        onChange={(e) => setTextInputValue(e.target.value)}
        placeholder="Type a message..."
        disabled={isLoading}
        sx={{ mr: 1 }}
      />
      <IconButton type="submit" color="primary" disabled={isLoading}>
        {isLoading ? <CircularProgress size={24} /> : <SendIcon />}
      </IconButton>
    </Box>
  );
};

export default ChatInput;
