import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface NewsletterData {
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as NewsletterData;
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "L'adresse email est requise" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user || "no-reply@example.com";
    const to = process.env.CONTACT_EMAIL || user || "";

    if (!user || !pass || !to) {
      return NextResponse.json(
        { error: "Service de newsletter non configuré sur le serveur" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    // Send notification to admin
    const subject = `Nouvelle inscription newsletter - ${email}`;
    const brand = "#095797";
    const cta = "#9ac322";
    const muted = "#6b7280";

    const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nouvelle inscription newsletter</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; background-color: #f8f9fa; }
        .container { max-width: 600px; margin: 20px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, ${brand}, #0a6db0); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { font-size: 24px; font-weight: 600; margin-bottom: 8px; }
        .header p { opacity: 0.9; font-size: 16px; }
        .content { padding: 30px; }
        .info-item { background: #f8f9fa; border-left: 4px solid ${cta}; padding: 15px 20px; margin: 15px 0; border-radius: 8px; }
        .info-item strong { color: ${brand}; display: block; margin-bottom: 5px; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef; }
        .footer strong { color: ${brand}; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 Nouvelle inscription newsletter</h1>
            <p>Un nouveau contact s'est inscrit à votre newsletter</p>
        </div>
        <div class="content">
            <div class="info-item">
                <strong>Adresse email :</strong>
                <a href="mailto:${email}" style="color: ${brand}; text-decoration: none;">${email}</a>
            </div>
            <div class="info-item">
                <strong>Date d'inscription :</strong>
                ${new Date().toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
            </div>
            <div class="info-item">
                <strong>Actions suggérées :</strong>
                <ul style="margin-top: 8px; padding-left: 20px;">
                    <li>Ajouter cette adresse à votre liste de diffusion</li>
                    <li>Envoyer un email de bienvenue si configuré</li>
                    <li>Vérifier la validité de l'email si nécessaire</li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <div><strong>Orion Conseil</strong></div>
            <div style="opacity:0.8; margin-top:4px;">Cet email a été généré automatiquement depuis le site web.</div>
        </div>
    </div>
</body>
</html>`;

    const text = `Nouvelle inscription newsletter
==============================

INFORMATIONS:
• Email: ${email}
• Date: ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}

ACTIONS À EFFECTUER:
• Ajouter cette adresse à votre liste de diffusion
• Envoyer un email de bienvenue
• Vérifier la validité de l'email si nécessaire

Email: ${email}
`;

    await transporter.sendMail({
      from,
      to,
      subject,
      html,
      text,
      replyTo: email,
    });

    return NextResponse.json(
      { message: "Inscription réussie !" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing newsletter subscription:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}

