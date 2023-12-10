import { Form } from '@modular-forms/solid';
import { z } from 'zod';

export const formSchema = z.object({
  name: z.string(),
  address: z.string().optional(),
  email: z.string().email(),
  phone: z.string(),
  existingRoof: z.enum(['Shingle', 'Metal', 'Other']).optional(),
  newRoof: z.enum(['Shingle', 'Metal', 'Other']).optional(),
  desiredTimeline: z.string().optional(),
  message: z.string(),
});

export type FormType = z.infer<typeof formSchema>;

export default FormType;
