import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Head = () => {
  return (
    <>
      <section className='head' style={{background: "rgb(4,82,102)"}}>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 9591828175</label>
            <i className='fa fa-envelope'></i>
            <label> akkiakhill008@gmail.com</label>
          </div>
          <div className='right row RText'>
            <Link style={{color: "white", marginRight: "2rem"}}>FAQ"s</Link>
            <Link style={{color: "white", marginRight: "2rem"}}>Need Help?</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
