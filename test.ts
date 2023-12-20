import InstaWeb from "./src/InstaWeb"

(async () => {
    const instaWeb = new InstaWeb({});
    console.log(await instaWeb.getPostByShortCode('B1OrN1rhPjx40xYoIzh1NTmHZKT3vVM2Iba7UM0'));
    console.log(await instaWeb.getPostByShortCode('C0QnN_FtV1k'));
})()