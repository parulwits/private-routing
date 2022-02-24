import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../utils";
import Loader from '../shareComponent/Loader';
import {
  StyledContainer,
  Form,
  Title,
  InputContainer,
  Input,
  ButtonContainer,
} from "../styles/login";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginUser = (data) => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data-------", data);
        if (data.token) {
          login(data.token);
          navigate("/dashboard");
        } else {
          alert(data.error);
        }
      });
  };

  return (
    <StyledContainer>
      <Form>
          {/* <Loader/> */}
        <form onSubmit={handleSubmit(loginUser)}>
          <Title>Login</Title>
          <InputContainer>
            <label>Email</label>
            <Input type={"email"} name="email" {...register("email")} />
          </InputContainer>
          <InputContainer>
            <label>Password</label>
            <Input
              type={"password"}
              name="password"
              {...register("password")}
            />
          </InputContainer>
          <ButtonContainer>
            <input type="submit" value="Login" className="button_submit" />
          </ButtonContainer>
        </form>
      </Form>
    </StyledContainer>
  );
};

export default SignIn;
