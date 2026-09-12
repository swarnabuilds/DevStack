import { Suspense, useState } from "react"
import Banner from "./Componenets/Banner/Banner"
import Footer from "./Componenets/Footer/Footer"
import Nav from "./Componenets/Navbar/Nav"
import Technologies from "./Componenets/Technologies/Technologies"
import type { ITechnology } from "./index"
import { ToastContainer} from 'react-toastify';



const TechnologiesFetch = async():Promise<ITechnology[]> =>{
  const res = await fetch('/Technologics.json')
  const data = await res.json()
  return data
}
function App() {
const [technologyPromise] = useState(()=>TechnologiesFetch())

  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies technologyPromise={technologyPromise}></Technologies>
    </Suspense>
    <Footer></Footer>
    <ToastContainer />
    </>
  )
}

export default App
