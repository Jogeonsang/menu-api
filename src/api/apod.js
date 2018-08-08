import axios from 'axios';

export function getAPOD(nameMenu,imageUrlMenu,story) {
    return axios.get(`https://apidev.plating.co.kr/resource/v3/menus`,{
        params : {
            
            nameMenu,
            imageUrlMenu,
            story
        }
    });
  }