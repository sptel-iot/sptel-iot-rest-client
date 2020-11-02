# sptel-iot-rest-client
A Simple REST API client based on Node JS to send data to SPTel IoT Platform

*Install NodeJS in your machine and follow the below steps*


Clone the github repository and change to the project directory

```
git clone https://github.com/sptel-iot/sptel-iot-rest-client

cd sptel-iot-rest-client
```

Then install the dependencies using below command
```
npm install
```
Inside index.js file, change the device_id, API endpoint which you have received and add the bearer token which you can get from your IoT portal for api authentication. 

Once you have keyed in the the above details, run
```
node index.js
```

This will start sending data to the SPTel IoT Platform via REST API :smiley:	

