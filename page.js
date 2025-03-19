"use client"
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    authors: "",
    occasion: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("Generating presentation with:", formData);
    alert("Your Presentation is being generated...");
    
    // Call your backend API here
    // Example:
    // await fetch("/api/generate", { method: "POST", body: JSON.stringify(formData) })
    
    setFormData({ title: "", description: "", authors: "", occasion: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-gray-700 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">LLM Slide Generator</h1>
        
        <input 
          type="text" name="title" placeholder="Enter Project Title"
          value={formData.title} onChange={handleChange}
          className="w-full mt-4 p-2 border rounded placeholder-gray-500"
        />

        <input 
          type="text" name="description" placeholder="Enter Project Description"
          value={formData.description} onChange={handleChange}
          className="w-full mt-4 p-2 border rounded placeholder-gray-500"
        />

        <input 
          type="text" name="authors" placeholder="Enter Authors Name"
          value={formData.authors} onChange={handleChange}
          className="w-full mt-4 p-2 border rounded placeholder-gray-500"
        />

      
        <button onClick={handleSubmit} className="w-full mt-6 p-2 bg-purple-700 text-white font-bold rounded hover:bg-purple-800">
          Generate Presentation
        </button>
      </div>
    </div>
  );
}
