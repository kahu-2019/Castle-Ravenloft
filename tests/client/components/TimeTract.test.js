import { shallow } from 'enzyme';
import React from 'react'
import TimeTract from '../../../client/components/TimeTract'

const wrapper = shallow(<TimeTract />);
=

it('works', () => {
  const wrap = shallow(
    <TimeTract />
  )

  expect(wrap.find('div ').hasClass('board-container').to.equal(true))
})