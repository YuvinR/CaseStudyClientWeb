import api from './API'

export const CommonGet = (controller, queryString) => {

    return api.get(controller+'/'+queryString);
     
 }

 export const CommonPost =  (controller,requestbody)=> {
    
    return api.post(controller,requestbody);
   
}
