import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Calendar, TrendingUp, Smile } from "lucide-react";

interface MoodEntry {
  date: string;
  mood: {
    id: string;
    name: string;
    emoji: string;
    description: string;
  };
  intensity: number;
}

interface MoodHistoryProps {
  entries: MoodEntry[];
  className?: string;
}

export const MoodHistory = ({ entries, className }: MoodHistoryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayEntries, setDisplayEntries] = useState<MoodEntry[]>([]);

  useEffect(() => {
    // Sort entries by date (most recent first) and show last 7 days
    const sortedEntries = [...entries]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 7);
    setDisplayEntries(sortedEntries);
  }, [entries]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        weekday: 'short'
      });
    }
  };

  const getIntensityColor = (intensity: number) => {
    const colors = [
      "bg-red-500/20 border-red-400/30",
      "bg-orange-500/20 border-orange-400/30", 
      "bg-yellow-500/20 border-yellow-400/30",
      "bg-lime-500/20 border-lime-400/30",
      "bg-green-500/20 border-green-400/30"
    ];
    return colors[intensity - 1] || colors[2];
  };

  const getAverageIntensity = () => {
    if (displayEntries.length === 0) return 0;
    const sum = displayEntries.reduce((acc, entry) => acc + entry.intensity, 0);
    return (sum / displayEntries.length).toFixed(1);
  };

  const getMoodStreak = () => {
    let streak = 0;
    const today = new Date().toDateString();
    let currentDate = new Date();
    
    for (let i = 0; i < 30; i++) {
      const dateStr = currentDate.toDateString();
      const hasEntry = entries.some(entry => 
        new Date(entry.date).toDateString() === dateStr
      );
      
      if (hasEntry) {
        streak++;
      } else if (dateStr !== today) {
        break;
      }
      
      currentDate.setDate(currentDate.getDate() - 1);
    }
    
    return streak;
  };

  if (displayEntries.length === 0) {
    return (
      <div className={cn("glass-card rounded-2xl p-6 text-center animate-fade-in", className)}>
        <div className="text-4xl mb-4">📱</div>
        <h3 className="text-xl font-bold text-white mb-2">Your Vibe Journey</h3>
        <p className="text-white/70">
          Start tracking your moods to see your emotional journey unfold here!
        </p>
      </div>
    );
  }

  return (
    <div className={cn("glass-card rounded-2xl p-6 animate-fade-in", className)}>
      {/* Header with Stats */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Calendar className="w-6 h-6 text-white" />
          <h3 className="text-xl font-bold text-white">Your Vibe Journey</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white/70 hover:text-white transition-colors"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-white/70" />
            <span className="text-sm text-white/70">Streak</span>
          </div>
          <p className="text-2xl font-bold text-white">{getMoodStreak()}</p>
          <p className="text-xs text-white/60">days</p>
        </div>
        <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Smile className="w-4 h-4 text-white/70" />
            <span className="text-sm text-white/70">Avg Intensity</span>
          </div>
          <p className="text-2xl font-bold text-white">{getAverageIntensity()}</p>
          <p className="text-xs text-white/60">out of 5</p>
        </div>
      </div>

      {/* History List */}
      <div className="space-y-3">
        {displayEntries.slice(0, isExpanded ? 7 : 3).map((entry, index) => (
          <div
            key={`${entry.date}-${index}`}
            className={cn(
              "flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-102",
              "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20",
              getIntensityColor(entry.intensity)
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-3xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
              {entry.mood.emoji}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-white capitalize">
                  {entry.mood.name}
                </h4>
                <span className="text-white/60 text-sm">
                  {formatDate(entry.date)}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-200",
                        level <= entry.intensity 
                          ? "bg-white shadow-sm scale-110" 
                          : "bg-white/30"
                      )}
                    />
                  ))}
                </div>
                <span className="text-white/60 text-xs ml-1">
                  {entry.intensity}/5
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayEntries.length > 3 && !isExpanded && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsExpanded(true)}
            className="text-white/70 hover:text-white transition-colors text-sm"
          >
            + {displayEntries.length - 3} more entries
          </button>
        </div>
      )}

      {displayEntries.length === 0 && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🌱</div>
          <p className="text-white/70">
            Your mood journey starts here! Log your first vibe above.
          </p>
        </div>
      )}
    </div>
  );
};