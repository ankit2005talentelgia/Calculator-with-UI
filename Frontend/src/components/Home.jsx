import { useState } from 'react';
import './Cal.css';
import axios from 'axios';
import { IoBackspaceOutline } from "react-icons/io5";

function Home({isDark}) {
    
    const [value,setValue]=useState("");
    const [answer,setAnswer]=useState("");
    const [loading,setLoading]=useState(true);


    function handleButton(e){
        function check(val){
            if(val=='-' || val=='+' || val=='*' || val=='/' || val=='%')return true;
            return false;
        }
        function lastcheck(){
            if(check(value[value.length-1]))return true;
            return false;
        }

        if(answer){
            setValue(answer+e.target.value);
            setAnswer("");
            return;
        }

        if(e.target.value=="."){
            if(!check(value[value.length-1]) && value[value.length-1]!=".")setValue(value+e.target.value);
        }
        else if(lastcheck()){
            if(!check(e.target.value))setValue(value+e.target.value);
        }
        else setValue(value+e.target.value);
    }

    async function handleSubmit(val){
        try {

            const response=await axios.post("http://localhost:5076/calculate",{
                expression:val
            },{
            headers: {
                "Content-Type": "application/json"
            }
        });
            setAnswer(response.data.data);
            setLoading(false);
        } catch (error) {
            console.log("error is: ",error);
        }
    }

    function handleBackButton(){
        setValue(value.slice(0,-1));   
    }

  return (
    <div className='home'>
        <div style={isDark?{border:'5px solid white'}:{border:'5px solid grey'}} className='container'>
            <div 
                style={isDark?{backgroundColor:'#4d4d4f',color:"#dbdada",boxShadow:'1px 1px 5px 1px #1a1a1a'}:{border:'1px solid black', boxShadow:'1px 1px 5px 1px white'}} 
                className='display'
            >
                <span>
                    {value}
                </span>

                <span>
                    {answer?answer:"0"}
                </span>
            </div>
            <div className='cal-buttons'>
                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="C" className='upr-btn' onClick={()=>{setValue(""); setAnswer("")}}>C</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} className='upr-btn' onClick={()=>handleBackButton()}><IoBackspaceOutline/></button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="%" className='upr-btn' onClick={(e)=>handleButton(e)}>%</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="/" onClick={(e)=>handleButton(e)} className='btn-color'>/</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="7" onClick={(e)=>handleButton(e)}>7</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="8" onClick={(e)=>handleButton(e)}>8</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="9" onClick={(e)=>handleButton(e)}>9</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="*" className='btn-color' onClick={(e)=>handleButton(e)}>*</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="4" onClick={(e)=>handleButton(e)}>4</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="5" onClick={(e)=>handleButton(e)}>5</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="6" onClick={(e)=>handleButton(e)}>6</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="-" className='btn-color' onClick={(e)=>handleButton(e)}>-</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="1" onClick={(e)=>handleButton(e)}>1</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="2" onClick={(e)=>handleButton(e)}>2</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="3" onClick={(e)=>handleButton(e)}>3</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="+" className='btn-color' onClick={(e)=>handleButton(e)}>+</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="0" className='zero-btn' onClick={(e)=>handleButton(e)}>0</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}} value="." onClick={(e)=>handleButton(e)}>.</button>

                <button style={isDark?{boxShadow:'rgb(84 83 83) 4px 5px 7px 1px'}:{boxShadow:'1px 1px 5px 1px grey'}}  className='btn-color' onClick={()=>handleSubmit(value)}>=</button>
            </div>
        </div>
    </div>
  )
}

export default Home;
