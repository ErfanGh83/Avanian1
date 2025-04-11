import { formSchema } from "@/schema/SignUpSchema";
import { FormData } from "@/schema/SignUpSchema";

export const validateFormData = (data: FormData) => {
  const result = formSchema.safeParse(data);
  if (!result.success) {
    const errors: Record<string, string> = {};
    result.error.errors.forEach(err => {
      errors[err.path[0]] = err.message;
    });
    return errors;
  }
  return {};
};