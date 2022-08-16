import Footer from './Footer'
import Navbar from './Navbar'
import Contact from './Contact'

const Layout = ({ children }) => {
  return (
    <div className='all-content'>
      <Navbar />
      <main className='main-content'>
        <section className='page-content'>{children}</section>

        <section className='contact-content'>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
