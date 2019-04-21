const {Builder, Parser} = require ('xml2js');
const axios = require ('axios');

// Builder and parser both have options available, check xml2js docs


class USPSClient {
    constructor(trackingAttributes) {
        this.parser = new Parser()
        this.builder = new Builder()
    }
    generateRequest() {
        this.builder.buildObject({
            "TrackFieldRequest" : {
                
            }
        })
    }

}



module.exports = {USPSClient}