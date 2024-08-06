import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Cv from "@/components/Cv.vue";

describe('Cv', () => {
  it('renders properly', () => {
    const wrapper = mount(Cv, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
