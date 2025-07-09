import { Form } from "antd";
import React from "react";
import AppInput from "../../shared/input";
import FormLayout from "../layout";

const PointOfContact = () => {
  return (
    <FormLayout
      title="Point of contact"
      description="This is the individual that we will communicate with. Communications
          related to this form but also to the company once incorporated will be
          sent to the same email address. You can change it later on if
          required."
    >
      <label>Full name</label>
      <Form.Item
        hasFeedback
        name="fullName"
        rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <AppInput variant="outlined" className=" !mt-4 " />
      </Form.Item>
      <div className="pt-4">
        <label>Email</label>
        <Form.Item
          hasFeedback
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              type: "email",
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <AppInput variant="outlined" className="!mt-4 " />
        </Form.Item>
      </div>
    </FormLayout>
  );
};

export default PointOfContact;
