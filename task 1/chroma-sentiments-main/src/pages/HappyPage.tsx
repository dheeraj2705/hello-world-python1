import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { MusicSuggestions } from "@/components/MusicSuggestions";
import { ArrowLeft, RefreshCw, Sparkles } from "lucide-react";

const HappyPage = () => {
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");

  const quotes = [
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "The purpose of our lives is to be happy. - Dalai Lama", 
    "Happiness is when what you think, what you say, and what you do are in harmony. - Mahatma Gandhi",
    "Be happy for this moment. This moment is your life. - Omar Khayyam",
    "The only thing that will make you happy is being happy with who you are. - Goldie Hawn",
    "Happiness is not by chance, but by choice. - Jim Rohn"
  ];

  const activities = [
    "🎵 Dance to your favorite upbeat songs",
    "🌞 Take a walk in the sunshine",
    "😄 Call a friend and share a laugh",
    "🎨 Try a creative art project",
    "🏃‍♀️ Go for an energizing workout",
    "🌸 Spend time in nature or a park",
    "📚 Read something inspiring",
    "🍰 Bake something delicious",
    "🎮 Play a fun game",
    "📸 Capture beautiful moments with photos"
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
      <AnimatedBackground mood="happy" />
      
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
              <span className="text-6xl animate-bounce">😊</span>
              <h1 className="text-4xl font-bold text-white mt-2">Happy Mode</h1>
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
                    <Sparkles className="h-5 w-5 animate-spin" />
                    Daily Inspiration
                  </h3>
                  <Button 
                    onClick={refreshQuote}
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20 animate-bounce"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <blockquote className="text-white/90 text-lg italic leading-relaxed animate-pulse">
                  "{currentQuote}"
                </blockquote>
              </div>

              {/* Activity Suggestion */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">🎯 Activity Suggestion</h3>
                  <Button 
                    onClick={refreshActivity}
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20 animate-bounce"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-white/90 text-lg">{currentActivity}</p>
              </div>

              {/* Fun Fact */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  🌟 Happy Fact
                  <span className="animate-pulse">✨</span>
                </h3>
                <p className="text-white/90">
                  Did you know? Smiling releases endorphins, dopamine, and serotonin - your body's natural "feel good" chemicals! Even fake smiling can trick your brain into feeling happier.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <MusicSuggestions mood="happy" />
              
              {/* Mood Stats */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <h3 className="text-xl font-bold text-white mb-4">✨ Happy Vibes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Energy Level</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Positivity</span>
                    <span className="text-white font-semibold animate-bounce">💯 Amazing!</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Recommended Duration</span>
                    <span className="text-white font-semibold">Enjoy the moment!</span>
                  </div>
                </div>
              </div>

              {/* Interactive Elements */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <h3 className="text-xl font-bold text-white mb-4">🎉 Happiness Boosters</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-all cursor-pointer animate-bounce" style={{animationDelay: '1s'}}>
                    <span className="text-2xl">😄</span>
                    <p className="text-white/90 text-sm mt-1">Big Smile</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-all cursor-pointer animate-bounce" style={{animationDelay: '1.2s'}}>
                    <span className="text-2xl">🎵</span>
                    <p className="text-white/90 text-sm mt-1">Sing Along</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-all cursor-pointer animate-bounce" style={{animationDelay: '1.4s'}}>
                    <span className="text-2xl">💃</span>
                    <p className="text-white/90 text-sm mt-1">Dance</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-all cursor-pointer animate-bounce" style={{animationDelay: '1.6s'}}>
                    <span className="text-2xl">🤗</span>
                    <p className="text-white/90 text-sm mt-1">Hug Someone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Action Elements */}
          <div className="fixed bottom-8 right-8 space-y-4">
            <div className="glass-card rounded-full p-4 animate-bounce cursor-pointer hover:scale-110 transition-transform">
              <span className="text-2xl">🎈</span>
            </div>
            <div className="glass-card rounded-full p-4 animate-pulse cursor-pointer hover:scale-110 transition-transform">
              <span className="text-2xl">⭐</span>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center mt-8">
            <Button 
              onClick={() => navigate('/')}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              ✨ Explore Other Moods ✨
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyPage;