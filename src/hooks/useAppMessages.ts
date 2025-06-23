import { useCallback } from 'react';
import { useDaily, useDailyEvent } from '@daily-co/daily-react';
import { ToolCallService } from '@/services/toolCallService';

export const useAppMessages = () => {
  const daily = useDaily();

  const handleToolCall = useCallback(async (event: any) => { 
    console.log("app-message", JSON.stringify(event));
    const { data } = event;
    if (data?.event_type === "conversation.tool_call") {
      console.log("*********** TOOL CALLING ***********", JSON.stringify(data));
      const { properties, conversation_id } = data;
      const { name, arguments: functionArgumentsStr } = properties;
      const functionArguments = JSON.parse(functionArgumentsStr);
      switch (name) {
        case 'process_and_transform_goal':
          await ToolCallService.processGoal(daily, functionArguments, conversation_id);
          break;
        case 'get_weekly_goals':
          await ToolCallService.getWeeklyGoals(daily, functionArguments, conversation_id);
          break;
        default:
          console.error('Unknown tool:', name);
      }
    }
  }, [daily]);

  useDailyEvent("app-message", handleToolCall);
}; 