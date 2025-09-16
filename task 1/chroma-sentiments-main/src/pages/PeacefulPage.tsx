import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { MusicSuggestions } from "@/components/MusicSuggestions";
import { ArrowLeft, RefreshCw, Feather } from "lucide-react";

const PeacefulPage = () => {
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");

  const quotes = [
    "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means. - Ronald Reagan",
    "If you want to make peace with your enemy, you have to work with your enemy. Then he becomes your partner. - Nelson Mandela",
    "Peace comes from within. Do not seek it without. - Buddha",
    "When the power of love overcomes the love of power, the world will know peace. - Jimi Hendrix",
    "Better than a thousand hollow words, is one word that brings peace. - Buddha",
    "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be. - Wayne Dyer"
  ];

  const activities = [
    "🕊️ Sit in quiet meditation for 10 minutes",
    "🌸 Practice mindful breathing in nature",
    "📖 Read poetry or spiritual texts",
    "🌅 Watch a sunrise or sunset mindfully",
    "🎋 Create a peaceful space with candles",
    "🍃 Take a slow walk barefoot on grass",
    "💭 Practice loving-kindness meditation",
    "🎵 Listen to peaceful instrumental music",
    "✍️ Write gratitude in a beautiful journal",
    "🏞️ Visit a serene place like a garden or lake"
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
      <AnimatedBackground mood="peaceful" />
      
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
              <span className="text-6xl">🕊️</span>
              <h1 className="text-4xl font-bold text-white mt-2">Peaceful Mode</h1>
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
                    <Feather className="h-5 w-5 animate-pulse" />
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
                  <h3 className="text-xl font-bold text-white">🌸 Serene Activity</h3>
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

              {/* Inner Peace */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  🧘‍♀️ Inner Balance
                  <span className="animate-pulse">✨</span>
                </h3>
                <p className="text-white/90 mb-4">
                  You've found your center today. Let this peaceful energy flow through you, bringing harmony to your mind, body, and spirit. 
                </p>
                <div className="text-center p-3 bg-white/10 rounded-lg">
                  <p className="text-white/80 text-sm italic">
                    "In the stillness of your heart lies infinite wisdom."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <MusicSuggestions mood="peaceful" />
              
              {/* Mood Stats */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <h3 className="text-xl font-bold text-white mb-4">🕊️ Inner Peace</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Serenity Level</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-3 h-3 rounded-full bg-green-300 animate-pulse" style={{animationDelay: `${i * 0.3}s`}} />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Harmony</span>
                    <span className="text-white font-semibold animate-pulse">🌸 Balanced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Inner State</span>
                    <span className="text-white font-semibold animate-pulse">🕊️ Tranquil</span>
                  </div>
                </div>
              </div>

              {/* Peace Practices */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <h3 className="text-xl font-bold text-white mb-4">🌿 Peace Practices</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-500/20 rounded-lg p-3 text-center hover:bg-green-500/30 transition-all cursor-pointer animate-pulse">
                    <span className="text-2xl">🧘‍♀️</span>
                    <p className="text-white/90 text-sm mt-1">Meditate</p>
                  </div>
                  <div className="bg-teal-500/20 rounded-lg p-3 text-center hover:bg-teal-500/30 transition-all cursor-pointer animate-pulse" style={{animationDelay: '0.3s'}}>
                    <span className="text-2xl">🌱</span>
                    <p className="text-white/90 text-sm mt-1">Nature</p>
                  </div>
                  <div className="bg-emerald-500/20 rounded-lg p-3 text-center hover:bg-emerald-500/30 transition-all cursor-pointer animate-pulse" style={{animationDelay: '0.6s'}}>
                    <span className="text-2xl">📿</span>
                    <p className="text-white/90 text-sm mt-1">Gratitude</p>
                  </div>
                  <div className="bg-lime-500/20 rounded-lg p-3 text-center hover:bg-lime-500/30 transition-all cursor-pointer animate-pulse" style={{animationDelay: '0.9s'}}>
                    <span className="text-2xl">🌅</span>
                    <p className="text-white/90 text-sm mt-1">Sunrise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Peace Elements */}
          <div className="fixed top-28 left-6 animate-float">
            <div className="glass-card rounded-full p-4 bg-green-500/20">
              <span className="text-3xl">🕊️</span>
            </div>
          </div>
          <div className="fixed bottom-28 right-12 animate-float" style={{animationDelay: '2s'}}>
            <div className="glass-card rounded-full p-4 bg-teal-500/20">
              <span className="text-3xl">🌿</span>
            </div>
          </div>
          <div className="fixed top-1/2 right-4 animate-float" style={{animationDelay: '4s'}}>
            <div className="glass-card rounded-full p-3 bg-emerald-500/20">
              <span className="text-2xl">✨</span>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center mt-8">
            <Button 
              onClick={() => navigate('/')}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              🕊️ Explore Other Moods 🕊️
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeacefulPage;