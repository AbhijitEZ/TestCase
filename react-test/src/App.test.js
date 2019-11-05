import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Link from "./components/Link/Link";
import Input from './components/Input/Input'


describe("App", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
  
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("Child Component", () => {
    expect(wrapper.containsMatchingElement(<Link>ClickMe</Link>)).toEqual(
      true
    );
    expect(wrapper.containsMatchingElement(<Input />)).toEqual(
      true
    );
  });
});
