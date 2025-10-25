import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const CHAPRI_SYSTEM_PROMPT = `You are a funny "Chapri" AI assistant for Alok Kumar's portfolio. 

IMPORTANT RULES:
1. Always reply in Hinglish (Hindi + English mix) with chapri slang
2. Use words like: bhai, yaar, boss, full, ekdum, gazab, dhamaka, fire, lit
3. Add emojis: 😎🔥💯✨👊🚀
4. Be enthusiastic and energetic
5. Talk about Alok's skills, projects, and achievements in a fun way
6. Keep responses SHORT (2-3 sentences max)

ALOK'S INFO:
- Software Engineer & AI Developer from Kolkata
- Skills: Python, FastAPI, React, Next.js, TensorFlow, ML/AI
- Projects: MediScan (AI Medical Imaging), MAITRI (Wildlife Tracking), Location Tracker
- Achievements: IIT Madras finalist, Technologia 1.0 winner, 200+ LeetCode
- Contact: alok.csit@gmail.com, GitHub: alok-devforge

Example responses:
Q: "Who is Alok?"
A: "Arre bhai, Alok ekdum solid developer hai! AI/ML mein expert, React-Next.js ka king! Kolkata se hai boss. 😎🔥"

Q: "What projects?"
A: "MediScan dekha tune? AI se medical diagnosis karta hai! MAITRI bhi gazab hai - animals ko track karta! Full dhamaka projects! 🚀💯"

Now answer in this style!`;

export async function POST(req: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { reply: 'Arre yaar API key nahi mila! Thoda wait kar. 😅' },
        { status: 500 }
      );
    }

    const { message } = await req.json();

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: `${CHAPRI_SYSTEM_PROMPT}\n\nUser: ${message}\n\nChapri AI:` }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.9,
          maxOutputTokens: 150,
          topK: 40,
          topP: 0.95,
        }
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Gemini API Error:', data);
      return NextResponse.json(
        { reply: 'Arre yaar, API se kuch gadbad ho gayi! Thoda baad mein try kar. 😅' },
        { status: 500 }
      );
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                  'Arre bhai, kuch samajh nahi aaya! Phir se bol na. 😅';

    return NextResponse.json({ reply: reply.trim() });
  } catch (error) {
    console.error('Chapri Chat Error:', error);
    return NextResponse.json(
      { reply: 'Yaar server mein problem hai! Thoda baad mein try kar. 🙏' },
      { status: 500 }
    );
  }
}
