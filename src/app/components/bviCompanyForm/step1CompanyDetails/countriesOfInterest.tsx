import { Form } from "antd";
import React from "react";
import AppSelect from "../../shared/select";
import FormLayout from "../layout";

const CountriesOfInterest = () => {
  return (
    <FormLayout
      title="Countries Of Interest"
      description=" We are required to check that the
           company will not be interacting with
           forbidden locations. For jurisdiction of
           operation’ if you are alone, select your
           country of residency. If you have more
           shareholders, pick the most relevant. For
           ‘target jurisdiction’ select 1-3 countries
           that are relevant. Even if you will have
           clients from other countries, it’s ok."
    >
      <div>
        <label>Jusrisdiction of operation</label>
        <Form.Item
          hasFeedback
          name="operation"
          rules={[
            {
              required: true,
              message: "Please select your Jusrisdiction operation!",
            },
          ]}
        >
          <AppSelect
            options={[{ label: "Test", value: "test" }]}
            className="!mt-4 "
          />
        </Form.Item>
        <div className="pt-4">
          <label>Target Jusrisdiction</label>
          <Form.Item
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please select your  Target jusrisdiction!",
              },
            ]}
            name="target"
          >
            <AppSelect
              options={[{ label: "Test", value: "test" }]}
              className="!mt-4 "
            />
          </Form.Item>
        </div>
      </div>
    </FormLayout>
  );
};

export default CountriesOfInterest;
