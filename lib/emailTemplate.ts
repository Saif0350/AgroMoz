export const generateEmailTemplate = ({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  return `
        <div style="font-family: Arial, sans-serif; padding: 30px; background-color: #000000; color: #ffffff;">
          <div style="padding-bottom: 0px;">
          <h2 style="color: #0a7d21;">AgroMoz Agriculture</h2>
          </div>
          <h2 style="color: #ee7737;">New Enquiry Details</h2>
          <p style="text-transform: capitalize;"><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ffffff;">${email}</a></p>
          <p><strong>Message:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr style="border: 1px solid #555555;" />
          <p style="color: #999999; font-size: 12px;">
            This email was generated from the  AgroMoz Agriculture. Please contact us if you have any questions.
          </p>
        </div>
      `;
};
