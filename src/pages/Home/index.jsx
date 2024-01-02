import Logo from '../../components/Logo'
import Navbar from '../../components/Navbar'
//import Button from '../../components/Button'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
      <header>
        <Logo text={'Nimbus'}/>
        <Navbar />
      </header>
      <main>
        this is the home page
      </main>
      <Footer />
    </>
  )
}