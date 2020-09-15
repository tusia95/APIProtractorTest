
import {HttpManager} from "./HttpManager";
export module PastebinApi {

    export const APIURL = `https://pastebin.com/api/api_post.php`;
    export const DEVKEY1 = `Law9cU0ImZ5mt3YSUeqf7UwezIJv0JPc`;
    export const DEVKEY2 = `rut-MuSKEK3n6A-Hw2zESfznVjx67GCt`;
    export function  getFormData(textToPaste: string) {
        console.log(`====Paste to pastebin text ==> ${textToPaste}`);
        return{form: {api_dev_key: DEVKEY2,
                api_option: "paste",
                api_paste_code: textToPaste}}
    };   
}