import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
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

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <>
      <section className="heading mt-24 flex justify-center flex-col items-center text-center mb-2">
        <h1 className="inline-flex gap-2 text-2xl mb-4">
        <i className="ri-user-fill text-purple-500"></i> Register{" "}
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form ">
        <form onSubmit={onSubmit} className="flex justify-center flex-col items-center">
          <div className="form-group flex flex-col">
            <label>Enter your name:</label>
            <input
              type="text"
              className="form-control w-[400px] p-[14px] bg-slate-800 border-[none] outline-0 text-[15px] rounded-[8px] mb-[10px]"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
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

          <div className="form-group flex flex-col">
            <label>Confirm password:</label>
            <input
              type="password"
              className="form-control w-[400px] p-[14px] bg-slate-800 border-[none] outline-0 text-[15px] rounded-[8px] mb-[10px]"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
            />
          </div>
          <div className="form-group mt-4 ">
            <button type="submit" className="btn bg-purple-700 py-3 px-2 rounded-md hover:bg-purple-600">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
