import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import troughtImageUrl from "../../assets/trought.svg"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: troughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackReceived, setFeedbackReceived] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackReceived(null)
  }
  
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      { feedbackSent ? (
        <FeedbackSucessStep 
          onFeedbackRestartRequested={handleRestartFeedback}
        /> 
      ) : (
        <>
          { !feedbackReceived ? 
            <FeedbackTypeStep  
              onFeedbackTypeChanged={setFeedbackReceived} 
            /> : 
            <FeedbackContentStep 
              feedbackReceived={feedbackReceived}
              onFeedbackRestartRequested={handleRestartFeedback} 
              onFeedbackSent={() => setFeedbackSent(true)}
            /> 
          }
        </>
      )}
    
      <footer className="text-xs text-neutral-400">
        Feito com ❤️ por <a className="underline underline-offset-2" href="https://linkedin.com/in/devgustavovasquez">Gustavo Vasquez</a>
      </footer>
    </div>
  )
}