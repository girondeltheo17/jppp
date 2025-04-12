"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/Card"
import { Button } from "@/components/Button"
import { VoteResults } from "@/components/VoteResults"

type Question = {
  id: number
  author: string
  role: string
  date: string
  question: string
  options: string[]
}

const data: Question[] = [
  {
    id: 1,
    author: "Julien Martel",
    role: "Journaliste",
    date: "2025-04-10",
    question: "Faut-il inscrire l'écologie comme priorité absolue dans la Constitution ?",
    options: ["Oui, clairement", "Non, c'est déjà implicite", "Seulement avec un référendum", "Je ne sais pas"],
  },
  {
    id: 2,
    author: "Claire Dubois",
    role: "Enseignante",
    date: "2025-04-09",
    question: "L'école devrait-elle redevenir un sujet national au lieu d'être gérée localement ?",
    options: [
      "Oui, pour plus d'égalité",
      "Non, la proximité est un atout",
      "Je suis partagé(e)",
      "Aucune des réponses",
    ],
  },
]

export function Feed() {
  const [selected, setSelected] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({})

  const handleVote = (questionId: number) => {
    if (selected[questionId] !== undefined) {
      setSubmitted({ ...submitted, [questionId]: true })
    }
  }

  return (
    <div className="space-y-6">
      {data.map((q) => (
        <Card key={q.id} className="shadow-md">
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">
              <strong>{q.author}</strong> – {q.role} – {q.date}
            </p>
            <h2 className="font-semibold mt-2 mb-4">{q.question}</h2>

            {!submitted[q.id] ? (
              <>
                <div className="space-y-2">
                  {q.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selected[q.id] === index ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelected({ ...selected, [q.id]: index })}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <Button onClick={() => handleVote(q.id)} disabled={selected[q.id] === undefined}>
                    Voter
                  </Button>
                </div>
              </>
            ) : (
              <VoteResults options={q.options} selectedIndex={selected[q.id]} />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
