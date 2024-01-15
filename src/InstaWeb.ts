import axios, { Axios, AxiosHeaders, CreateAxiosDefaults } from "axios";
import qs from "qs";


export default class InstaWeb {

    axios: Axios;
    headers: AxiosHeaders;

    constructor(options: CreateAxiosDefaults = {}, headers: AxiosHeaders = new AxiosHeaders()) {
        this.axios = axios.create({
            ...options,
        });
        headers['X-IG-App-ID'] = "936619743392459";
        this.headers = headers;
    }




    async getPostByShortCode(code: string) {
        let data = qs.stringify({
            'variables': `{"shortcode": "${code}","fetch_comment_count":40,"fetch_related_profile_media_count":3,"parent_comment_count":24,"child_comment_count":3,"fetch_like_count":10,"fetch_tagged_user_count":null,"fetch_preview_comment_count":2,"has_threaded_comments":true,"hoisted_comment_id":null,"hoisted_reply_id":null}`,
            'doc_id': '10015901848480474'
        });

        const result = await this.axios.request({
            method: 'post',
            url: 'https://www.instagram.com/api/graphql',
            data,
            headers: this.headers
        })
        return result.data.data.xdt_shortcode_media

    }


    async getPage(username: string, maxId?: string, postCount: number = 12) {
        try {
            const result = await this.axios.request({
                method: 'get',
                url: `https://www.instagram.com/api/v1/feed/user/${username}/username/?count=${postCount}${maxId ? `&max_id=${maxId}` : ''}`,
                headers: this.headers,
            })
            return result.data.data
        } catch (e: any) {
            return new Error(JSON.stringify(e.response?.data));
        }
    }
}