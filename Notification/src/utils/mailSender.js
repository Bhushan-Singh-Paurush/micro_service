import { createTransport } from "nodemailer"


export const mailSender=async(subject,email,body)=>{
       const transport = createTransport({
        host:process.env.HOST,
        auth:{
            user:process.env.USER,
            pass:process.env.PASS  
        }
       })

       try {
        await transport.sendMail({
            to:email,
            from:"Motion Tech",
            subject:subject,
            html:body
        })
       } catch (error) {
         throw error;
       }
}