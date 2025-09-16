import { cn } from "@/lib/utils";

interface IntensitySliderProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

export const IntensitySlider = ({ value, onChange, className }: IntensitySliderProps) => {
  return (
    <div className={cn("glass-card rounded-2xl p-6", className)}>
      <h3 className="text-xl font-semibold text-white mb-4 text-center">
        Intensity Level
      </h3>
      
      <div className="space-y-4">
        <input
          type="range"
          min="1"
          max="5"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) ${(value - 1) * 25}%, rgba(255,255,255,0.2) ${(value - 1) * 25}%, rgba(255,255,255,0.2) 100%)`
          }}
        />
        
        <div className="flex justify-between text-base font-medium text-white">
          <span>Mild</span>
          <span>Moderate</span>
          <span>Strong</span>
        </div>
        
        <div className="flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                level <= value
                  ? "bg-white/80 scale-110"
                  : "bg-white/30"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};