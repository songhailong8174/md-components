import Button from './button'
import Input from './input'
import Pagination from './pagination'
import Dialog from './dialog'
import TimeRange from './time/timeRange'
import Select from './select'
import Steps from './steps'

const components = [
  Button,
  Input,
  Pagination,
  Dialog,
  TimeRange,
  Select,
  Steps
]

const install = function install(Vue) {
  if (install.installed) {
    return
  }
  components.map((component) => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
