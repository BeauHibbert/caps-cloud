'use strict';

const { Consumer } = require('sqs-consumer');
const { Producer } = require('sqs-producer');

const producer = Producer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/502580155197/packages.fifo',
  region: 'us-wes-2',
});

async function confirmDelivery(message) {

  const payload = {
    message,
  }

  let response = await producer.send(payload);
  console.log(response);
}

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/502580155197/vendor',
  handleMessage: confirmDelivery
    // let body = JSON.parse(message.Body)
    // console.log(body.Message);
});

app.start();