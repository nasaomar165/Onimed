import * as React from "react"
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center border border-input rounded-md bg-[#f9fafc] dark:bg-[#1e293b] px-3 py-2">
        <Upload className="mr-2 text-[#1e293b] dark:text-white" /> {/* Upload icon */}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition duration-200 transform hover:scale-105 hover:shadow-lg",
          className
        )}
        ref={ref}
        {...props}
      />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
