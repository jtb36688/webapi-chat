const { UspsClient } = require("shipit");
const {Builder, Parser} = require ('xml2js');
const usps = new UspsClient({ userId: `${process.env.TRACKUSERNAME}` });
const { scannarClient } = require("./USPSClient.js")
const scannar = new scannarClient({})
const axios = require ('axios');

module.exports = {
    serverTracking
}

function serverTracking(req, res, next) {


}

function serverTracking2(req, res, next) {
    let trackingNumber = req.body.trackingNumber;
 usps.requestData({trackingNumber}, (err, data) => {
    if (err || typeof data.destination === "undefined") {
      return res
        .status(400)
        .json({ message: "The tracking number supplied is not valid" });
    }
    req.trackingObject = 
      data
    ;
    next();
  })
}