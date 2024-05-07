
const nodemailer = require('nodemailer');
class Mail {
    constructor(remitente, pass, destino, asunto, cuerpo) {
        this.remitente = remitente;
        this.pass = pass;
        this.destino = destino;
        this.asunto = asunto;
        this.cuerpo = cuerpo;
    }
    confi() {
        const transporter = {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: this.remitente,
                pass: this.pass
            }
        };
        return transporter;
    }

    data() {
        const mensaje = {
            from: this.remitente,
            to: this.destino,
            subject: this.asunto,
            text: this.cuerpo
        }
        return mensaje;
    };

}
enviarMail = async()=> {
    let remitente = "emailUser"// Your email address
    let password =  "secret key"
    const mail = new Mail(remitente, password, 'destino', 'asunto', "mensaje");
    //los valores asi a manera de ejemplo

    const transporter = nodemailer.createTransport(mail.confi())

    const info = await transporter.sendMail(mail.data())
    //console.log('Email sent: ' + info.response);
    console.log(info)
}

enviarMail()
.catch(err=> console.log(err))





