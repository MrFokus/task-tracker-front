export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('out-click', {
        mounted(el, binding) {
            el.setAttribute('tabindex', 0)
            el.addEventListener('focusout', ({ currentTarget, relatedTarget }: any) => {
                if (currentTarget.contains(relatedTarget)) return;
                if (typeof binding.value === 'function') {
                    binding.value()
                }
            })
            el.focus()
        },
    })
})