import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { MusicSuggestions } from "@/components/MusicSuggestions";
import { ArrowLeft, RefreshCw, Heart } from "lucide-react";

const SadPage = () => {
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");

  const quotes = [
    "The wound is the place where the Light enters you. - Rumi",
    "Tears are words that need to be written. - Paulo Coelho",
    "It's okay to not be okay. Tomorrow is a new day.",
    "Even the darkest night will end and the sun will rise. - Victor Hugo",
    "Sometimes you need to sit lonely on the floor in a quiet room in order to hear your own voice. - Charlotte Eriksson",
    "You are braver than you believe, stronger than you seem, and more loved than you know."
  ];

  const activities = [
    "💧 Allow yourself to feel and cry if needed",
    "📝 Write in a journal about your feelings",
    "☕ Make yourself a warm, comforting drink",
    "🛋️ Wrap yourself in a soft blanket",
    "📞 Call someone you trust to talk",
    "🎵 Listen to gentle, soothing music",
    "🌧️ Watch the rain or sit by a window",
    "📚 Read something that brings comfort",
    "🎨 Express feelings through art or drawing",
    "🚶‍♀️ Take a slow, mindful walk"
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
      <AnimatedBackground mood="sad" />
      
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
              <span className="text-6xl">😢</span>
              <h1 className="text-4xl font-bold text-white mt-2">Gentle Space</h1>
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
                    <Heart className="h-5 w-5 animate-pulse" />
                    Gentle Comfort
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
                  <h3 className="text-xl font-bold text-white">💙 Healing Activity</h3>
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

              {/* Comfort Message */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  🤗 You Matter
                  <span className="animate-pulse">💜</span>
                </h3>
                <p className="text-white/90 mb-4">
                  It's okay to feel this way. Your feelings are valid and important. This moment doesn't define you - you're stronger than you know and tomorrow holds new possibilities.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <div className="bg-purple-500/20 rounded-full px-3 py-1 text-white text-sm">You're Loved</div>
                  <div className="bg-blue-500/20 rounded-full px-3 py-1 text-white text-sm">This Too Shall Pass</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <MusicSuggestions mood="sad" />
              
              {/* Mood Support */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <h3 className="text-xl font-bold text-white mb-4">💙 You're Not Alone</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Feelings are</span>
                    <span className="text-white font-semibold">💫 Temporary</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">You are</span>
                    <span className="text-white font-semibold">💜 Loved</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Tomorrow will be</span>
                    <span className="text-white font-semibold">🌅 Brighter</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white/10 rounded-lg animate-pulse">
                  <p className="text-white/80 text-sm text-center">
                    Remember: It's okay to not be okay. Take your time to heal. 💙
                  </p>
                </div>
              </div>

              {/* Comfort Actions */}
              <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <h3 className="text-xl font-bold text-white mb-4">🤗 Gentle Self-Care</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-500/20 rounded-lg p-3 text-center hover:bg-blue-500/30 transition-all cursor-pointer">
                    <span className="text-2xl">🫂</span>
                    <p className="text-white/90 text-sm mt-1">Self Hug</p>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-3 text-center hover:bg-purple-500/30 transition-all cursor-pointer">
                    <span className="text-2xl">☕</span>
                    <p className="text-white/90 text-sm mt-1">Warm Tea</p>
                  </div>
                  <div className="bg-indigo-500/20 rounded-lg p-3 text-center hover:bg-indigo-500/30 transition-all cursor-pointer">
                    <span className="text-2xl">📖</span>
                    <p className="text-white/90 text-sm mt-1">Read</p>
                  </div>
                  <div className="bg-pink-500/20 rounded-lg p-3 text-center hover:bg-pink-500/30 transition-all cursor-pointer">
                    <span className="text-2xl">🛁</span>
                    <p className="text-white/90 text-sm mt-1">Warm Bath</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Comfort Elements */}
          <div className="fixed top-32 left-12 animate-pulse">
            <div className="glass-card rounded-full p-3 bg-blue-500/20">
              <span className="text-2xl">💙</span>
            </div>
          </div>
          <div className="fixed bottom-40 right-16 animate-pulse" style={{animationDelay: '1s'}}>
            <div className="glass-card rounded-full p-3 bg-purple-500/20">
              <span className="text-2xl">🌙</span>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center mt-8">
            <Button 
              onClick={() => navigate('/')}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              💙 Explore Other Moods 💙
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SadPage;