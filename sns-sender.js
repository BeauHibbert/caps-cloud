'use strict';

// const { SNS } = require('aws-sdk');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2'});

// const message = process.argv[2];

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:502580155197:pickup';

const payload = {
  // Message: 'THIS IS A MESSAGE',
  TopicArn: topic,
  orderId: 1234,
  customer: "Jane Doe",
  vendorId: queueArn
}


sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
