export default{
    host: process.env.MAIL_host,
    port: process.env.MAIL_port,
    auth: {
        user: process.env.MAIL_user,
        pass: process.env.MAIL_pass
    }
}