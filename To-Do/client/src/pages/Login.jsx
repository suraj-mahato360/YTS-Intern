import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <>
      <section className="heading mt-24 flex justify-center flex-col items-center text-center mb-2">
        <h1 className="inline-flex gap-2 text-2xl mb-4">
          <i className="ri-user-fill text-purple-500"></i> Login{" "}
        </h1>
        <p>Login and start creating todos</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit} className="flex justify-center flex-col items-center">
          <div className="form-group flex flex-col">
            <label>Enter your email:</label>
            <input
              type="email"
              className="form-control w-[400px] p-[14px] bg-slate-800 border-[none] outline-0 text-[15px] rounded-[8px] mb-[10px]"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group flex flex-col">
            <label>Enter your password:</label>
            <input
              type="password"
              className="form-control w-[400px] p-[14px] bg-slate-800 border-[none] outline-0 text-[15px] rounded-[8px] mb-[10px]"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <h3 className=" mt-2 mb-2">
            Don't have an account ?
            <Link to="/register" className="link underline">
              Click here to register{" "}
            </Link>
            `
          </h3>
          <div className="form-group">
            <button type="submit" className="btn bg-purple-700 py-3 px-2 rounded-md hover:bg-purple-600">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
