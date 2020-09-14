import { protractor } from "protractor/built/ptor";
import { PastebinApi } from "./PastebinApi";

const request = require('request');
let fs = require('fs');

export module HttpManager {
    export function PostGottenDataRequest(getApiUrl, postApiUrl, getFormDataToPost, sendInfoKey: string, fileNameWriteGet: string, fileNameWritePost ) {
        console.log(`----Send get request to ${getApiUrl}`)
        let flow = protractor.promise.controlFlow();
        var writeStream = fs.createWriteStream(fileNameWriteGet);
        let result = flow.execute(function() {
        let defer = protractor.promise.defer();
            request(getApiUrl, function (error, response, body) {
                if (!error && response.statusCode === 200) { 
                    console.log(`====Parse data and get value with key = ${sendInfoKey}`);
                    let dataToSend =  JSON.parse(body)[`${sendInfoKey}`];
                    defer.fulfill(dataToSend);
                }
            }).pipe(writeStream);
        
            defer.promise.then(function(data) {  
            SendPostRequest(postApiUrl, getFormDataToPost(data), fileNameWritePost)
            });
        
            return defer.promise;
        });
}

    

    function SendPostRequest(apiUrl,formData, filneNameWrite: string) {
        console.log(`====Send post to ${apiUrl}, response will be written to file ${filneNameWrite}`);
        let flow = protractor.promise.controlFlow();
        var writeStream = fs.createWriteStream(filneNameWrite);
        let result = flow.execute(function() {
        let defer = protractor.promise.defer();
        request(apiUrl, formData, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                defer.fulfill(body);
            }
        }).pipe(writeStream);
    
        defer.promise.then(function(data) {
         console.log(`====${data}`);
        });
    
        return defer.promise;
        });
    }

}