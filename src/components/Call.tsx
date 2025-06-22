import { DailyAudio, useParticipantIds, useLocalSessionId, useDailyEvent, useDaily } from '@daily-co/daily-react';
import { useCallback } from 'react';
import { Video } from './Video';

export const Call = () => {
  const daily = useDaily();
  const remoteParticipantIds = useParticipantIds({ filter: 'remote' });
  const localSessionId = useLocalSessionId();

  const handleProcessGoal = async (parameters: any, conversation_id: any) => {
    console.log("handleProcessGoal", JSON.stringify(parameters));
    daily?.sendAppMessage({
      message_type: "conversation",
      event_type: "conversation.echo",
      conversation_id: conversation_id,
      properties: {
        modality: "text",
        text: "BEM BOLADO GABRIELA YOUR GOAL NOW IS SMART!"
        // text: "YOUR GOAL NOW IS SMART!"
      },
    });
  }
  const handleGetWeeklyGoals = async (parameters: any, conversation_id: any) => {
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
          await handleProcessGoal(functionArguments, conversation_id);
          break;
        case 'get_weekly_goals':
          await handleGetWeeklyGoals(functionArguments, conversation_id);
          break;
        default:
          console.error('Unknown tool:', name);
      }
    }
  }, [])

  useDailyEvent("app-message", handleToolCall);

  return (
    <div className="relative h-full w-full">
      {remoteParticipantIds.length > 0 ? (
        <Video id={remoteParticipantIds[0]} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center" />
      )}
      {localSessionId && (
        <Video
          id={localSessionId}
          className="absolute bottom-4 right-4 h-32 w-32 rounded-lg"
        />
      )}
      <DailyAudio />
    </div>
  );
};


