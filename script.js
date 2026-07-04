document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mouse Follow Glow Mechanics
    const glow = document.getElementById("mouseGlow");
    if (glow) {
        document.addEventListener("mousemove", (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    }

    // 2. Clear Theme Toggle (Top Right)
    const toggle = document.getElementById("themeToggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            toggle.innerHTML = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
        });
    }

    // 3. Interactive Modal / Popup Actions
    const contactNav = document.getElementById("contactNavLink");
    const footerContactBtn = document.getElementById("footerContactBtn");
    const modal = document.getElementById("contactModal");
    const closeModal = document.getElementById("closeModal");
    const emailForm = document.getElementById("emailForm");

    // Function to show the popup
    const openModalHandler = (e) => {
        e.preventDefault();
        if (modal) modal.classList.add("active");
    };

    // Trigger popup on top navigation link click
    if (contactNav) contactNav.addEventListener("click", openModalHandler);
    
    // Trigger popup on bottom footer button click
    if (footerContactBtn) footerContactBtn.addEventListener("click", openModalHandler);

    // Close popup when clicking the 'X' button
    if (closeModal && modal) {
        closeModal.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }

    // Close popup automatically if user clicks anywhere outside the glass box
    window.addEventListener("click", (e) => {
        if (modal && e.target === modal) {
            modal.classList.remove("active");
        }
    });

    // Handle Form Submission and launch user's email client
    if (emailForm && modal) {
        emailForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("senderName").value;
            const msg = document.getElementById("mailMessage").value;
            
            const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
            const body = encodeURIComponent(`Hi Akhilesh,\n\n${msg}\n\nBest regards,\n${name}`);
            
            // Open default mail client pre-filled (replace with your real email!)
            window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
            
            // Clean up and close the overlay
            modal.classList.remove("active");
            emailForm.reset();
        });
    }
    // 5. Logo Auto-Flipper Engine (Swaps every 2000ms / 2 seconds)
    const flipper = document.getElementById("logoFlipper");
    if (flipper) {
        const imgElement = flipper.querySelector(".brand-img");
        const textElement = flipper.querySelector(".brand-text");

        setInterval(() => {
            if (imgElement.classList.contains("active")) {
                // Switch from Image to Text
                imgElement.classList.remove("active");
                textElement.classList.add("active");
            } else {
                // Switch from Text to Image
                textElement.classList.remove("active");
                imgElement.classList.add("active");
            }
        }, 2000); // 2000 milliseconds = 2 seconds
    }
});