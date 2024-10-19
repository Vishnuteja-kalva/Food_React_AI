import React from "react";
import { Router,Routes, Route } from "react-router-dom"; 
import "./App.css";
import { Login_c } from "./Login_Page";
import { Telugu } from "./Telugu";
import { Hindi } from "./Hindi";
import { Tamil } from "./Tamil";
import { Malayalam } from "./Malayalam";
import { FoodieIntro } from "./Intro";
import { SignupForm } from "./Sign up";
import { ForgotPassword } from "./Forgot_pass";
import { NutritionFetcher } from "./Food nutrition";
import {GeminiChatbot} from "./food_chatbot";
import { Interface } from "./Success";
import { Video } from "./Play Videos";
export function New_react() {
  return (
    <div>
      <Routes>
      <Route path ="/" element ={<FoodieIntro/>}/>
        <Route path="/Intro" element={<Login_c />} />
        <Route path="/Telugu" element={<Telugu/>} />
        <Route path ="/Hindi" element ={<Hindi/>} />
        <Route path="/Tamil" element ={<Tamil/>}/>
        <Route path ="/Malayalam" element ={<Malayalam/>}/>
        <Route path ="/Signup" element ={<SignupForm/>}/>
        <Route path ="/Forgot password" element ={<ForgotPassword/>}/>
        <Route path="/Nutrition fetch" element ={<NutritionFetcher/>} />
        <Route path ="/Food chat-bot" element ={<GeminiChatbot/>} />
        <Route path ="/Success Interface" element ={<Interface/>} />
        <Route path="/Cooking Videos" element ={<Video/>} />
      </Routes>
    </div>
  );
}


