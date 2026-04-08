import axiosInstance from "../api/axiosConfig";
import type { ContactFormData, ContactResponse } from "../types/contact.types";

export async function sendContactMessage(
  payload: ContactFormData,
): Promise<ContactResponse> {
  const response = await axiosInstance.post<ContactResponse>(
    "/contact",
    payload,
  );
  return response.data;
}
