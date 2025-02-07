import React,{useState} from 'react';
import Loading from './Loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Output.css';


export default function AfterNo({setResult}) {
    const navigate=useNavigate();
    const [error, setError] = useState(null);
    const [fullName, setFullName] = useState("");
    const [currentPosition, setCurrentPosition] = useState("");
    const [currentLength, setCurrentLength] = useState(1);
    const [currentSkills, setCurrentSkills] = useState("");
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const[companyInfo,setCompanyInfo]=useState([{name:"",position:""}]);

 const handleFormSubmit=async(e)=>{
       e.preventDefault();
       console.log({
        fullName,
        currentPosition,
        currentLength,
        currentSkills,
        photo
       });

       const formData = new FormData();
       formData.append("photo",photo,photo.name);
       formData.append("fullName",fullName);
       formData.append("currentPosition",currentPosition);
       formData.append("currentLength",currentLength);
       formData.append("currentSkills",currentSkills);
       formData.append("workHistory",JSON.stringify(companyInfo));

       

       axios.post("http://localhost:5000/output/create",formData)
       .then((res)=>{
        if(res.data.message){
            console.log(res.data.data);
            setResult(res.data.data);
            navigate('/output');

        }
       })
       .catch((err)=>{
        console.error(err);
       } )
       setLoading(false);
 };


 if(loading){
    return<Loading/>
 }

 const handleAddCompany=()=>{
    setCompanyInfo([...companyInfo,{name:"",position:""}])
 }

 const handleRemoveCompany=(index)=>{
    const list =[...companyInfo];
    list.splice(index,1);
    setCompanyInfo(list);
 }

 const handleUpdateCompany=(e,index)=>{
        const {name,value}=e.target;
        const list = [...companyInfo];
        list[index][name]=value;
        setCompanyInfo(list);
 }



  return (
    <div className='app' style={{}}>
       <h2>Resume Builder with AI</h2> 
       <p>Create Resume with AI</p>
       <form onSubmit={handleFormSubmit} method="POST">
        <label htmlFor="fullname">Full Name</label>
        <input name="fullname" type='text' required id="fullname" value={fullName} onChange={(e)=> setFullName(e.target.value)}/>
        <div className='nestedContainer'>
            <div>
            <label htmlFor="currentPosition">Current Position</label>
            <input name="currentPosition" type='text' required  value={currentPosition} onChange={(e)=> setCurrentPosition(e.target.value)}
            className='currentInput'/>
            </div>
            <div>
            <label htmlFor="currentLength">For how long?(year)</label>
            <input name="currentLength" type='number' required  value={currentLength} onChange={(e)=> setCurrentLength(e.target.value)}
            className='currentInput'/>
            </div>
            <div>
            <label htmlFor="currentSkills">Skills</label>
            <input name="currentSkills" type='text' required  value={currentSkills} onChange={(e)=> setCurrentSkills(e.target.value)}
            className='currentInput'/>
            </div>
        </div>
        <label htmlFor="photo">Upload Your Face Image</label>
            <input name="photo" type='file' required id='photo' onChange={(e)=> setPhoto(e.target.files[0])}
            accept = "image/x-png,image/jpeg"/>
            {
                companyInfo.map((company,index)=>(
                    <div className="nestedContainer" key="index">
                        <div className="companies">
                            <label htmlFor='name'>Company Name</label>
                            <input type='text' name='name' required
                            onChange={(e)=>handleUpdateCompany(e,index)}/>
                        </div>
                        <div className="companies">
                            <label htmlFor='position'>Position</label>
                            <input type='text' name='position' required
                            onChange={(e)=>handleUpdateCompany(e,index)}/>
                        </div>
                        <div className="btn_group">
                            {
                                companyInfo.length-1=== index && companyInfo.length<4 &&(
                                    <button id='addBtn' onClick={handleAddCompany}>
                                        Add
                                    </button>
                                )}
                                {
                                    companyInfo.length>1 && (
                                        <button id='deleteBtn' onClick={()=>handleRemoveCompany(index)}>
                                            Delete
                                        </button>
                                    )
                                }
                        </div>

                    </div>
                ))
            }
        <button >
            Create Resume
        </button>
       </form>
    </div>
  )
}
