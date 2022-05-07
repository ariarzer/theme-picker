const hue_input = document.querySelector('#hue');
hue_input && hue_input.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--current-hue', e.target.value)
})

const chroma_input = document.querySelector('#chroma');
chroma_input && chroma_input.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--current-chroma', e.target.value)
})

const lightness_input = document.querySelector('#lightness');
lightness_input && lightness_input.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--current-lightness', e.target.value + '%')
})
