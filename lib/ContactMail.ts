"use server";

import React from "react";
import { sendmail } from "./mail";
import { generateEmailTemplate } from "./emailTemplate";

interface SendFuncProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const send: React.FC<SendFuncProps> = async ({
  name,
  email,
  phone,
  message,
}) => {
  const emailBody = generateEmailTemplate({
    name,
    email,
    phone,
    message,
  });

  try {
    await sendmail({
      to: "admin@agro-moz.com",
      name: "AgroMoz Agriculture",
      subject: "Enquiry From AgroMoz Agriculture",
      body: emailBody,
    });

    return true;
  } catch (error) {
    console.error("Error sending mail:", error);
    return false;
  }
};
