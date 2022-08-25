import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // npm install react-redux;
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../Slices/UserSlice'; 

function Login()
{
    const {register, handleSubmit, formState: {errors}}= useForm();
    let navigate= useNavigate();

    let { userObj, isError, isLoading, isSuccess, errMsg }= useSelector(state => state.user);
    let dispatch= useDispatch();
  
    const onFormSubmit = (userCredObj) => {
      dispatch(userLogin(userCredObj));
    }

    // to be executed whenever isSuccess or isError is changed.
    useEffect(() => {
        if (isSuccess) {
            navigate('/home2');
        }
    }, [isSuccess, isError])

    return(
        <div id="re">
        <div className='container-fluid '>
            <div className='row'>
            <div className="col-11 col-sm-8 col-md-4 mx-auto mt-5 mb-4"  >
                <form className='border bg-dark p-4  bg-opacity-50 shadow rounded-3' onSubmit={handleSubmit(onFormSubmit)} style={{color:'black'}} >
                  <div className='mb-3'>
                  <p className='display-5'>Start making your steps now...</p>
                  </div>
                    {/* username */}
                    <div className="mb-3">
                        <label htmlFor="un">Username</label>
                        <input type="text" style={{borderRadius: '15px'}} id="un" className="form-control" {...register("username", { required: true, minLength: 6 ,maxLength:15})} />
                        {/* validation error msg for username */}
                        {errors.username?.type === 'required' && <p className='text-danger'>* Username required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 6</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 15</p>}
                    </div>
                    {/* password */}
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" style={{borderRadius: '15px'}} id="password" className="form-control" {...register("password", { required: true,maxLength:4, maxLength:8 })} />
                        {/* validation error msg for password */}
                        {errors.password?.type === 'required' && <p className='text-danger'>* Password required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-danger'>* Max length should be 8</p>}
                    </div>
                    {/* login button */}
                    <div className='mb-1 text-center'>
                    <button type="submit" className="btn btn-success w-50 mb-1" style={{borderRadius: '15px',backgroundColor:'#EAE7DC', color:'#8E8D8A'}}>Login</button>                      
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6 text-end mt-2'>
                        <p>New User? </p>
                        </div>
                        <div className='col-6 text-start'>
                        <Link className='nav-link text-dark w-50  text-center rounded'  style={{borderRadius: '15px',backgroundColor:'#EAE7DC', color:'black'}} to="registration">SignUp</Link>                          
                        
                        </div>
                        
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Login;