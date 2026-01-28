import { ChevronDown } from "lucide-react";
import { ChangeEvent } from "react";

interface SimpleSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
}

export function SimpleSelect({ label, value, onChange, options, placeholder = "Select...", disabled }: SimpleSelectProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full appearance-none bg-white border-2 border-black rounded-md py-2 pl-3 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#cce023] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-black">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
