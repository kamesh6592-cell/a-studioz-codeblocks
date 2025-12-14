"use client"

import { CodeBlock as UICodeBlock } from "@/components/ui/code-block"

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <UICodeBlock 
      language={language} 
      elementKey={`${language}-${code.slice(0, 50)}`}
    >
      {code}
    </UICodeBlock>
  )
}