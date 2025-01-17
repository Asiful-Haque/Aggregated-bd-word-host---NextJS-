import Footer from "@/components/Footer"
import Header_bangla from "@/components/Header_bangla"
import Privacy from "@/components/Privacy"


const privacy = async() => {

  return (
    <div>
        <Header_bangla></Header_bangla>
        <Privacy></Privacy> {/* taking css from about.css */}
        <Footer></Footer>
    </div>
  )
}

export default privacy