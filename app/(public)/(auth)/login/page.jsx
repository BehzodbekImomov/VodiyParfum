"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/redux/slices/authSlice";


const Login = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const loginUser = async () => {
    let user = { username: "behzod", password: "1234567" };
    dispatch(login({ user, router }));
  };

  const submit =(e)=>{
    e.preventDefault()
  }
  return (
    <div className='container mx-auto py-12 '>
        <form onSubmit={submit} className='w-1/2 mt-32 grid gap-5 mx-auto text-yellow-300 ' >

        <input className='input py-4 px-4  text-xl'required type="text" placeholder='User name' />
        <input className='input py-4 px-4  text-xl'required type="password" placeholder='Password ' />
        <button onClick={loginUser} disabled={loading} className='btn border-solid border-2 text-slate-50 bg-orange-300 text-2xl font-bold '> {loading ? "...loading" : "Login"}</button>
        </form>
    </div>
  )
}

export default Login