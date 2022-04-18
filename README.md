# caps-cloud

Using only AWS Services: SQS, SNS, Lambda, create a cloud version of the CAPS system

## Feature Tasks & Requirements

- SNS Topic: pickup which will receive all pickup requests from vendors
- SQS Queue (FIFO): packages which will contain all delivery requests from vendors, in order of receipt.
  - Subscribe this queue to the pickup topic so all pickups are ordered
- SQS Queue (Standard) for each vendor (named for the vendor) which will contain all delivery notifications from the drivers

- Vendors will post “pickup” messages containing delivery information into the SNS pickup topic
  - { orderId: 1234, customer: "Jane Doe", vendorId: queueArn}
  - Note the queueArn – this refers to the AWS ‘arn’ of the vendor’s specific delivered queue
- Pickup requests should be moved into a FIFO queue called packages for the drivers automatically
  - (Make the packages queue a subscriber to the pickup topic)
- Vendors should separately subscribe to their personal SQS queue and periodically poll the queue to see delivery notifications

- Drivers will poll the SQS packages queue and retrieve only the next delivery order (message)
- After a time (e.g. 5 seconds), drivers will post a message to the Vendor specific SQS Queue using the queueArn specified in the order object.

### Issues I ran into

The app is not really formatted to the specifics of the lab, I tried to make the UML more like how the lab would look. I have the functionality of a FIFO and standard queue with an SNS Topic speaking to each other, but did not have time to implement the exact specifications of the lab. The fundamental concepts are there for the most part, but I will admit it is not a serverless remake of the cloud system.

<img width="1728" alt="lab 19" src="https://user-images.githubusercontent.com/91757275/163763646-5a1397a4-8495-46e9-a5d0-595cd45517c7.png">