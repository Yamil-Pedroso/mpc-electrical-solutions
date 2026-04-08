export type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export type ContactResponse = {
  success: boolean;
  message: string;
  data: {
    id: string;
  };
};
