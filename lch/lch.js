import {
    fallbackHueGradient,
    fallbackChromaGradient,
    fallbackLightnessGradient
} from './lch_fallbacks.js';

let currentHue = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--current-hue'));
let currentChroma = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--current-chroma'));
let currentLightness = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--current-lightness'));

const updateGradients = (currentLightness, currentChroma, currentHue) => {
    console.log(currentChroma);
    document.documentElement.style.setProperty(
        '--fallback-hue-gradient',
        fallbackHueGradient(currentLightness, currentChroma)
    );
    document.documentElement.style.setProperty(
        '--fallback-chroma-gradient',
        fallbackChromaGradient(currentLightness, currentHue)
    );
    document.documentElement.style.setProperty(
        '--fallback-lightness-gradient',
        fallbackLightnessGradient(currentChroma, currentHue)
    );
}

updateGradients(currentLightness, currentChroma, currentHue);

const hue_input = document.querySelector('#hue');
hue_input && hue_input.addEventListener('input', (e) => {
    currentHue = e.target.value;
    document.documentElement.style.setProperty('--current-hue', currentHue);
    updateGradients(currentLightness, currentChroma, currentHue);
})

const chroma_input = document.querySelector('#chroma');
chroma_input && chroma_input.addEventListener('input', (e) => {
    currentChroma = e.target.value;
    document.documentElement.style.setProperty('--current-chroma', currentChroma);
    updateGradients(currentLightness, currentChroma, currentHue);
})

const lightness_input = document.querySelector('#lightness');
lightness_input && lightness_input.addEventListener('input', (e) => {
    currentLightness = e.target.value;
    document.documentElement.style.setProperty('--current-lightness', currentLightness + '%');
    updateGradients(currentLightness, currentChroma, currentHue);
})


