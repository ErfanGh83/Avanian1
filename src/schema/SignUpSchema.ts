import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .max(50, "نام نمی‌تواند بیشتر از 50 کاراکتر باشد"),
  phoneNumber: z.string()
    .regex(/^09[0-9]{9}$/, "شماره تلفن باید با 09 شروع شود و 11 رقم باشد"),
  age: z.number()
    .min(1, "سن باید حداقل 1 باشد")
    .max(120, "سن نمی‌تواند بیشتر از 120 باشد")
});

export type FormData = z.infer<typeof formSchema>;

export type FormField = keyof FormData;