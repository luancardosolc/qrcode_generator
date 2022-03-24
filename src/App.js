import "./App.css";
import QRCode from "qrcode.react";
import * as api from "./api";
import { useEffect, useState } from "react";
import ImageCarousel from "../src/components/ImageCarousel";
import { Button } from "@mui/material";
// import images from "../src/components/Images";

export default function App() {
  // Início Comentar para testes
	const [images, setImages] = useState([]);

	const getImgs = async () => {
		const data = await api.getImgs();
		setImages(data);
		console.log("data", data);
	};

	useEffect(() => {
		getImgs();
	}, []);
  // Fim Comentar para testes

  // Atualizar imgs frequentementes para atualizar a tela em caso de roubo
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getImgs();
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

	return (
		<div className="App">
      {images.length > 0 ? 
			(<><ImageCarousel images={images} /><div id="QRCodeWrapper">
          <QRCode id="QRCode" value="https://572e-201-49-245-32.ngrok.io/api/SafeBox/HackSafeBox/1" />
          <p>QR Code para abrir o Cofre</p>
        </div></>) : (<p>Sem imgs</p>)}
        <Button href="https://572e-201-49-245-32.ngrok.io/api/SafeBox/HackSafeBox/2">Roubar de Volta</Button>
        <Button onClick={getImgs}>Atualizar</Button>
		</div>
	);
}
