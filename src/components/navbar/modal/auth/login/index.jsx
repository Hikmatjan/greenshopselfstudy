import React from "react";
import { Form, Input, Divider } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  ScanOutlined,
} from "@ant-design/icons";

const Login = () => {
  return (
    <div className="w-[80%] m-auto">
      <h3 className="text-sm  mt-8 font-normal">
        Enter your username and password to login.
        <Form
          className="mt-4"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 32,
          }}
          style={{
            maxWidth: "100%",
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="almmanuni isi@gmail.com" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder=" please enter password" />
          </Form.Item>
          <h3 className="text-[#46A358] font-normal mt-[14px] cursor-pointer w-fit ml-auto">
            Forgot Password?
          </h3>
          <button
            type="submit"
            className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[45px] my-[27px]"
          >
            Login
          </button>{" "}
        </Form>
        <Divider>Or login with</Divider>
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
          <FacebookOutlined className="pl-[15px]" /> Login with Facebook
        </button>
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
          <GoogleOutlined className="pl-[15px]" /> Login with GoogleOutlined
        </button>
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
          <ScanOutlined className="pl-[15px]" /> Login with Qr Code
        </button>
      </h3>
    </div>
  );
};

export default Login;
