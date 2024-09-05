import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[sname,setStudentName]= useState("");
const[stech,setTechnology]= useState("");
const[ssub,setsub]= useState("");
const[srollno,setrollno]= useState("");
const[syear,setyear]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:9000/students',
{name:sname,
tech:stech,
sub:ssub,
rollno:srollno,
year:syear}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="text"
name="sname"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>Technology</b></label>
<input
type="text"
name="stech"
onChange={(e)=>{
setTechnology(e.target.value);
}}
required/>
<label><b>subject</b></label>
<input
type="text"
name="ssub"
onChange={(e)=>{
setsub(e.target.value);
}}
required/>
<label><b>rollno</b></label>
<input
type="text"
name="srollno"
onChange={(e)=>{
setrollno(e.target.value);
}}
required/>
<label><b>year</b></label>
<input
type="text"
name="syear"
onChange={(e)=>{
setyear(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;