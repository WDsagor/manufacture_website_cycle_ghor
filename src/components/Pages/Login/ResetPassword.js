import React, { useEffect } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../share/Loading';

const ResetPassword = () => {
    const { register, formState: { errors }, handleSubmit, reset} = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    
    const navigate = useNavigate();

    useEffect(()=>{
        if(error){
            toast.error(error?.message, {
                 position: toast.POSITION.TOP_CENTER
               });
         }
         
        
    }, [error]);
   

    if (sending) {
        return <Loading></Loading>
    }

    

    const onSubmit = data => {
        sendPasswordResetEmail(data.email);
        reset();
        if(!error){
            toast.success("Password reset success, Please check your email", {
                position: toast.POSITION.TOP_CENTER
              });
              navigate('/login');
         }

       
        
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary ">Provide a valid email...</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email for confarmation</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full btn-primary max-w-xs' type="submit" value="Confirm" />
                    </form>
                   </div>
            </div>
        </div >
    );
};

export default ResetPassword;