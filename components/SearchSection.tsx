import Categories from "./Categories"


const SearchSection = () => {
  return (
    <section>
    <Categories />
    <h3>Explore the world’s leading design portfolios</h3>
    <p>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</p>
    <form className="">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
          required
          className=""
        />
      </form>
    </section>
  )
}

export default SearchSection