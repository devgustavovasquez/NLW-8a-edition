import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6dde8ed1f76330",
    pass: "886fdf139be5a0"
  }
});

export class NodemailerMailerAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gustavo Vasquez <gustavovasquez2002@gmail.com>',
      subject,
      html: body
    })
  }
}