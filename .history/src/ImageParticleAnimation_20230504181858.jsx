import { useEffect, useRef } from "react";
import cartoonMe from './assets/cartoon.png';

export default function ImageParticleAnimation() {

  const canvasRef = useRef();

  useEffect(() => {
    
  }, [])
  return <>
    <img src={cartoonMe} alt="me" />
    <canvas ref={canvasRef} id="canvas"></canvas>
  </>;
}
