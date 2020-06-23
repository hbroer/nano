import Nano, { Component } from '../lib/index.js'
import { wait } from './helpers.js'

const spy = jest.spyOn(global.console, 'error')

test('should render without errors', async (done) => {
  class Test extends Component {
    render() {
      return <div>test</div>
    }
  }
  const res = Nano.render(<Test />)

  await wait()
  expect(res.outerHTML).toBe('<div>test</div>')
  expect(spy).not.toHaveBeenCalled()
  done()
})

test('should render without errors', async (done) => {
  class Test extends Component {
    test() {
      return 'yeah'
    }
  }
  const test = new Test()

  await wait()
  // @ts-ignore
  expect(test.render()).toBe(undefined)
  // @ts-ignore
  expect(test.update()).toBe(undefined)
  expect(test.test()).toBe('yeah')
  expect(spy).not.toHaveBeenCalled()
  done()
})
