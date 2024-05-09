import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from './components'
import CloudBottom from '/assets/cloud_bottom.png'

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative bg-auto bg-repeat-round bg-initial" style={{ backgroundImage: `url(${CloudBottom})` }}>
          <StarsCanvas className='relative z-10' />
          <Contact className='relative z-20' />
          <Footer className='relative z-30' />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
