window.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.image-container')

    imageContainers.forEach(container => {
        const overlay = container.querySelector('.overlay')

        container.addEventListener('click', () => {
            if (overlay.style.opacity === '1') {
                overlay.style.opacity = '0'
            } else {
                overlay.style.opacity = '1'
            }
        })
    })
})
