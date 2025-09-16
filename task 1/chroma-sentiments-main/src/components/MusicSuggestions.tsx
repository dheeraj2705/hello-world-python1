import { useState } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause, ExternalLink } from "lucide-react";

interface Song {
  title: string;
  artist: string;
  spotifyUrl: string;
  youtubeUrl: string;
  emoji: string;
}

const moodMusic: Record<string, Song[]> = {
  happy: [
    { title: "Happy", artist: "Pharrell Williams", spotifyUrl: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH", youtubeUrl: "https://www.youtube.com/watch?v=ZbZSe6N_BXs", emoji: "🎵" },
    { title: "Good as Hell", artist: "Lizzo", spotifyUrl: "https://open.spotify.com/track/5sICkBXVmaCQk5aISGR3x1", youtubeUrl: "https://www.youtube.com/watch?v=SmbmeOgWsqE", emoji: "✨" },
    { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", spotifyUrl: "https://open.spotify.com/track/20I6sIOMTCkB6w7ryavxtO", youtubeUrl: "https://www.youtube.com/watch?v=ru0K8uYEZWw", emoji: "🕺" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", spotifyUrl: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS", youtubeUrl: "https://www.youtube.com/watch?v=OPf0YbXqDm0", emoji: "💃" },
  ],
  calm: [
    { title: "Weightless", artist: "Marconi Union", spotifyUrl: "https://open.spotify.com/track/5qNVVw8sJ0HtdKCaohwZHJ", youtubeUrl: "https://www.youtube.com/watch?v=UfcAVejslrU", emoji: "🌊" },
    { title: "Claire de Lune", artist: "Claude Debussy", spotifyUrl: "https://open.spotify.com/track/0FI72W13wLpBnHu6gvuMJR", youtubeUrl: "https://www.youtube.com/watch?v=CvFH_6DNRCY", emoji: "🌙" },
    { title: "Mad World", artist: "Gary Jules", spotifyUrl: "https://open.spotify.com/track/3JOVTQ5h4vyPXFw4QzZXU6", youtubeUrl: "https://www.youtube.com/watch?v=4N3N1MlvVc4", emoji: "🍃" },
    { title: "River", artist: "Joni Mitchell", spotifyUrl: "https://open.spotify.com/track/3BiJNIXT8yk3z9fiH5DYxj", youtubeUrl: "https://www.youtube.com/watch?v=3NH-ctddY9o", emoji: "🏞️" },
  ],
  energetic: [
    { title: "Thunder", artist: "Imagine Dragons", spotifyUrl: "https://open.spotify.com/track/1zB4vmk8tFRmM9UULNzbLB", youtubeUrl: "https://www.youtube.com/watch?v=fKopy74weus", emoji: "⚡" },
    { title: "Pump It", artist: "The Black Eyed Peas", spotifyUrl: "https://open.spotify.com/track/7pQ8e6fjWz2jZMf4GLE2hO", youtubeUrl: "https://www.youtube.com/watch?v=ZaI2IlHwmgQ", emoji: "🔥" },
    { title: "Eye of the Tiger", artist: "Survivor", spotifyUrl: "https://open.spotify.com/track/2KH16WveTQWT6KOG9Rg6e2", youtubeUrl: "https://www.youtube.com/watch?v=btPJPFnesV4", emoji: "🥊" },
    { title: "Stronger", artist: "Kelly Clarkson", spotifyUrl: "https://open.spotify.com/track/1SRflPFEO4s1bOyseAA1Wq", youtubeUrl: "https://www.youtube.com/watch?v=Xn676-fLq7I", emoji: "💪" },
  ],
  sad: [
    { title: "Someone Like You", artist: "Adele", spotifyUrl: "https://open.spotify.com/track/1qDrWA6lyx8cLECdZE7TV7", youtubeUrl: "https://www.youtube.com/watch?v=hLQl3WQQoQ0", emoji: "💧" },
    { title: "Hurt", artist: "Johnny Cash", spotifyUrl: "https://open.spotify.com/track/2ogGNJ4TeeM9MNh4Zr5U8N", youtubeUrl: "https://www.youtube.com/watch?v=8AHCfZTRGiI", emoji: "🖤" },
    { title: "Mad World", artist: "Tears for Fears", spotifyUrl: "https://open.spotify.com/track/7C5fgjlnrIlltzHnKPF93N", youtubeUrl: "https://www.youtube.com/watch?v=u1ZvPSpLxCg", emoji: "🌧️" },
    { title: "Black", artist: "Pearl Jam", spotifyUrl: "https://open.spotify.com/track/5Kskr9LcNYa0tpt5f0ZEJx", youtubeUrl: "https://www.youtube.com/watch?v=5ChbxMVgGV4", emoji: "🌫️" },
  ],
  anxious: [
    { title: "Breathe Me", artist: "Sia", spotifyUrl: "https://open.spotify.com/track/6S0HWFUdF4x1nG1T7MqHWs", youtubeUrl: "https://www.youtube.com/watch?v=ghPcYqn0p4Y", emoji: "🫁" },
    { title: "Heavy", artist: "Linkin Park ft. Kiiara", spotifyUrl: "https://open.spotify.com/track/4rDbSzPKl3SDNX4iZc8P2r", youtubeUrl: "https://www.youtube.com/watch?v=5dmQ3QWpy1Q", emoji: "⚖️" },
    { title: "Anxiety", artist: "Julia Michaels ft. Selena Gomez", spotifyUrl: "https://open.spotify.com/track/4QHKIEHmkVBtWKGP9WszC5", youtubeUrl: "https://www.youtube.com/watch?v=KvPK73Jzwz4", emoji: "🌪️" },
    { title: "The Sound of Silence", artist: "Disturbed", spotifyUrl: "https://open.spotify.com/track/1PrIQ70kJU2PqBzUYJpkPQ", youtubeUrl: "https://www.youtube.com/watch?v=u9Dg-g7t2l4", emoji: "🔇" },
  ],
  peaceful: [
    { title: "Aqueous Transmission", artist: "Incubus", spotifyUrl: "https://open.spotify.com/track/2jlXxJWZ4Q1lLy5k8gxzg4", youtubeUrl: "https://www.youtube.com/watch?v=eQK7KSTQfaw", emoji: "🌸" },
    { title: "Porcelain", artist: "Moby", spotifyUrl: "https://open.spotify.com/track/7fBMAhz2ZgBPShDhJaQpGV", youtubeUrl: "https://www.youtube.com/watch?v=QhZnEagfjTQ", emoji: "🕊️" },
    { title: "Only Time", artist: "Enya", spotifyUrl: "https://open.spotify.com/track/6DajJHNaUDB7nOqnvOQ8w9", youtubeUrl: "https://www.youtube.com/watch?v=7wfYIMyS_dI", emoji: "⏳" },
    { title: "Svefn-g-englar", artist: "Sigur Rós", spotifyUrl: "https://open.spotify.com/track/1nzQx2YTXgdqo2P3fCbdnC", youtubeUrl: "https://www.youtube.com/watch?v=8LeQN249Jqw", emoji: "❄️" },
  ],
};

interface MusicSuggestionsProps {
  mood: string;
  className?: string;
}

export const MusicSuggestions = ({ mood, className }: MusicSuggestionsProps) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  const songs = moodMusic[mood] || [];

  const handlePlayClick = (url: string, platform: 'spotify' | 'youtube') => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!songs.length) return null;

  return (
    <div className={cn("glass-card rounded-2xl p-6", className)}>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🎶</span>
        <h3 className="text-2xl font-bold text-white">
          Music for your {mood} mood
        </h3>
      </div>

      <div className="space-y-3">
        {songs.map((song, index) => (
          <div
            key={index}
            className={cn(
              "music-card group relative overflow-hidden rounded-xl p-4 transition-all duration-300 cursor-pointer",
              "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20",
              expandedCard === index && "bg-white/15 border-white/30"
            )}
            onClick={() => setExpandedCard(expandedCard === index ? null : index)}
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl">{song.emoji}</div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-lg truncate">
                  {song.title}
                </h4>
                <p className="text-white/70 text-sm truncate">
                  {song.artist}
                </p>
              </div>

              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayClick(song.spotifyUrl, 'spotify');
                  }}
                  className="music-play-btn bg-green-600 hover:bg-green-500"
                  title="Play on Spotify"
                >
                  <Play className="w-4 h-4" />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayClick(song.youtubeUrl, 'youtube');
                  }}
                  className="music-play-btn bg-red-600 hover:bg-red-500"
                  title="Play on YouTube"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedCard === index && (
              <div className="mt-4 pt-4 border-t border-white/20 animate-pulse-glow">
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayClick(song.spotifyUrl, 'spotify');
                    }}
                    className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Play on Spotify
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayClick(song.youtubeUrl, 'youtube');
                    }}
                    className="flex-1 bg-red-600 hover:bg-red-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Play on YouTube
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-white/60 text-sm">
          Click any song to expand, then choose your preferred platform
        </p>
      </div>
    </div>
  );
};