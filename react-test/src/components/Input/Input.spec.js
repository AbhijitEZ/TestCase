import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

describe("Link Test", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Input />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should have control", () => {
    let input = wrapper.find("input");
    expect(input.props().value).toBe("");
  });

  it("should call onChange state", () => {
    const event = {
      target: { value: "the-value", name: "name" }
    };
    wrapper.find("input").simulate("change", event);
    expect(wrapper.instance().state.name).toBe("the-value");
  });
});
