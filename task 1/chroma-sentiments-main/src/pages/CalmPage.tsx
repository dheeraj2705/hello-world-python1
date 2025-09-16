import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { MusicSuggestions } from "@/components/MusicSuggestions";
import { ArrowLeft, RefreshCw, Leaf } from "lucide-react";

const CalmPage = () => {
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");

  const quotes = [
    "Peace comes from within. Do not seek it without. - Buddha",
    "In the midst of winter, I found there was, within me, an invincible summer. - Albert Camus",
    "Calm mind brings inner strength and self-confidence. - Dalai Lama",
    "The quieter you become, the more you are able to hear. - Rumi",
    "Nothing can bring you peace but yourself. - Ralph Waldo Emerson",
    "Serenity is not freedom from the storm, but peace amid the storm. - Unknown"
  ];

  const activities = [
    "🧘‍♀️ Practice deep breathing meditation",
    "🍃 Take a peaceful nature walk",
    "📖 Read a calming book",
    "🛁 Enjoy a relaxing warm bath",
    "🌸 Practice gentle yoga stretches",
    "☕ Sip herbal tea mindfully",
    "🎵 Listen to soft ambient music",
    "✍️ Write in a gratitude journal",
    "🕯️ Light candles and relax",
    "🌅 Watch a sunset or sunrise"
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
      <AnimatedBackground mood="calm" />
      
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
              <span className="text-6xl animate-pulse">😌</span>
              <h1 className="text-4xl font-bold text-white mt-2">Calm Mode</h1>
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
                    <Leaf className="h-5 w-5 animate-pulse" />
                    Peaceful Wisdom
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
                  <h3 className="text-xl font-bold text-white">🧘‍♀️ Relaxing Activity</h3>
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

              {/* Mindfulness Tip */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  🧘 Mindfulness Moment
                </h3>
                <p className="text-white/90">
                  Take three deep breaths with me: Breathe in slowly... hold for 4 seconds... and release. Feel your shoulders relax and let go of any tension you're holding.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <MusicSuggestions mood="calm" />
              
              {/* Mood Stats */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <h3 className="text-xl font-bold text-white mb-4">🍃 Calm Essence</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Tranquility Level</span>
                    <div className="flex gap-1">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-3 h-3 rounded-full bg-blue-300 animate-pulse" style={{animationDelay: `${i * 0.3}s`}} />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Stress Level</span>
                    <span className="text-white font-semibold">🌊 Flowing Away</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Mindfulness</span>
                    <span className="text-white font-semibold">🧘‍♀️ Present</span>
                  </div>
                </div>
              </div>

              {/* Breathing Exercise */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <h3 className="text-xl font-bold text-white mb-4">🌬️ Breathing Exercise</h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all animate-pulse">
                    <span className="text-3xl block mb-2">🫁</span>
                    <p className="text-white/90 text-sm">Inhale<br/>4 counts</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all animate-pulse" style={{animationDelay: '0.5s'}}>
                    <span className="text-3xl block mb-2">⏸️</span>
                    <p className="text-white/90 text-sm">Hold<br/>7 counts</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all animate-pulse" style={{animationDelay: '1s'}}>
                    <span className="text-3xl block mb-2">🌬️</span>
                    <p className="text-white/90 text-sm">Exhale<br/>8 counts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="fixed top-1/4 left-8 animate-float">
            <div className="glass-card rounded-full p-3 animate-pulse">
              <span className="text-2xl">💙</span>
            </div>
          </div>
          <div className="fixed top-1/3 right-12 animate-float" style={{animationDelay: '2s'}}>
            <div className="glass-card rounded-full p-3 animate-pulse">
              <span className="text-2xl">🕊️</span>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center mt-8">
            <Button 
              onClick={() => navigate('/')}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              🌸 Explore Other Moods 🌸
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalmPage;