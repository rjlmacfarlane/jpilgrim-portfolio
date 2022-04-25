import React, { useState } from 'react';
import emailjs, { init } from '@emailjs/browser';

init("RYKnb1m5OUC0l2M0_");;

const Contact = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [subject, setSubject] = useState('')
   const [message, setMessage] = useState('')

   const onNameChange = (event) => {
      setName(event.target.value)
      console.log("name changed to: ", name);
   }


   const onEmailChange = (event) => {
      setEmail(event.target.value)
      console.log("email: ", email,);

   }

   const onSubjectChange = (event) => {
      setSubject(event.target.value)
      console.log("subject: ", subject );

   }

   const onMsgChange = (event) => {
      setMessage(event.target.value)
      console.log("message: ", message );

   }

   function sendEmail(e) {
      e.preventDefault();

      const messageDetails = {
      name,
      email,
      subject,
      message
      }

      console.log("submit button clicked with these message details: ", messageDetails);
      emailjs.send('service_lvbxcir', 'template_wla54gs', messageDetails)
      .then((result) => {
            console.log(result);
            alert("Your message was sent, thank you!"); 
            resetForm()
      }, (error) => {
            console.log(error.text);
      });
   }

   const resetForm = () =>{
      setSubject('')
      setEmail('')
      setName('')
      setMessage('')
   }


    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">Let's talk. I'd love to hear from you.</p>

            </div>

         </div>

         <div className="row">
            <div className="eleven columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" value={name} size="35" id="contactName" name="contactName" onChange={(event) => onNameChange(event)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" value={email} size="35" id="contactEmail" name="contactEmail" onChange={(event) => onEmailChange(event)}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" size="35" id="contactSubject" name="contactSubject" value={subject} onChange={(event) => onSubjectChange(event)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" value={message} onChange={(event) => onMsgChange(event)}></textarea>
                  </div>

                  <div>
                     <button className="submitt" onClick={(e) => sendEmail(e)}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   {/* <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p> */}
				   </div>

              
            </aside>
      </div>
   </section>
    );
  }

export default Contact;