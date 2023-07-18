import React from 'react'
import "./Home.css"
import bg4 from '../../Assets/bg4.mp4'
const Home = () => {
  return (
    <>
      <div className="home_container" >

        <video autoPlay muted loop style={{
          width: "100%", height: "100vh",
          position: "relative"
        }} >

          <source src={bg4} />
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