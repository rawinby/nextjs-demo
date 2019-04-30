import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import '../assets/css/bootstrap.min.css'
import '../assets/css/nprogress.css'
import '../assets/css/style.css'

const Layout = (props) => (
    <div>
         <Head>
            <title>Title</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>


        <Header />
        <div className="container-fluid">
            {props.children}
            <Footer />
        </div>
       
    </div>
)
export default Layout
