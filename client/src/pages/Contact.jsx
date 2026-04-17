
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contact", form);
    alert("Message sent!");
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={submit}>
        <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
        <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
        <textarea placeholder="Message" onChange={e=>setForm({...form,message:e.target.value})}></textarea>
        <button className="gold">Send</button>
      </form>
    </div>
  );
}
