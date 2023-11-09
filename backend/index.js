const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // for cross-origin requests if needed
const dotenv = require('dotenv');
const path = require('path');

dotenv.config()


const app = express();
app.use(cors()); // Use CORS middleware if necessary
app.use(express.json());


app.post('/api/send-email', async (req, res) => {
  const { fname, lname, email, phone, subject, message } = req.body;

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., Gmail, Outlook, etc.
    auth: {
      user: 'shaikjavidbasha528@gmail.com',
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: 'shaikjavidbasha528@gmail.com', // Sender's email
    to: 'shaikjavidbasha528@gmail.com', // Recipient's email
    subject: subject,
    text: `From: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };
  const confirmationMailOptions = {
    from: 'shaikjavidbasha528@gmail.com',
    to: email, // Viewer's email address
    subject: 'Message Received Confirmation',
    text: `Hello ${fname},\n\nThank you for your message. We have received it and will get back to you soon.\n\nBest regards,\nShaik Javid Basha`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    
    transporter.sendMail(confirmationMailOptions, (error, info) => {
          if (error) {
              console.log('Confirmation email error:', error);
          } else {
              console.log('Confirmation email sent:', info.response);
          }
      });
      
    
    res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});


// Deployment code
const __dirname1 = path.resolve()
if(process.env.NODE_ENV=='production'){
  app.use(express.static(path.join(__dirname1 , "/dist")));
  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname1, "dist", "index.html"))
  })
} else {
  app.get("/" , (req, res)=>{
    res.sendFile("API is running successfully");
  })
}

const port = 3001; // Your desired port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
