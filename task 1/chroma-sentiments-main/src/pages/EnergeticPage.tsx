import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { MusicSuggestions } from "@/components/MusicSuggestions";
import { ArrowLeft, RefreshCw, Zap } from "lucide-react";

const EnergeticPage = () => {
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");

  const quotes = [
    "Energy and persistence conquer all things. - Benjamin Franklin",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones."
  ];

  const activities = [
    "🏃‍♀️ Go for an energizing run or jog",
    "💪 Try a high-intensity workout",
    "🏋️‍♀️ Hit the gym and lift weights", 
    "🎵 Create an upbeat playlist and dance",
    "🚴‍♀️ Go cycling or spinning",
    "🏸 Play an active sport",
    "🧗‍♀️ Try rock climbing or bouldering",
    "⚡ Do jumping jacks or burpees",
    "🏊‍♀️ Go swimming for cardio",
    "🥊 Try kickboxing or martial arts"
  ];

  useEffect(() => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setCurrentActivity(activities[Math.floor(Math.random() * activities.length)]);
  }, []);

  const refreshQuote = () => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const refreshActivity = () => {
    setCurrentActivity(activities[Math.floor(Math.random() * activities.length)]);
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground mood="energetic" />
      
      <div className="relative z-10 min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="flex items-center justify-between mb-8">
            <Button 
              onClick={() => navigate('/')}
              variant="ghost" 
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Moods
            </Button>
            <div className="text-center">
              <span className="text-6xl animate-bounce">⚡</span>
              <h1 className="text-4xl font-bold text-white mt-2">Energetic Mode</h1>
            </div>
            <div className="w-32"></div>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Quote Card */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Zap className="h-5 w-5 animate-bounce" />
                    Power Motivation
                  </h3>
                  <Button 
                    onClick={refreshQuote}
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20 animate-pulse"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <blockquote className="text-white/90 text-lg italic leading-relaxed font-bold">
                  "{currentQuote}"
                </blockquote>
              </div>

              {/* Activity Suggestion */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">💪 Power Activity</h3>
                  <Button 
                    onClick={refreshActivity}
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20 animate-bounce"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-white/90 text-lg font-medium">{currentActivity}</p>
              </div>

              {/* Energy Booster */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  ⚡ Energy Boost
                  <span className="animate-spin">🔥</span>
                </h3>
                <p className="text-white/90 mb-4">
                  You're unstoppable today! Channel this energy into something amazing. Your potential is limitless!
                </p>
                <div className="flex gap-2">
                  <div className="bg-orange-500/20 rounded-full px-3 py-1 text-white text-sm animate-pulse">High Energy</div>
                  <div className="bg-red-500/20 rounded-full px-3 py-1 text-white text-sm animate-pulse">Ready to Conquer</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <MusicSuggestions mood="energetic" />
              
              {/* Mood Stats */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <h3 className="text-xl font-bold text-white mb-4">⚡ Energy Levels</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Power Level</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-4 h-4 rounded-full bg-orange-400 animate-bounce" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Motivation</span>
                    <span className="text-white font-semibold animate-pulse">🔥 On Fire!</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Action Ready</span>
                    <span className="text-white font-semibold animate-bounce">💯 Let's Go!</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <h3 className="text-xl font-bold text-white mb-4">🚀 Quick Energy Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-500/20 rounded-lg p-3 text-center hover:bg-red-500/30 transition-all cursor-pointer animate-pulse">
                    <span className="text-2xl">💪</span>
                    <p className="text-white/90 text-sm mt-1">Workout</p>
                  </div>
                  <div className="bg-orange-500/20 rounded-lg p-3 text-center hover:bg-orange-500/30 transition-all cursor-pointer animate-pulse" style={{animationDelay: '0.2s'}}>
                    <span className="text-2xl">🏃‍♀️</span>
                    <p className="text-white/90 text-sm mt-1">Run</p>
                  </div>
                  <div className="bg-yellow-500/20 rounded-lg p-3 text-center hover:bg-yellow-500/30 transition-all cursor-pointer animate-pulse" style={{animationDelay: '0.4s'}}>
                    <span className="text-2xl">🎵</span>
                    <p className="text-white/90 text-sm mt-1">Dance</p>
                  </div>
                  <div className="bg-pink-500/20 rounded-lg p-3 text-center hover:bg-pink-500/30 transition-all cursor-pointer animate-pulse" style={{animationDelay: '0.6s'}}>
                    <span className="text-2xl">🎯</span>
                    <p className="text-white/90 text-sm mt-1">Focus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flying Energy Elements */}
          <div className="fixed top-20 left-16 animate-bounce">
            <div className="glass-card rounded-full p-4 bg-orange-500/20">
              <span className="text-3xl">⚡</span>
            </div>
          </div>
          <div className="fixed bottom-32 right-20 animate-spin" style={{animationDuration: '3s'}}>
            <div className="glass-card rounded-full p-4 bg-red-500/20">
              <span className="text-3xl">🔥</span>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center mt-8">
            <Button 
              onClick={() => navigate('/')}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              ⚡ Explore Other Moods ⚡
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergeticPage;