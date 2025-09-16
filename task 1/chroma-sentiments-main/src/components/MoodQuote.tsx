import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Quote {
  text: string;
  author: string;
}

const moodQuotes: Record<string, Quote[]> = {
  happy: [
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "The best way to cheer yourself up is to try to cheer somebody else up.", author: "Mark Twain" },
    { text: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon" },
  ],
  calm: [
    { text: "Peace comes from within. Do not seek it without.", author: "Buddha" },
    { text: "Calm mind brings inner strength and self-confidence.", author: "Dalai Lama" },
    { text: "The present moment is the only time over which we have dominion.", author: "Thích Nhất Hạnh" },
  ],
  energetic: [
    { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your limitation—it's only your imagination.", author: "Unknown" },
  ],
  sad: [
    { text: "The wound is the place where the Light enters you.", author: "Rumi" },
    { text: "Every storm runs out of rain.", author: "Maya Angelou" },
    { text: "Sometimes you need to sit lonely on the floor in a quiet room in order to hear your own voice.", author: "Charlotte Eriksson" },
  ],
  anxious: [
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
    { text: "Anxiety is the dizziness of freedom.", author: "Søren Kierkegaard" },
    { text: "Breathe in peace, breathe out stress.", author: "Unknown" },
  ],
  peaceful: [
    { text: "Nothing can bring you peace but yourself.", author: "Ralph Waldo Emerson" },
    { text: "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.", author: "Ronald Reagan" },
    { text: "In the midst of winter, I found there was, within me, an invincible summer.", author: "Albert Camus" },
  ],
};

interface MoodQuoteProps {
  mood: string;
  className?: string;
}

export const MoodQuote = ({ mood, className }: MoodQuoteProps) => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  useEffect(() => {
    if (mood && moodQuotes[mood]) {
      const quotes = moodQuotes[mood];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(randomQuote);
    }
  }, [mood]);

  if (!currentQuote) return null;

  return (
    <div className={cn("glass-card rounded-2xl p-8 text-center", className)}>
      <div className="animate-pulse-glow">
        <div className="text-4xl mb-4">💭</div>
        <blockquote className="text-xl font-medium text-white mb-6 italic leading-relaxed">
          "{currentQuote.text}"
        </blockquote>
        <cite className="text-base text-white/80 font-semibold">
          — {currentQuote.author}
        </cite>
      </div>
    </div>
  );
};