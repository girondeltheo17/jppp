"use client"

type VoteResultsProps = {
  options: string[]
  selectedIndex: number
}

export function VoteResults({ options, selectedIndex }: VoteResultsProps) {
  // Simulate vote results with random percentages
  const generateResults = () => {
    // Create random percentages that sum to 100
    let remaining = 100
    const results = options.map((_, i) => {
      // Make the selected option have a higher percentage
      const isSelected = i === selectedIndex
      const max = isSelected ? Math.min(remaining, 60) : Math.min(remaining, 30)
      const min = isSelected ? Math.max(20, remaining / options.length) : 5

      // Generate a random percentage between min and max
      const percentage = i === options.length - 1 ? remaining : Math.floor(Math.random() * (max - min) + min)

      remaining -= percentage
      return percentage
    })

    return results
  }

  const results = generateResults()

  return (
    <div className="mt-4 space-y-3">
      <h3 className="font-medium text-sm text-gray-700">Résultats du sondage</h3>
      {options.map((option, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className={index === selectedIndex ? "font-bold" : ""}>
              {option} {index === selectedIndex && "✓"}
            </span>
            <span>{results[index]}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${index === selectedIndex ? "bg-[#2c7a7b]" : "bg-gray-400"}`}
              style={{ width: `${results[index]}%` }}
            ></div>
          </div>
        </div>
      ))}
      <p className="text-xs text-gray-500 mt-2">Basé sur 128 votes</p>
    </div>
  )
}
