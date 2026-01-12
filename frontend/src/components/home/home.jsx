import Inicial from '../inicial/inicial'
import About from '../about/about'
function Home() {
  return (
    <div>
      <section className='flex h-screen items-center justify-center'>
          <Inicial />
      </section>
      <section className='h-screen flex'>
        <About />
      </section>
    </div>
  )
}

export default Home
