import { HttpManager } from "../Utils/HttpManager";
import { PastebinApi } from "../Utils/PastebinApi";
import { NasaApi } from "../Utils/NasaApi";

describe(`APItest`, function () {
    beforeEach(() => {
        
    });

    afterEach(() => {
       
    });

    it(`APItest`, () => {
        HttpManager.PostGottenDataRequest(
        NasaApi.GetApiEndPoint(`2020-01-01`, true), PastebinApi.APIURL, PastebinApi.getFormData, `explanation`, './nasaPictureInfo.txt', './linkPastebin.txt'); 
    })
});