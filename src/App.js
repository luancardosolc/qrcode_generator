import "./App.css";
import QRCode from "qrcode.react";
import * as api from "./api";
import { useEffect, useState } from "react";
import ImageCarousel from "../src/components/ImageCarousel";
import images from "../src/components/Images";

export default function App() {
	// const [images, setImages] = useState([]);

	// const getImgs = async () => {
	// 	const data = await api.getImgs();
	// 	// var ids = data.map(function(item) {
	// 	//   return item['id'];
	// 	// });
	// 	setImages(data);
	// 	console.log("data", data);
	// };

	// useEffect(() => {
	// 	getImgs();
	// }, []);

	return (
		<div className="App">
			<ImageCarousel images={images} />
      <div id="QRCodeWrapper">
			  <QRCode id="QRCode" value="shorturl.at/btBO3" />
      </div>
		</div>
	);
}
