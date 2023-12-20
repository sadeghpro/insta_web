import { AxiosHeaders } from "axios";
import InstaWeb from "./src/InstaWeb"

(async () => {
    const headers = new AxiosHeaders();
    headers.set("Cookie", '');// until create login function we must set cookie before send requests that need authorization
    const instaWeb = new InstaWeb(undefined, headers);
    console.log(await instaWeb.getPage('sadeghpro'));
    
})()