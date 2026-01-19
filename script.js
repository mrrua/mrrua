// Typing animation for rules on hover
document.querySelectorAll('.rule').forEach(rule => {
    const content = rule.querySelector('.rule-content');
    const originalText = content.getAttribute('data-text');
    let timeoutId = null;
    let isAnimating = false;

    rule.addEventListener('mouseenter', () => {
        if (isAnimating) return;
        isAnimating = true;
        
        content.classList.add('typing');
        content.textContent = '';
        
        let i = 0;
        const typeChar = () => {
            if (i < originalText.length) {
                content.textContent += originalText.charAt(i);
                i++;
                timeoutId = setTimeout(typeChar, 25);
            } else {
                // Keep cursor blinking for a moment after finishing
                timeoutId = setTimeout(() => {
                    content.classList.remove('typing');
                    isAnimating = false;
                }, 400);
            }
        };
        
        typeChar();
    });

    rule.addEventListener('mouseleave', () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        content.textContent = originalText;
        content.classList.remove('typing');
        isAnimating = false;
    });
});
