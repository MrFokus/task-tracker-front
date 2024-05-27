export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('crop-content', {
        mounted(el: HTMLElement, binding) {
            el.style.overflow = 'hidden'
            el.style.display = 'flex'
            let deleteContent: Element[] = []
            let observerWidth = new ResizeObserver((targetElement) => {
                while (targetElement[0].target.clientWidth == targetElement[0].target.scrollWidth) {
                    if (deleteContent.length > 0) {
                        let lastElement = deleteContent.pop()
                        if (lastElement) {
                            el.appendChild(lastElement)
                        }
                        else break
                    }
                    else break
                }
                while (targetElement[0].target.clientWidth != targetElement[0].target.scrollWidth) {
                    if (el.children.length > 0) {
                        deleteContent.push(el.removeChild(el.children[el.children.length - 1]))
                    }
                    else break
                }
                if(binding.value && typeof binding.value == 'function')
                binding.value(deleteContent.length)
            })
            observerWidth.observe(el)

        },
    })
})