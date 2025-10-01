import Header from "@/Layout/Header"
import MarketAnalysis from "@/common/MarketAnalysis"
import ExternalisationForm from "@/common/ExteralisationForm"
import CreationMobileForm from "@/common/CreationMobileForm"
import DetailForm from "@/common/DetailForm"
import ContactForm from "@/common/ContactForm"


export default function Home(){
  return(
    <>
        <Header/>
        <ExternalisationForm/>
        <DetailForm/>
        <CreationMobileForm/>
        <MarketAnalysis/>
    </>
  )
}