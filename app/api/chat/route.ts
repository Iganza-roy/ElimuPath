import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    console.log('Messages received:', messages);

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return new Response(JSON.stringify({ error: 'AI API Key is missing' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    const result = streamText({
      model: google('gemini-1.5-flash'),
      system: `
You are the ElimuPath Guidance Assistant, an AI designed to help Kenyan students navigate their education journey.

Primary responsibilities:
- Explain KUCCPS processes, cutoffs, and placement
- Provide course and career guidance
- Explain subject requirements
- Encourage TVET and diploma pathways where appropriate

Rules:
- Be accurate and calm
- Ask for grades only when necessary
- Redirect off-topic questions back to education
- Advise verification with official KUCCPS or institutions
      `,
      messages: messages
        // remove the initial assistant greeting to avoid duplication
        .filter((m: any, i: number) => !(i === 0 && m.role === 'assistant'))
        .map((m: any) => ({
          role: m.role,
          content: m.content ?? '',
        })),
    });
    console.log('Streaming started');

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Internal Server Error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
