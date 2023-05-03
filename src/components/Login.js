import '../styles/Login.css'
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

function Login() {
  
  

  let navilog = useNavigate()
    const {register,handleSubmit}=useForm()
  const onFormSubmit=(credObj)=>{
    if(credObj.email == "admin@gmail.com"){
        if(credObj.password == "admin"){
            navilog('/game1')
        }
    }
   else if(credObj.email == "admin123@gmail.com"){
        if(credObj.password == "admin123"){
            navilog('/game1')
        }
    else{
        alert("invalind credentials")
    }
    }
  }

  return (
    <div>
       
      <div className="row login">
      <div className="col-5">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" className="w-100 mt-5"/>
    </div>
       <div className="ml-5 col-7 "><form className="w-75 mt-5 login p-3" onSubmit={handleSubmit(onFormSubmit)}>
          <h1 className="text-center text-light w-75" style={{fontFamily:"cursive"} }>Login</h1>
          <div>
          <label className="text-light mt-3 " style={{fontFamily:"cursive"}} ><h4>Email</h4></label>
          <input type="email" className="form-control" {...register("email",{required:true})}/>
          </div>
          <div>
          <label className="text-light mt-3" style={{fontFamily:"cursive"}} ><h4>Password</h4></label>
          <input type="password" className="form-control" {...register("password",{required:true})} />
          <p className="dummy1" style={{"color":"white"}}>demo id1: admin@gmail.com <br></br> demo password: admin</p>
          <p className="dummy2" style={{"color":"white"}}>demo id2: admin123@gmail.com <br></br> demo password: admin123</p>


          <button className="btn btn-primary d-block mx-auto mt-5" type='submit'>Login</button>
          </div>
        </form>
        </div>
        </div>
    </div>
  );
}

export default Login;