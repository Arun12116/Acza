import React from 'react'
import "./Home.css"
import hi from '../../Assets/hi.mp4'
import Navbar from '../../Navbar/Navbar'
const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="home_container" >

        <video autoPlay muted loop style={{
          width: "100%", height: "auto",
          position: "relative"
        }} >

          <source src={hi} />
        </video>
        <div className="heading" style={{ position: "absolute", top: "50%", left: "0", right: "0", textAlign: "center" }}>
          <h1>Wlecome to Our Geeks-Store</h1>
          <p style={{ padding: "0 10rem" }}>Lorem ipsum dolor, sit amet Eos aliquam officiis dolor?
            ipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipitipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipitipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipitipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipitipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipitipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipitipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipitipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipitipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipitipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipitipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipitipsum dolor, sit amet Eos aliquam officiis dolor? Velit aspernatur suscipit
            Velit aspernatur suscipit provident laboriosam labore error delectus accusamus! Adipisci hic accusamus dicta maxime ullam, aut ipsam facere?</p>
          <button>Expolore More</button>

        </div>




      </div>

    </>
  )
}

export default Home