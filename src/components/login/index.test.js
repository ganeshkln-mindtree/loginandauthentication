import React from 'react';
import { shallow } from 'enzyme';
import Login from '../login';
import { shallowToJson } from 'enzyme-to-json';

const setup = propsoverrides => {
  const component = shallow(<Login />);
  return { component };
};

describe('test index', () => {
  const { component } = setup();
  it('test case', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('test case 3', () => {
    expect(component.exists()).toBe(true);
  });
  it('test case 2', () => {
    const spy = jest.spyOn(component.instance(), 'handleSubmit');
    component.instance().forceUpdate();
    component
      .find('button')
      .simulate('submit', { preventDefault() {} })
      .first();
    component.instance().handleSubmit({ preventDefault() {} });
    //console.log(handleSubmit.mock.calls.length);

    expect(spy).toHaveBeenCalled();
  });
});
