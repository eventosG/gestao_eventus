'use client';
import React, { useState, useEffect } from 'react';
import iro from '@jaames/iro';

function Manequim() { 
    useEffect(() => {
        const shirtImg = document.getElementById("shirtImg");
        const panstImg = document.getElementById("pantsImg");
        const shoesImg = document.getElementById("shoesImg");
        const targets = document.querySelectorAll("input[name='colors']");
    
        let colorTarget = "shirt";
        targets.forEach((target) => {
          target.addEventListener("change", () => {
            colorTarget = target.value;
          });
        });
    
        // Sliders
        var sliderPicker = new iro.ColorPicker("#sliderPicker", {
          width: 250,
          color: "{h: 35, s: 55, l: 91}",
          borderWidth: 1,
          borderColor: "#ccc",
          layout: [
            {
              component: iro.ui.Slider,
              options: {
                sliderType: "hue"
              }
            },
            {
              component: iro.ui.Slider,
              options: {
                sliderType: "saturation"
              }
            },
            {
              component: iro.ui.Slider,
              options: {
                sliderType: "value"
              }
            }
          ]
        });
    
        sliderPicker.on("color:change", (color) => {
          const hexString = color.hsl;
          let rotateH = 0;
          let rotateS = 50;
          let rotateL = 100;
          let cssString;
          switch (colorTarget) {
            case "shirt":
              rotateH = color.hsl.h - 35;
              rotateS = 100 + (color.hsl.s - 55);
              rotateL = 100 + (color.hsl.l - 91);
              cssString = `hue-rotate(${rotateH}deg) saturate(${rotateS}%) brightness(${rotateL}%)`;
              shirtImg.style.setProperty("filter", cssString);
              break;
            case "pants":
              rotateH = color.hsl.h - 218;
              rotateS = 100 + (color.hsl.s - 37);
              rotateL = 100 + (color.hsl.l - 64);
              cssString = `hue-rotate(${rotateH}deg) saturate(${rotateS}%) brightness(${rotateL}%)`;
              pantsImg.style.setProperty("filter", cssString);
              break;
            case "shoes":
              rotateH = color.hsl.h - 33;
              rotateS = 100 + (color.hsl.s - 13);
              rotateL = 100 + (color.hsl.l - 72);
              cssString = `hue-rotate(${rotateH}deg) saturate(${rotateS}%) brightness(${rotateL}%)`;
              shoesImg.style.setProperty("filter", cssString);
              break;
          }
        });
      }, []);

    return (
        <>
            <div id="container" className='flex flex-row'>
                <div id="sliderPicker">
                    <p>Escolha a cor para:</p>
                    <ul id="colorTarget">
                    <li>
                        <label class="label" for="shirt">
                        <input
                            type="radio"
                            id="shirt"
                            name="colors"
                            value="shirt"
                            checked
                        />Fundo
                        </label>
                    </li>
                    <li>
                        <label class="label" for="pants">
                        <input type="radio" id="pants" name="colors" value="pants" />Letras
                        </label>
                    </li>
                    <li>
                        <label class="label" for="shoes">
                        <input type="radio" id="shoes" name="colors" value="shoes" />Detalhes
                        </label>
                    </li>
                    </ul>
                    <div id="picker"></div>
                </div>
                <div id="model">
                    {/* <img
                    id="bodyImg"
                    src="https://assets.codepen.io/11614/body.png"
                    alt=""
                    />
                    <img
                    id="shoesImg"
                    src="https://assets.codepen.io/11614/shoes_1.png"
                    alt="shoes"
                    />
                    <img
                    id="pantsImg"
                    src="https://assets.codepen.io/11614/pants_1.png"
                    alt="pants"
                    />
                    <img
                    id="shirtImg"
                    src="https://assets.codepen.io/11614/shirt_1.png"
                    alt="Shirt"
                    /> */}
                </div>
                </div>
                <script src="https://assets.codepen.io/11614/iro.min.js"></script>
        </>
    );
}

export default Manequim