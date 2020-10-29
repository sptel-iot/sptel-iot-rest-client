var axios = require('axios');

//setInterval(function () {         //Uncomment this line, if you want to send data periodically

var date = new Date().toISOString();
//var fromDate = new Date(toDate.getTime() - 60 * 60 * 24 * 1000);


//Use your <device_ID> to send data to the platform
var sample_data = JSON.stringify(
{"message":"{\"device_id\":\"680cdeae8e7df5f8\",\"time\":\""+date+"\",\"current\":\"0.9A\",\"voltage\":\"230 V\",\"power\":\"200 Watts\"}"});


var config = {
  method: 'post',
  url: 'https://dlc-api-tenant-<YOUR-INSTANCE-ID>.iot.sptel.com.sg/v1/device_logs',
  headers: { 
    'Authorization': 'Bearer <YOUR-API-TOKEN>', //use the API token available in your IoT portal 
    'Content-Type': 'application/json'
  },  
  data: sample_data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify("REST API execution is successful"));
})
.catch(function (error) {
  console.log(error);
});

//}, 5000);  // Send data every 5 seconds
