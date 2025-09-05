'use server';

/**
 * @fileOverview Provides personalized project recommendations based on viewing history.
 *
 * - getPersonalizedRecommendations - A function to retrieve project recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  viewingHistory: z
    .string()
    .describe('The viewing history of the user as a JSON stringified array of project ids.'),
  userProfile: z
    .string()
    .optional()
    .describe('Optional user profile information to further personalize recommendations.'),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendedProjects: z
    .array(z.string())
    .describe('An array of recommended project ids based on viewing history.'),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedProjectRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedProjectRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert portfolio project recommender.

Based on the user's viewing history, recommend projects that align with their interests.

Viewing History: {{{viewingHistory}}}

{{#if userProfile}}
User Profile: {{{userProfile}}}
{{/if}}

Consider similar profiles and projects that they liked. Only return the project ids in a JSON array.
`,
});

const personalizedProjectRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedProjectRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
