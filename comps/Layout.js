import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header />
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;