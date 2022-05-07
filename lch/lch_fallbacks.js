import LCHab2RGB from '../lib/LCHab2RGB.js';

const toRgbString = (rgb) => {
    return `rgb(${255 * rgb.R}, ${255 * rgb.G}, ${255 * rgb.B})`;
}

const isOutOfGamut = ({R, G, B}) => {
    return [R, G, B].reduce((acc, item) => {
        if (item > 1 || item < 0) {
            return acc || true;
        } else {
            return acc || false;
        }
    }, false);
}

export function fallbackHueGradient(currentLightness, currentChroma) {
    let gradient = 'linear-gradient(to right, ';
    for (let hue = 0; hue < 366; hue += 1) {
        const rgb = LCHab2RGB({
            L: currentLightness,
            C: currentChroma,
            H: hue,
        });
        if (isOutOfGamut(rgb)) {
            gradient += `${toRgbString({R: 0, G: 0, B: 0})}, `;
        } else {
            gradient += `${toRgbString(rgb)}, `;
        }
    }
    gradient = gradient.slice(0, -2) + ')';
    return gradient;
}


export function fallbackChromaGradient(currentLightness, currentHue) {
    let gradient = 'linear-gradient(to right, ';
    for (let chroma = 0; chroma < 150; chroma += 1) {
        const rgb = LCHab2RGB({
            L: currentLightness,
            C: chroma,
            H: currentHue,
        });
        if (isOutOfGamut(rgb)) {
            gradient += `${toRgbString({R: 0, G: 0, B: 0})}, `;
        } else {
            gradient += `${toRgbString(rgb)}, `;
        }
    }
    gradient = gradient.slice(0, -2) + ')';
    return gradient;
}

export function fallbackLightnessGradient (currentChroma, currentHue) {
    let gradient = 'linear-gradient(to right, ';
    for (let lightness = 0; lightness < 100; lightness += 1) {
        const rgb = LCHab2RGB({
            L: lightness,
            C: currentChroma,
            H: currentHue,
        });
        if (isOutOfGamut(rgb)) {
            gradient += `${toRgbString({R: 0, G: 0, B: 0})}, `;
        } else {
            gradient += `${toRgbString(rgb)}, `;
        }
    }
    gradient = gradient.slice(0, -2) + ')';
    return gradient;
}

console.log(fallbackHueGradient(50, 50));