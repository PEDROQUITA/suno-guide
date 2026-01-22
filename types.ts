export interface PromptCardProps {
  title: string;
  promptText: string;
  tags: string[];
}

export interface GeneratorState {
  isLoading: boolean;
  generatedPrompt: string | null;
  error: string | null;
}
