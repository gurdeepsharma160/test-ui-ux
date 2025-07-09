import { Form, Input, Select } from "antd";
import React from "react";
import AppInput from "../../shared/input";
import AppSelect from "../../shared/select";
import FormLayout from "../layout";

const CompanyInformation = () => {
  return (
    <FormLayout
      title="Company Information"
      description=" Every company must have a name and a designation. For the
          company name you
           can use both letters and numbers, but not
           special symbols. For the designations,
           there is no actual different between one or
           another."
    >
      <div>
        <label>Company Name</label>
        <Form.Item
          hasFeedback
          name="companyName"
          rules={[
            { required: true, message: "Please input your Company name!" },
          ]}
        >
          <AppInput className="!mt-4 " />
        </Form.Item>
        <div className="pt-4">
          <label>Alternative Company Name</label>
          <Form.Item hasFeedback name="alternativeCompanyName">
            <AppInput variant="outlined" className="!mt-4 " />
          </Form.Item>
        </div>

        <div className="pt-4">
          <label>Company Designation</label>
          <Form.Item
            hasFeedback
            name="designation"
            rules={[
              {
                required: true,
                message: "Please input your Company designation!",
              },
            ]}
          >
            <AppSelect
              options={[{ value: "Test", label: "Test" }]}
              className="!mt-4 "
            />
          </Form.Item>
        </div>
      </div>
    </FormLayout>
  );
};

export default CompanyInformation;
