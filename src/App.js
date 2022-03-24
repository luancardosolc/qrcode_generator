import images from "../src/components/Images";
import ImageCarousel from "../src/components/ImageCarousel";
export default function App() {
  return (
    <div className="App">
      <ImageCarousel images={images} />
    </div>
  );
}
