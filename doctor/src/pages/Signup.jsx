import React from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import { Form, Input, Button } from "antd";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Signup = () => {

  const navigate= useNavigate();
  
  const onfinishHandler = async(values)=>{
    try{
      const response= await axios.post('/api/users/register', values)
      if(response.data.success){
        toast.success(response.data.message,{
          position:"top-center",
          autoClose:5000,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          theme:"dark"
        });
        toast("Redirecting to Login Page");
        navigate("/");
      }
      else{
        toast.error(response.data.message,{
          position:"top-center",
          autoClose:5000,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          theme:"dark"
        });
       
      }
    }
    catch(error){
      console.log(error)
      toast.error("something went wrong")
    }
  }

  return (
    <div className="authentication">
      <div className="authentication-form card p-3" >
        <h1 className="card-title">Nice To Meet U</h1>
          <Form layout="vertical" onFinish={onfinishHandler}>
             <Form.Item className="registerlabel" label='Name' name='name'>
                  <Input className="registerinput" placeholder="Name"/>
             </Form.Item>
             <Form.Item className="registerlabel" label='Email' name='email'>
                  <Input className="registerinput" placeholder="Email"/>
             </Form.Item>
             <Form.Item className="registerlabel" label='Password' name='password'>
                 <Input className="registerinput" placeholder="Password" type="password"/>
              </Form.Item>
              <Button className="Primary-Button my-2" htmlType="submit">Register</Button>
              <Link to='/' className="anchor mt-2">CLICK HERE TO LOGIN</Link>
          
          </Form>
        </div>
    </div>
  );
};

export default Signup;
