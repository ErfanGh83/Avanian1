import { FormField, formSchema } from "@/schema/SignUpSchema";
import { FormData } from "@/schema/SignUpSchema";

export const validateField = (
  field: FormField,
  value: FormData[FormField]
): string | null => {
  const fieldObj = { [field]: true } as { [key in FormField]?: true };

  const result = formSchema.pick(fieldObj).safeParse({ [field]: value });
  return result.success ? null : result.error.errors[0].message;
};