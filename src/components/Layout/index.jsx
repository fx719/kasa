import { Outlet } from 'react-router-dom'
import './Layout.scss'
import Header from '../Header'
import Footer from '../Footer'
import { useEffect, useState } from 'react'

function Layout() {


    const [isMobileWidth, setIsMobileWidth] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 800) {
            setIsMobileWidth((isMobileWidth) => isMobileWidth = true)
        } else {
            setIsMobileWidth((isMobileWidth) => isMobileWidth = false)
        }
        const handleWindowResize = () => {
            if (window.innerWidth <= 800) {
                setIsMobileWidth((isMobileWidth) => isMobileWidth = true)
            } else {
                setIsMobileWidth((isMobileWidth) => isMobileWidth = false)
            }
        }

        window.addEventListener("resize", handleWindowResize)

        return (() => {

            window.removeEventListener("resize", handleWindowResize)
        })
    }, [])

    return (<>
        <div className='container'>
            <Header />
            <main>
                <Outlet context={[isMobileWidth, setIsMobileWidth]} />
            </main>
        </div>
        <Footer />
    </>
    )
}

export default Layout