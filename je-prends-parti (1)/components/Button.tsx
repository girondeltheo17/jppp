"use client"

import type React from "react"

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "default" | "outline"
  className?: string
  disabled?: boolean
}

export function Button({ children, onClick, variant = "default", className = "", disabled = false }: ButtonProps) {
  const base = "rounded-lg px-4 py-2 text-sm font-medium transition-all"
  const variants = {
    default: "bg-[#2c7a7b] text-white hover:bg-[#285e61] disabled:bg-gray-400",
    outline:
      "border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-400",
  }
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`} disabled={disabled}>
      {children}
    </button>
  )
}
