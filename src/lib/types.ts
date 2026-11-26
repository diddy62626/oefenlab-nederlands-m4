// Types voor het Oefenlab Nederlands M4 (periode 2)

export type QuestionBase = {
  id: string;
  prompt: string;
  explanation: string;
  hint?: string;
};

export type McqQuestion = QuestionBase & {
  type: "mcq";
  options: string[];
  correctIndex: number;
};

export type FillQuestion = QuestionBase & {
  type: "fill";
  accepted: string[];
  placeholder?: string;
};

export type OrderQuestion = QuestionBase & {
  type: "order";
  items: string[];
};

export type SortQuestion = QuestionBase & {
  type: "sort";
  buckets: string[];
  items: { text: string; bucket: number }[];
};

export type Question = McqQuestion | FillQuestion | OrderQuestion | SortQuestion;

export type Flashcard = {
  id: string;
  front: string;
  back: string;
  example?: string;
};

export type TheoryBlock = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ExerciseSet = {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
};

export type ExamSet = {
  id: string;
  title: string;
  description: string;
  minutes: number;
  questions: Question[];
};

export type ReadingText = {
  id: string;
  title: string;
  source: string;
  intro?: string;
  paragraphs: string[];
  questions: Question[];
};

export type ChecklistItem = {
  id: string;
  label: string;
  detail?: string;
};

export type DeadlineItem = {
  what: string;
  when: string;
};

export type Module = {
  id: string;
  title: string;
  short: string;
  subtitle: string;
  icon: string;
  accent: "amber" | "rose" | "violet" | "teal" | "emerald" | "orange";
  examInfo: string[];
  theory: TheoryBlock[];
  texts?: ReadingText[];
  sets: ExerciseSet[];
  exams?: ExamSet[];
  flashcards?: Flashcard[];
  checklist?: ChecklistItem[];
  deadlines?: DeadlineItem[];
  listeningText?: string;
};

export type CardStat = {
  box: number;
  due: number;
  correct: number;
  wrong: number;
  seen: number;
};
