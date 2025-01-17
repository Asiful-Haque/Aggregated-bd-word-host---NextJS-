import About from "@/components/About"
import Footer from "@/components/Footer"
import Header_bangla from "@/components/Header_bangla"


const about = async() => {

  return (
    <div>
        <Header_bangla></Header_bangla>
        <About></About>
        <Footer></Footer>
    </div>
  )
}

export default about