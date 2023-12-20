import axios, { Axios, CreateAxiosDefaults } from "axios";
import qs from "qs";


export default class InstaWeb {

    axios: Axios;

    constructor(options: CreateAxiosDefaults) {
        this.axios = axios.create({
            ...options,
        });
    }


    async getPostByShortCode(code: string) {
        let data = qs.stringify({
          'variables': `{"shortcode": "${code}","fetch_comment_count":40,"fetch_related_profile_media_count":3,"parent_comment_count":24,"child_comment_count":3,"fetch_like_count":10,"fetch_tagged_user_count":null,"fetch_preview_comment_count":2,"has_threaded_comments":true,"hoisted_comment_id":null,"hoisted_reply_id":null}`,
          'doc_id': '10015901848480474' 
        });
        let config = {
          method: 'post',
          url: 'https://www.instagram.com/api/graphql',
          data,
        };
        
        
        const result = await this.axios.request(config)
        return result.data.data.xdt_shortcode_media
        
    }
}