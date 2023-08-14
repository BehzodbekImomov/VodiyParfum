"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/redux/slices/authSlice";
import { useState } from "react";

const Login = () => {
  const [users, setUser] = useState({ username: "", password: "" });
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    let user = users;
    dispatch(login({ user, router }));
  };

  return (
    <div className="container mx-auto py-12 ">
      <form
        onSubmit={loginUser}
        className="w-1/2 mt-32 grid gap-5 mx-auto text-yellow-300 "
      >
        <input
          onChange={handleChange}
          name="username"
          value={users.username}
          className="input py-4 px-4  text-xl"
          required
          type="text"
          placeholder="User name"
        />
        <input
          onChange={handleChange}
          name="password"
          value={users.password}
          className="input py-4 px-4  text-xl"
          required
          type="password"
          placeholder="Password "
        />
        <button
          disabled={loading}
          className="btn border-solid border-2 text-slate-50 bg-orange-300 text-2xl font-bold "
        >
          {" "}
          {loading ? "...loading" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
