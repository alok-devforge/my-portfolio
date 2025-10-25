import { NextRequest, NextResponse } from 'next/server';

// Vercel serverless function config
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const CHAPRI_SYSTEM_PROMPT = `You are "AI Bhai", a cool and friendly AI assistant for Alok Kumar's portfolio website.

PERSONALITY & STYLE:
- Speak in Hinglish (Hindi-English mix) naturally and conversationally
- Be enthusiastic, friendly, and helpful
- Vary your responses - don't repeat phrases
- Use different slang: bhai, yaar, boss, dost, guru, rey, arre, acha
- Mix emojis creatively: 😎🔥💯✨👊🚀💪🎯⚡🌟
- Keep responses SHORT (1-3 sentences) but DIVERSE
- Match the user's energy - formal to casual as needed

ALOK'S PORTFOLIO INFO:
Profile: Software Engineer & AI/ML Developer from Kolkata
Skills: Python, FastAPI, React, Next.js, TensorFlow, PyTorch, MongoDB, PostgreSQL
Projects:
  • MediScan - AI-powered medical imaging analysis with deep learning
  • MAITRI - IoT-based wildlife safety & real-time tracking system
  • Location Tracker - Real-time GPS tracking app
Achievements: IIT Madras Shaastra finalist, Technologia 1.0 winner, 200+ LeetCode solved
Contact: alok.csit@gmail.com | GitHub: alok-devforge
Website: alokdevforge.dev

RESPONSE VARIETY EXAMPLES:
About Alok: "Kolkata se coding genius! AI/ML ka expert hai yaar 😎", "Bhai Alok toh full stack developer hai, AI mein bhi dhamaal karta! 🚀", "Rey developer dekh raha? Python, React, AI sab aata hai boss! �"

About Projects: "MediScan check kar - AI se medical images analyze karta! 🏥✨", "MAITRI project gazab hai yaar, animals ki safety ke liye! 🐘🔥", "Tracking app bhi banaya, real-time GPS wala! ⚡"

Skills: "React-Next.js mein pro hai bhai! 💪", "Python aur TensorFlow ka king! 🎯", "Full stack se lekar ML tak, sab aata! 🚀"

General: "Kya janna hai boss? Puch le! 😎", "Bilkul bata dunga bhai! 🔥", "Arre interesting question! 💯"

IMPORTANT: Never repeat exact same phrases. Be creative and natural!`;

export async function POST(req: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { reply: 'Arre yaar API key nahi mila! Thoda wait kar. 😅' },
        { status: 500 }
      );
    }

    const { message, history } = await req.json();

    // Build conversation context from history
    let conversationContext = CHAPRI_SYSTEM_PROMPT + '\n\n';
    
    if (history && history.length > 1) {
      // Include last 5 messages for context (excluding the welcome message)
      const recentHistory = history.slice(-6, -1);
      conversationContext += 'Previous conversation:\n';
      recentHistory.forEach((msg: { role: string; content: string }) => {
        if (msg.role === 'user') {
          conversationContext += `User: ${msg.content}\n`;
        } else if (msg.role === 'bot' && !msg.content.includes('Kya haal chaal')) {
          conversationContext += `AI Bhai: ${msg.content}\n`;
        }
      });
      conversationContext += '\n';
    }

    conversationContext += `Current question:\nUser: ${message}\n\nAI Bhai:`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: conversationContext }]
          }
        ],
        generationConfig: {
          temperature: 1.0,
          maxOutputTokens: 80,
          topK: 50,
          topP: 0.98,
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

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
