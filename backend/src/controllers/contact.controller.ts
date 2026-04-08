import { Request, Response } from "express";
import { Contact } from "../models/contact.model";
import { sendContactEmail } from "../services/email.service";

export async function createContact(req: Request, res: Response) {
  const { fullName, email, phone, service, message } = req.body;

  if (!fullName || !email || !phone || !service || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  if (String(message).trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: "Message must be at least 10 characters long.",
    });
  }

  const contact = await Contact.create({
    fullName,
    email,
    phone,
    service,
    message,
  });

  await sendContactEmail({
    fullName,
    email,
    phone,
    service,
    message,
  });

  return res.status(201).json({
    success: true,
    message: "Message sent successfully.",
    data: {
      id: contact._id,
    },
  });
}
