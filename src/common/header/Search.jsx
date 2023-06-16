import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search ' style={{background: "#97d6e6"}} >
        <div className='container c_flex'>
          <div className='logo '>
            <img src="https://png.pngtree.com/templates/sm/20171209/sm_5a2b7e01d3a25.jpg" alt='' style={{width: "60px", height: "60px", borderRadius: "50%",marginRight: "10rem"}}/>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='' style={{background: "white"}}/>
            <span >All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
