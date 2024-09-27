import express from "express";
import mongoose from "mongoose";
import connectWithDb from "./config/database.js"
const app=express();


app.use(express.json());
let blogs=[]

let user=[]
app.post("/users",(req,res)=>{
    const {name,email,password}=req.body;
    try{
        if(!name){
           return res.status(300).json({
                success:false,
                message:"Please Enter your name "
            })
        }
        if(!email){
            return res.status(300).json({
                success:false,
                message:"Please your Enter your email "
            })
        }
        if(!password){
            return res.status(300).json({
                success:false,
                message:"Pleae Enter password"
            });
        }
        user.push(req.body);
        return res.status(200).json({
            success:true,
            message:"User Created Sucessfully"
        })
    } catch(error){

    }
})

app.post("/blogs",(req,res)=>{
    blogs.push({...req.body, id:blogs.length+1})
    return res.json({message:"Successfully created blog"});
})
app.get("/blogs",(req,res)=>{
    let publicBlog=blogs.filter(blog=>!blog.draft)
    return res.json({publicBlog})
})
app.get("/blogs/:id",(req,res)=>{
    const {id}=req.params
    let SeachbyId=blogs.filter(blog=>blog.id==id)
    return res.json({SeachbyId})

})
app.patch("/blogs/:id",(req,res)=>{
    const {id}=req.params
    // let index=blogs.findIndex(blog=>blog.id)
    // blogs[index]={...blogs[index],...req.body}

    let UpdatedBlogs=blogs.map((blog,index)=>blog.id==id?({...blogs[index],...req.body}):blog)
    blogs=[...UpdatedBlogs]

    return res.json({message:"Blog  Updated Successfully",UpdatedBlogs})

})
app.delete("/blogs/:id",(req,res)=>{

})

connectWithDb();
app.listen(3000,(req,res)=>{
    console.log("App is running ");
    
})