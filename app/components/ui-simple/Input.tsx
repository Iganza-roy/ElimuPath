import { ChangeEvent } from "react";

interface SimpleInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export function SimpleInput({ label, value, onChange, placeholder, type = "text" }: SimpleInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex h-10 w-full rounded-md border-2 border-black bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cce023] disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}
