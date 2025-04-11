import { FormField, formSchema } from "@/schema/SignUpSchema";
import { FormData } from "@/schema/SignUpSchema";

export const validateField = (
    field: FormField,
    value: FormData[FormField]
  ): string | null => {
    const result = formSchema.pick({ [field]: true }).safeParse({ [field]: value });
    return result.success ? null : result.error.errors[0].message;
  };