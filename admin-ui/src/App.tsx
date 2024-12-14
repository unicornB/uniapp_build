import { useRoutes } from "react-router-dom"


import routes from "./router";

const App = () => {
  const outlet = useRoutes(routes)
  return (
    <> {outlet}</>
  )
}
export default App
