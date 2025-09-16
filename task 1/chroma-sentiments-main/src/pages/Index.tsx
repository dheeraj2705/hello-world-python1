import { useState, useEffect } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { MoodSelector } from "@/components/MoodSelector";
import { MoodHistory } from "@/components/EnhancedMoodHistory";
import { useMoodStorage } from "@/hooks/useMoodStorage";

// Force cache refresh

const Index = () => {
  const { entries } = useMoodStorage();

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedBackground mood="calm" />

      {/* Content */}
      <div className="relative z-10 min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12 animate-fade-in">
            <div className="mb-6 animate-bounce">
              <span className="text-6xl">🌈</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl animate-glow-pulse">
              My MoodVibe Journal
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in">
              Select your mood to explore personalized backgrounds, music, quotes, and activities
            </p>
          </header>

          {/* Main Mood Selection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Mood Selection */}
            <div>
              <MoodSelector navigateToMoodPage={true} />
            </div>

            {/* Right Column - History */}
            <div>
              <MoodHistory entries={entries} />
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center">
            <div className="glass-card rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">✨ How It Works ✨</h3>
              <p className="text-white/90 mb-4">
                Click on any mood emoji above to enter that mood's personalized space with:
              </p>
              <div className="grid grid-cols-2 gap-4 text-white/80">
                <div>🎵 Custom Music</div>
                <div>💭 Inspiring Quotes</div>
                <div>🎨 Animated Backgrounds</div>
                <div>🎯 Activity Suggestions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
