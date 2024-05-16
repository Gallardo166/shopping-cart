import PropTypes from "prop-types";

const Sidebar = function({ handleChangeCategory }) {

  return (
    <aside>
      <h2>Filters</h2>
      <fieldset>
        <legend>Categories:</legend>
        <input type="radio" name="category" id="all" onClick={(e) => handleChangeCategory(e.target.id)} defaultChecked/>
        <label htmlFor="all">All</label>
        <input type="radio" name="category" id="electronics" onClick={(e) => handleChangeCategory(e.target.id)} />
        <label htmlFor="electronics">Electronics</label>
        <input type="radio" name="category" id="jewelery" onClick={(e) => handleChangeCategory(e.target.id)} />
        <label htmlFor="jewelery">Jewelery</label>
        <input type="radio" name="category" id="men's clothing" onClick={(e) => handleChangeCategory(e.target.id)} />
        <label htmlFor="men's clothing">Men&apos;s Clothing</label>
        <input type="radio" name="category" id="women's clothing" onClick={(e) => handleChangeCategory(e.target.id)} />
        <label htmlFor="women's clothing">Women&apos;s Clothing</label>
      </fieldset>
    </aside>
  )
}

Sidebar.propTypes = {
  handleChangeCategory: PropTypes.func.isRequired,
}

export default Sidebar;