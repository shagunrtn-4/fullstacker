
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";

interface VoiceAssistantButtonProps {
  onClick: () => void;
}

export function VoiceAssistantButton({ onClick }: VoiceAssistantButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button 
            className="h-14 w-14 rounded-full fixed bottom-6 right-6 bg-sanicare-500 hover:bg-sanicare-600 shadow-lg animate-pulse-glow hover:scale-110 transition-all duration-300"
            onClick={onClick}
          >
            <span className="sr-only">Voice Assistant</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Voice Assistant</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
