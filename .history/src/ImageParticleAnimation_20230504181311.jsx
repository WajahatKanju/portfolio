// import { useEffect } from "react";
import cartoonMe from './assets/cartoon.png'

export default function ImageParticleAnimation() {
  return <>
    <img src={cartoonMe} alt="me" />
    <canvas id="canvas"></canvas>
  </>;
}
