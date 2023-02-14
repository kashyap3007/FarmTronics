import  axios from 'axios';

const API= axios.create({baseURL: "http://localhost:5000"});

//auth
export const login= async(data)=>{ return await API.post("/auth/user/login", data)};
export const signup= async(data)=>{return await API.post("/auth/user/register", data)};

//article
export const getarticles= async()=>{return await API.get("/article/get")};
export const getarticle= async(id)=> {return await API.get(`/article/get/${id}`)};
export const postarticle= async(data)=>{
const config={
    header:  {'content-type': "multipart/form-data"},
}
return await API.post("/article/post", data, config);
}
export const deletearticle= async(id)=>{ return await API.delete(`/article/delete/${id}`)}
export const likearticle = async(id, userId)=>{
    const data= await API.patch(`article/like/${id}`, {userId});
    return data;
}

//videos
export const getvideos= async()=>{return await API.get("/video/get")};
export const getvideo= async(id)=> {return await API.get(`/video/get/${id}`)};

//products
export const getproducts= async()=>{return await API.get("/product/get")};
export const getproduct= async(id)=> {return await API.get(`/product/get/${id}`)};

//CROPSELECTION
export const getreport= async(search)=>{return await API.post("/weather/post", search)};