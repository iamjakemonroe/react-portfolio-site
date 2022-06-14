import React, { useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Contact() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9cautdn",
        "template_09jky78",
        refForm.current,
        "_S0FkU5LCq9rTIaTP"
      )
      .then(
        () => {
          console.log("Message sent");
          handleClick();
          window.location.reload(false);
        },
        (error) => {
          handleWarning();
          console.log("Message not sent", error.text);
        }
      );
  };
  //
  const [open, setOpen] = React.useState(false);
  const [failedAlert, setFailedAlert] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleWarning = () => {
    setFailedAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setFailedAlert(false);
  };
  return (
    <>
      <div id="contact" className="app__container contact_cont">
        <div className="app__contact-container">
          <div className="contact_app__header-badge">
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.4 }}
            >
              <div className="contact_subject">
                <h2 className="contact__head-text">Contact Me</h2>
              </div>
            </motion.div>
            <div />
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.4 }}
              className="contact_tag-cmp app__flex"
            >
              <p className="p-text">
                I am interested in freelance opportunities, especially ambitious
                or large projects. However, if yoou have other requests or
                questions don't hesitate to contact me via email or below form
                either.
              </p>
            </motion.div>
          </div>
        </div>

        <form
          ref={refForm}
          onSubmit={sendEmail}
          className="app__form app__flex"
        >
          {/* alexsirguy@gmail.com */}
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.1 }}
            className="app__flex"
          >
            <input
              className="p-text"
              type="text"
              name="sender_name"
              placeholder="Your Name"
              required
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.1 }}
            className="app__flex"
          >
            <input
              className="p-text"
              type="email"
              name="sender_email"
              placeholder="Your Email"
              required
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.1 }}
            className="app__flex"
          >
            <input
              className="p-text"
              type="text"
              name="sender_subject"
              required
              placeholder="Subject"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.1 }}
            className="app__flex"
          >
            <textarea
              className="p-text app__flex"
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.1 }}
            className="app__flex"
          >
            <button type="submit">Send Message</button>
          </motion.div>
        </form>
      </div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        {/* <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Message sent succesfully!
          </Alert>
        </Snackbar>

        <Snackbar
          open={failedAlert}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            severity="warning"
            sx={{ width: "100%" }}
            onClose={handleClose}
          >
            Failed to send message, check internet connection!
          </Alert>
        </Snackbar>
        {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
      </Stack>
    </>
  );
}

export default Contact;
