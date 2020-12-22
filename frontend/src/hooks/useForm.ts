import { ChangeEvent, useState } from "react";

export interface FormStateInterface {
  [key: string]: any;
}

export const useForm = (newFormState: FormStateInterface) => {
  const [formState, setFormState] = useState<FormStateInterface>(newFormState);

  const handleChangeInput = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const updateFormState = (newFormState: FormStateInterface) => {
    setFormState(newFormState);
  };

  return {
    formState,
    handleChangeInput,
    updateFormState,
  };
};
