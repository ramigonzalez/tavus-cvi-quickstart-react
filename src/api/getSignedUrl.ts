import { ElevenLabsClient } from "elevenlabs";

export const getSignedUrl = async (req, res) => {
  const agentId = process.env.ELEVENLABS_AGENT_ID;
  if (!agentId) {
    return res.status(500).json({ error: "ELEVENLABS_AGENT_ID is not set" });
  }
  try {
    const client = new ElevenLabsClient();
    const response = await client.conversationalAi.getSignedUrl({
      agent_id: agentId,
    });
    res.status(200).json({ signed_url: response.signed_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 