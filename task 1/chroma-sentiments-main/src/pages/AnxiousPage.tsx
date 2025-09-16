import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { MusicSuggestions } from "@/components/MusicSuggestions";
import { ArrowLeft, RefreshCw, Shield } from "lucide-react";

const AnxiousPage = () => {
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");

  const quotes = [
    "You are not your anxiety. You have anxiety. You are not your depression. You have depression.",
    "Anxiety is the dizziness of freedom. - Søren Kierkegaard",
    "Nothing can bring you peace but yourself. - Ralph Waldo Emerson", 
    "You have been assigned this mountain to show others it can be moved.",
    "Worrying does not take away tomorrow's troubles, it takes away today's peace.",
    "Breathe in peace, breathe out stress. You've got this."
  ];

  const activities = [
    "🌬️ Practice deep breathing exercises (4-7-8 technique)",
    "🧘‍♀️ Try a 5-minute guided meditation",
    "📋 Write down your worries and release them",
    "🚶‍♀️ Take a gentle walk in fresh air",
    "🎵 Listen to calming music or nature sounds",
    "☕ Have a warm herbal tea (chamomile or lavender)",
    "🛁 Take a warm, relaxing bath",
    "📱 Use a mindfulness or anxiety app",
    "🧸 Hold something soft and comforting",
    "💪 Try progressive muscle relaxation"
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
      <AnimatedBackground mood="anxious" />
      
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
              <span className="text-6xl">😰</span>
              <h1 className="text-4xl font-bold text-white mt-2">Safe Space</h1>
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
                    <Shield className="h-5 w-5 animate-pulse" />
                    Calming Words
                  </h3>
                  <Button 
                    onClick={refreshQuote}
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <blockquote className="text-white/90 text-lg italic leading-relaxed">
                  "{currentQuote}"
                </blockquote>
              </div>

              {/* Activity Suggestion */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">🛡️ Grounding Activity</h3>
                  <Button 
                    onClick={refreshActivity}
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-white/90 text-lg">{currentActivity}</p>
              </div>

              {/* Breathing Exercise */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-xl font-bold text-white mb-4">🌬️ Quick Breathing Exercise</h3>
                <div className="text-white/90">
                  <p className="mb-3 font-medium">Try the 4-7-8 technique:</p>
                  <div className="space-y-2 text-sm bg-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center text-xs">1</span>
                      <span>Inhale for 4 counts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-xs">2</span>
                      <span>Hold for 7 counts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-teal-500/30 flex items-center justify-center text-xs">3</span>
                      <span>Exhale for 8 counts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-green-500/30 flex items-center justify-center text-xs">4</span>
                      <span>Repeat 3-4 times</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <MusicSuggestions mood="anxious" />
              
              {/* Anxiety Support */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <h3 className="text-xl font-bold text-white mb-4">🛡️ You Are Safe</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">This feeling is</span>
                    <span className="text-white font-semibold animate-pulse">⏰ Temporary</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">You are</span>
                    <span className="text-white font-semibold animate-pulse">💪 Stronger</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Right now you are</span>
                    <span className="text-white font-semibold animate-pulse">🛡️ Safe</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-white/80 text-sm text-center">
                    Ground yourself: Name 5 things you see, 4 you hear, 3 you touch, 2 you smell, 1 you taste.
                  </p>
                </div>
              </div>

              {/* Coping Tools */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <h3 className="text-xl font-bold text-white mb-4">🧘‍♀️ Anxiety Relief Tools</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-purple-500/20 rounded-lg p-3 text-center hover:bg-purple-500/30 transition-all cursor-pointer animate-pulse">
                    <span className="text-2xl">🫁</span>
                    <p className="text-white/90 text-sm mt-1">Deep Breathe</p>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 text-center hover:bg-blue-500/30 transition-all cursor-pointer animate-pulse" style={{animationDelay: '0.2s'}}>
                    <span className="text-2xl">🧘‍♀️</span>
                    <p className="text-white/90 text-sm mt-1">Meditate</p>
                  </div>
                  <div className="bg-teal-500/20 rounded-lg p-3 text-center hover:bg-teal-500/30 transition-all cursor-pointer animate-pulse" style={{animationDelay: '0.4s'}}>
                    <span className="text-2xl">🚶‍♀️</span>
                    <p className="text-white/90 text-sm mt-1">Walk</p>
                  </div>
                  <div className="bg-indigo-500/20 rounded-lg p-3 text-center hover:bg-indigo-500/30 transition-all cursor-pointer animate-pulse" style={{animationDelay: '0.6s'}}>
                    <span className="text-2xl">☕</span>
                    <p className="text-white/90 text-sm mt-1">Herbal Tea</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calming Elements */}
          <div className="fixed top-24 right-8 animate-pulse">
            <div className="glass-card rounded-full p-3 bg-purple-500/20">
              <span className="text-2xl">🛡️</span>
            </div>
          </div>
          <div className="fixed bottom-32 left-8 animate-pulse" style={{animationDelay: '1.5s'}}>
            <div className="glass-card rounded-full p-3 bg-blue-500/20">
              <span className="text-2xl">🌸</span>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center mt-8">
            <Button 
              onClick={() => navigate('/')}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              🛡️ Explore Other Moods 🛡️
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnxiousPage;