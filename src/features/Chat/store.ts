import { create } from 'zustand';
import { ChatMessage, ChatState } from './types';

interface ChatStore extends ChatState {
  sendMessage: (content: string) => void;
  setTextInputValue: (value: string) => void;
}

const useChatStore = create<ChatStore>((set) => ({
  id: '1',
  messages: [],
  callStatus: 'idle',
  textInputValue: '',

  sendMessage: (content) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'request',
      content,
    };

    set((state) => ({
      messages: [...state.messages, newMessage],
      callStatus: 'in_progress',
      textInputValue: '',
    }));

    setTimeout(() => {
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'response',
        content: 'This is all i can say.',
      };

      set((state) => ({
        messages: [...state.messages, responseMessage],
        callStatus: 'success',
      }));
    }, 3000);
  },

  setTextInputValue: (value) => set({ textInputValue: value }),
}));

export default useChatStore;
