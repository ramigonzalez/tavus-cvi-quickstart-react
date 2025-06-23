import { useDaily } from '@daily-co/daily-react';

export class ToolCallService {
  static async processGoal(daily: any, parameters: any, conversation_id: string): Promise<void> {
    console.log("handleProcessGoal", JSON.stringify(parameters));
    daily?.sendAppMessage({
      message_type: "conversation",
      event_type: "conversation.echo",
      conversation_id: conversation_id,
      properties: {
        modality: "text",
        text: "BEM BOLADO GABRIELA YOUR GOAL NOW IS SMART!"
      },
    });
  }

  static async getWeeklyGoals(daily: any, parameters: any, conversation_id: string): Promise<void> {
    console.log("handleGetWeeklyGoals", JSON.stringify(parameters));
    daily?.sendAppMessage({
      message_type: "conversation",
      event_type: "conversation.echo",
      conversation_id: conversation_id,
      properties: {
        modality: "text",
        text: `YOUR WEEKLY GOALS ARE: 
        1. Sleep 8hs from monday to friday
        2. Drink 2Lts of water per day
        3. Reduce sugar ingest in 50% for the next 15 days
        ''`
      },
    });
  }
} 