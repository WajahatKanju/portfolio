import 'animate.css';

import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "./styles/Header.scss";

function Header() {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: ["Web Designer", "Web Developer", "Full Stack Developer"],
      loop: true,
      delay: 80,
      autoStart: true,
    });

    typewriter.start();
  }, []);

  function addClassesToText(text, className) {
    return Array.from(text).map((char, index) => (
      <span key={index} className={className}>
        {char}
      </span>
    ));
  }


  const headerText = addClassesToText('Hi! I Am Wajahat Ahmad', ' animate__bounce');
  const sloganText = addClassesToText('Turning ideas into interactive realities', 'animate__bounce');

  return (
    <header className="header">
      <div className="header__left">
        <h1>{headerText}</h1>
        <p id="typewriter"></p>
        <h3>{sloganText}</h3>
      </div>
      <div className="header__right">
        <img src="" alt="" />
        <canvas id="picture_canvas"></canvas>
      </div>
    </header>
  );
}

export default Header;
