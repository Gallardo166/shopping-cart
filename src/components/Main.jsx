import { Link } from "react-router-dom";

const Main = function() {
  return (
    <div>
      <h1>LifeStore</h1>
      <p>Where convenience meets quality.</p>
      <img src="" alt="" />
      <Link to="../shop" role="button">
        Shop now
      </Link>
    </div>
  )
}

export default Main;