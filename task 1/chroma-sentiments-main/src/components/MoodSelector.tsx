import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export interface Mood {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

const moods: Mood[] = [
  { id: "happy", name: "Happy", emoji: "😊", description: "Feeling joyful and positive" },
  { id: "calm", name: "Calm", emoji: "😌", description: "Peaceful and relaxed" },
  { id: "energetic", name: "Energetic", emoji: "⚡", description: "Full of energy and motivation" },
  { id: "sad", name: "Sad", emoji: "😢", description: "Feeling down or melancholy" },
  { id: "anxious", name: "Anxious", emoji: "😰", description: "Worried or stressed" },
  { id: "peaceful", name: "Peaceful", emoji: "🕊️", description: "Serene and tranquil" },
];

interface MoodSelectorProps {
  selectedMood?: string;
  onMoodSelect?: (mood: Mood) => void;
  className?: string;
  navigateToMoodPage?: boolean;
}

export const MoodSelector = ({ selectedMood, onMoodSelect, className, navigateToMoodPage = false }: MoodSelectorProps) => {
  const navigate = useNavigate();

  const handleMoodClick = (mood: Mood) => {
    if (navigateToMoodPage) {
      navigate(`/${mood.id}`);
    } else if (onMoodSelect) {
      onMoodSelect(mood);
    }
  };
  return (
    <div className={cn("glass-card rounded-2xl p-6 animate-fade-in", className)}>
      <h2 className="text-2xl font-bold text-white mb-6 text-center animate-pulse-glow">
        🌟 What's your vibe today? 🌟
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {moods.map((mood, index) => (
          <button
            key={mood.id}
            onClick={() => handleMoodClick(mood)}
            className={cn(
              "mood-button flex flex-col items-center gap-3 hover-scale",
              selectedMood === mood.id && "selected animate-scale-in"
            )}
            title={mood.description}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <span className="text-4xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
              {mood.emoji}
            </span>
            <span className="text-base font-semibold text-white">{mood.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-white/70 text-sm animate-fade-in">
          ✨ Click an emoji to capture your current mood ✨
        </p>
      </div>
    </div>
  );
};