import  axios from 'axios';

const API= axios.create({baseURL: "http://localhost:5000"});

//auth
export const login= async(data)=>{ return await API.post("/auth/user/login", data)};
export const signup= async(data)=>{return await API.post("/auth/user/register", data)};

//article
export const getarticles= async()=>{return await API.get("/article/get")};
export const getarticle= async(id)=> {return await API.get(`/article/get/${id}`)};
export const postarticle= async(data)=>{return await API.post("/article/post", data)}

//videos
export const getvideos= async()=>{return await API.get("/video/get")};
export const getvideo= async(id)=> {return await API.get(`/video/get/${id}`)};

//products
export const getproducts= async()=>{return await API.get("/product/get")};
export const getproduct= async(id)=> {return await API.get(`/product/get/${id}`)};

//CROPSELECTION
export const getreport= async(search)=>{
    const data=  await API.post("/weather/post", search);
    console.log(data);
    return data;
};