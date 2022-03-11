import Navbar from "./Navbar"

//Creacion del componente layout //
const Layout = ({children}) => (
<>
    <Navbar />
    {children}        
</>
)

export default Layout;