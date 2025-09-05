"use server";

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, "Message cannot exceed 500 characters."),
});

type State = {
  success: boolean;
  message: string;
  errors?: z.ZodIssue[];
}

export async function submitContactForm(formData: FormData): Promise<State> {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your inputs.',
      errors: parsed.error.issues,
    };
  }

  // In a real application, you would integrate an email service here.
  // For example: await sendEmail(parsed.data);
  console.log('New contact form submission received:');
  console.log(parsed.data);

  return { 
    success: true, 
    message: 'Thank you for your message! I will get back to you soon.' 
  };
}
