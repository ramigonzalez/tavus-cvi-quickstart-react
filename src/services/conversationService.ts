import { IConversation, ConversationStatus } from '@/types';
import { endConversation as endConversationAPI } from '@/api';

export class ConversationService {
  static async createConversation(): Promise<IConversation> {
    // For now, return the mock conversation as in the original App.tsx
    // In a real implementation, this would call the actual API
    return {
      conversation_id: "c24b055c0a427428",
      conversation_name: "New Conversation 1750378478270",
      status: ConversationStatus.ACTIVE,
      conversation_url: "https://tavus.daily.co/c9eb391058d0f4b7",
      replica_id: null,
      persona_id: null,
      created_at: "2025-06-20T00:14:38.292493Z"
    };
  }

  static async endConversation(id: string): Promise<void> {
    await endConversationAPI(id);
  }
} 