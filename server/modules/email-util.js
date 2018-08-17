const emailConfig = require('./email-config')();

const mailgun = require('mailgun-js')(emailConfig);

exports.sendEmail = (recipient, message, attachment) =>
  new Promise((resolve, reject) => {
    const data = {
      from: process.env.RECIPIENT,
      to: recipient,
      subject: message.subject,
      text: message.text
      // `Oh hey there!
      // Here's an inquiry from ChoppedAndServed.com:
      // ${message.name} 
      // ${message.companyName}
      // ${message.addressLine1}
      // ${message.addressLine2}
      // ${message.city}
      // ${message.state}
      // ${message.zipCode}
      // ${message.telephone}
      // ${message.email}
      // ${message.typeOfEvent}
      // ${message.desiredEventDate}
      // ${message.numberOfGuests}
      // ${message.budgetRange}
      // ${message.locationAddressLine1}
      // ${message.locationAddressLine2}
      // ${message.locationCity}
      // ${message.locationState}
      // ${message.locationZipCode}
      // ${message.dietaryRestrictions} 
      // ${message.additionalComments} 
      // `,
      ,
      inline: attachment,
    //   html: message.html,
    };

    mailgun.messages().send(data, (error) => {
      if (error) {
          console.log(message);
        return reject(error);
      }
      return resolve();
    });
  });
