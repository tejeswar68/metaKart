import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // npm install axios;

function Registration()
{
    const { register, handleSubmit, formState: {errors}}=useForm();
    const navigate= useNavigate();

    const onFormSubmit = (userObj) => {
    
        // making http post
        axios.post('http://localhost:5000/user/create-user', userObj)
          .then(res => {
            console.log(res);
            alert(res.data.msg);
    
            if (res.data.msg === 'User Created Successfully.') {
              // navigate to login
              navigate('/login');
            }
          })
          .catch(err => console.log('error in creating user'));
      }

      return(
        <div id="reg">
        <div className='container'>
        <div className='row'>
            <div className="col-11 col-sm-8 col-md-5 mx-auto mt-5 mb-4">
                <form className='border p-4 bg-dark bg-opacity-50 shadow rounded-3' onSubmit={handleSubmit(onFormSubmit)} style={{color:'black'}}>
                  <div className='mb-3'>
                  <p className='display-6'>Create a space to make your Step in...</p>
                  </div>

                    {/* username */}
                    <div className="mb-3">
                        <label htmlFor="un">Name</label>
                        <input type="text" style={{borderRadius: '15px'}} id="un" className="form-control" {...register("username", { required: true, minLength: 4 ,maxLength:16})} />
                        {/* validation error msg for username */}
                        {errors.username?.type === 'required' && <p className='text-danger'>* Username required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 16</p>}
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" style={{borderRadius: '15px'}} id="email" className="form-control" {...register("email", { required: true })} />
                        {/* validation error msg for email */}
                        {errors.email?.type === 'required' && <p className='text-danger'>* Email required</p>}
                    </div>
                    {/* mobile number */}
                    <div className="mb-3">
                        <label htmlFor="number">Mobile number</label>
                        <input type="number" style={{borderRadius: '15px'}} id="number" className="form-control" {...register("number", { required: true })} />
                        {/* validation error msg for number */}
                        {errors.number?.type === 'required' && <p className='text-danger'>* Mobile number required</p>}
                    </div>
                    {/* password */}
                    <div className="mb-3">
                        <label htmlFor="pw">Password</label>
                        <input type="password" style={{borderRadius: '15px'}} id="pw" className="form-control" {...register("password", { required: true, minLength: 8 ,maxLength:16})} />
                        {/* validation error msg for password */}
                        {errors.password?.type === 'required' && <p className='text-danger'>* Password required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-danger'>* Min length should be 8</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-danger'>* Max length should be 16</p>}
                    </div>       
                    
                    {/* submit button */}
                    <div className='mb-0 text-center'>
                    <button type="submit" style={{borderRadius: '15px',backgroundColor:'#EAE7DC', color:'black'}} className="btn btn-success w-50 mb-1">Register</button>    
                                
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Registration;