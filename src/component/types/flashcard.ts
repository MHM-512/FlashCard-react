export type Question = {
  question: string;
  answer: string;
};

export type FlashCardProps = {
  questions: Question[];
  currentQuestion: number;
};

export type AnswerCartProps = {
  showAnswer: boolean;
  answer: string;
};