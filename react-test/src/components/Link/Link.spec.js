import React from "react";
import { shallow } from "enzyme";
import Link from "./Link";

describe("Link Test", () => {
  let wrapper;
  
  beforeEach(() => (wrapper = shallow(<Link>Test</Link>)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should have expected initial value", () => {
    expect(wrapper.instance().state.clicked).toEqual(false);
  });
  it("button click event", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.instance().state.clicked).toEqual(true);
  });

  it("Asynchronous", async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    expect(res.statusText).toBe("OK");
  });

});
