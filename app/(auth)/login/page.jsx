import React from 'react'

const LoginPage = () => {
  return (
    <div className='container mx-auto py-12 '>
        <form className='w-1/2 mt-32 grid gap-5 mx-auto text-yellow-300 ' >

        <input className='input py-4 px-4  text-xl'required type="text" placeholder='User name' />
        <input className='input py-4 px-4  text-xl'required type="password" placeholder='Password ' />
        <button className='btn border-solid border-2 text-slate-50 bg-orange-300 text-2xl font-bold '>Login</button>
        </form>
    </div>
  )
}

export default LoginPage