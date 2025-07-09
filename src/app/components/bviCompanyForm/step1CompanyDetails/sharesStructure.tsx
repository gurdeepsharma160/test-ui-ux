import { Checkbox, Form, Radio } from "antd";
import React from "react";
import AppInput from "../../shared/input";
import AppSelect from "../../shared/select";
import FormLayout from "../layout";

const SharesStructure = () => {
  return (
    <FormLayout
      title="Shares structure"
      description="All companies must have at least 1 share.
           Apart from that, you can structure things
           in whatever way you like. Issued shares
           are shares that will be distributed from
           day 1. Unissued shares are shares that
          
          you can distribute later on, i.e. to future
           team members or investors. The value per
           shares represents your personal liability,
           so, if you wish to reduce risks, just pick the
           smallest number."
    >
      {" "}
      <div>
        <label>Number of shares</label>
        <Form.Item
          hasFeedback
          name="share"
          rules={[{ required: true, message: "Please select your share!" }]}
        >
          <AppSelect
            options={[{ label: "Test", value: "test" }]}
            className="!mt-4 "
          />
        </Form.Item>
        <div className="pt-4">
          {" "}
          <label>Are all shares issued?</label>
          <Form.Item hasFeedback>
            <Radio.Group>
              <Radio defaultChecked value="yes" className="!mt-3">
                <p className="text-white">Yes</p>{" "}
              </Radio>
              <br />
              <Radio value="no" className="!mt-4">
                <p className="text-white ">No</p>{" "}
              </Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        <div className="pt-4">
          <label>Number of issued shares</label>
          <Form.Item
            hasFeedback
            name="issuesShared"
            rules={[
              { required: true, message: "Please input your issues shared!" },
            ]}
          >
            <AppInput type="number" className="!mt-4 " />
          </Form.Item>
        </div>
        <div className="pt-4">
          <label>Values per shares </label>
          <Form.Item
            hasFeedback
            name="perShares"
            rules={[
              { required: true, message: "Please input your per shares!" },
            ]}
          >
            <AppInput type="number" className="!mt-4 " />
          </Form.Item>
        </div>
      </div>
    </FormLayout>
  );
};

export default SharesStructure;
