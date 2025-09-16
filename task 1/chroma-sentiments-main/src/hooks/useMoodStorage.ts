import { useState, useEffect } from "react";
import { Mood } from "@/components/MoodSelector";

interface MoodEntry {
  date: string;
  mood: Mood;
  intensity: number;
}

export const useMoodStorage = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([]);

  // Load entries from localStorage on mount
  useEffect(() => {
    try {
      const savedEntries = localStorage.getItem("moodEntries");
      if (savedEntries) {
        setEntries(JSON.parse(savedEntries));
      }
    } catch (error) {
      console.error("Failed to load mood entries:", error);
    }
  }, []);

  // Save entries to localStorage whenever entries change
  useEffect(() => {
    try {
      localStorage.setItem("moodEntries", JSON.stringify(entries));
    } catch (error) {
      console.error("Failed to save mood entries:", error);
    }
  }, [entries]);

  const addEntry = (mood: Mood, intensity: number) => {
    const newEntry: MoodEntry = {
      date: new Date().toISOString(),
      mood,
      intensity,
    };

    setEntries(prev => {
      // Check if there's already an entry for today
      const today = new Date().toDateString();
      const existingEntryIndex = prev.findIndex(entry => 
        new Date(entry.date).toDateString() === today
      );

      if (existingEntryIndex >= 0) {
        // Update existing entry for today
        const updated = [...prev];
        updated[existingEntryIndex] = newEntry;
        return updated;
      } else {
        // Add new entry
        return [...prev, newEntry];
      }
    });
  };

  const getTodayEntry = (): MoodEntry | null => {
    const today = new Date().toDateString();
    return entries.find(entry => 
      new Date(entry.date).toDateString() === today
    ) || null;
  };

  return {
    entries,
    addEntry,
    getTodayEntry,
  };
};