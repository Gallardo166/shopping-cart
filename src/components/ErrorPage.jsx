import { Link } from "react-router-dom"

const ErrorPage = function() {
  return (
    <div>
      <h1>Are you lost?</h1>
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default ErrorPage;