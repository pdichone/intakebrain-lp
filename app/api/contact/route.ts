import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log the submission
    console.log("New demo request:", {
      name: data.name,
      email: data.email,
      firmName: data.firmName,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "IntakeBrain <noreply@intakebrain.com>",
      to: "paulo@intakebrain.com",
      subject: `New Demo Request from ${data.firmName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0C1B33; border-bottom: 2px solid #C8A14B; padding-bottom: 10px;">
            New Demo Request
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 120px;"><strong>Name:</strong></td>
              <td style="padding: 10px 0; color: #0C1B33;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; color: #0C1B33;">
                <a href="mailto:${data.email}" style="color: #C8A14B;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666;"><strong>Firm:</strong></td>
              <td style="padding: 10px 0; color: #0C1B33;">${data.firmName}</td>
            </tr>
            ${data.message ? `
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;"><strong>Message:</strong></td>
              <td style="padding: 10px 0; color: #0C1B33;">${data.message}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
            Submitted on ${new Date().toLocaleString('en-US', {
              dateStyle: 'full',
              timeStyle: 'short'
            })}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Demo request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
