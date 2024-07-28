import { ApiStatus } from '../../entities/ApiStatus';

export type MessageType = 'request' | 'response';

export interface ChatMessage {
  id: string;
  type: MessageType;
  content: string;
}

export interface ChatState {
  id: string;
  messages: ChatMessage[];
  callStatus: ApiStatus;
  textInputValue: string;
}
