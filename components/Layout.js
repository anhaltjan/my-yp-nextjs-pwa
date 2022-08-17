import Footer from './Footer'
import Navbar from './Navbar'

import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className='all-content'>
      <Navbar />
      <main className='main-content'>
        <section className='page-content'>{children}</section>
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
