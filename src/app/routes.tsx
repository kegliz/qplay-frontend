import Home from './pages/Home'
import Design from './pages/Design'
import Learn from './pages/Learn'


interface IPage {
  name: string
  route: string
  link: string
  state: string
  element: JSX.Element
}

export const ROUTE_HOME_STATE = 'Home'
export const ROUTE_HOME = '/'
export const ROUTE_DESIGN_STATE = 'Design'
export const ROUTE_DESIGN = '/design'
export const ROUTE_LEARN = '/learn'

export const pages: Array<IPage> = [
  { name: 'Home', route: "/", link: ROUTE_HOME, state: ROUTE_HOME_STATE, element: <Home /> },
  { name: 'Design', route: "design", link: ROUTE_DESIGN, state: 'Design', element: <Design /> },
  { name: 'Learn', route: "learn", link: ROUTE_LEARN, state: 'Learn', element: <Learn /> },
]

