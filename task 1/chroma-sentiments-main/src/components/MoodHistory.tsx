import { useState } from "react";
import { cn } from "@/lib/utils";
import { Mood } from "./MoodSelector";

interface MoodEntry {
  date: string;
  mood: Mood;
  intensity: number;
}

interface MoodHistoryProps {
  entries: MoodEntry[];
  className?: string;
}

export const MoodHistory = ({ entries, className }: MoodHistoryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (entries.length === 0) return null;

  const recentEntries = entries.slice(-7); // Last 7 days

  return (
    <div className={cn("glass-card rounded-2xl p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white/90">Mood History</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white/60 hover:text-white/90 text-sm transition-colors"
        >
          {isExpanded ? "Show Less" : "Show All"}
        </button>
      </div>

      <div className="space-y-3">
        {(isExpanded ? entries : recentEntries).map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{entry.mood.emoji}</span>
              <div>
                <p className="font-medium text-white/90">{entry.mood.name}</p>
                <p className="text-xs text-white/60">
                  {new Date(entry.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={cn(
                    "w-2 h-2 rounded-full",
                    level <= entry.intensity
                      ? "bg-white/70"
                      : "bg-white/20"
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {entries.length > 7 && !isExpanded && (
        <p className="text-xs text-white/50 text-center mt-4">
          Showing recent 7 days
        </p>
      )}
    </div>
  );
};