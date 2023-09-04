import * as z from "zod";

const userSchema = z.object({
  id: z.number(),
  firstName: z.string().min(1, { message: "Missing firstname" }),
  lastName: z.string().min(1, { message: "Missing lastname" }),
  email: z.string().email({ message: "Invalid email" }),
  amount: z.number().min(1, { message: "Invalid amount, must be greater than or equal to 0" }),
});


// Array of users
export const usersSchema = z.array(userSchema);

// Type
export type User = z.infer<typeof userSchema>;

// Form validation
export const formSchema = userSchema
  .omit({ id: true })

export type Form = z.infer<typeof formSchema>;

export interface Donation {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
  time: string;
}

