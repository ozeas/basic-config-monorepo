import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '.';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button>{'Test'}</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
