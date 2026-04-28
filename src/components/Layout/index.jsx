import { Outlet } from 'react-router-dom'
import './Layout.scss'
import Header from '../Header'
import Footer from '../Footer'


function Layout() {
    return (<>
        <div className='container'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
        <Footer />
    </>
    )
}

export default Layout