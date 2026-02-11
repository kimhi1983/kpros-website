document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');

        // Update Buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update Content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
    });
});
