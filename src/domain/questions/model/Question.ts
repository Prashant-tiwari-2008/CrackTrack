import { Answer } from "./Answer";

/**
 * Describes the structure of question's objects
 */
export interface Question {
    id: string;
    languageId: string;
    title: string;
    description: string;
    votes: number;
    date: Date;
    creatorId: string;
    answer: Answer[];
}

