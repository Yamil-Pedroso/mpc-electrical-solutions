import { useState } from "react";
import axios from "axios";
import { sendContactMessage } from "../../services/contact.service";
import type { ContactFormData } from "../../types/contact.types";

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const submitContactForm = async (formData: ContactFormData) => {
    try {
      setIsSubmitting(true);
      setIsSubmitted(false);
      setSubmitError("");

      const result = await sendContactMessage(formData);

      setIsSubmitted(true);
      return result;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setSubmitError(
          error.response?.data?.message || "Failed to send message.",
        );
      } else {
        setSubmitError("Something went wrong.");
      }

      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    isSubmitted,
    submitError,
    submitContactForm,
    setIsSubmitted,
    setSubmitError,
  };
}
