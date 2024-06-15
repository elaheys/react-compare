import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
//image
import image1 from "./assets/photographer.jpg"


function App() {

  return (
    <div >
      <ReactCompareSlider position={30} 
      itemOne={<ReactCompareSliderImage src={image1} alt="Image1" />} 
      itemTwo={<ReactCompareSliderImage style={{filter:"grayscale(100%)"}} src={image1} alt="Image2" />} 
      style={{width: '100%',height: '90vh',borderRadius:"10px"}} />
    </div>
  )
}

export default App
