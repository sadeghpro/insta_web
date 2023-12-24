import { AxiosHeaders } from "axios";
import InstaWeb from "./src/InstaWeb"

(async () => {
    const headers = new AxiosHeaders();
    headers.set("Cookie", '');// until create login function we must set cookie before send requests that need authorization
    const instaWeb = new InstaWeb(undefined, headers);
    let response = await instaWeb.getPage('saeid.jalili.adventure');

    response.items.forEach((item: any) => {
        console.log(item.product_type)
    })

    response = await instaWeb.getPage('saeid.jalili.adventure', response.items[response.items.length - 1].id);
    response.items.forEach((item: any) => {
        console.log(item.product_type)
    })

})()