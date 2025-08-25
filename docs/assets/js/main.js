// Main JavaScript for Hotel du Centre website

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize website
    initializeWebsite();
});

// Initialize website functionality
function initializeWebsite() {
    // Load dynamic content
    loadGallery();
    loadMenu();
    loadReviews();
    
    // Setup event listeners
    setupFormSubmission();
    setupSmoothScrolling();
    
    // Update dynamic content from data
    updateDynamicContent();
}

// Update dynamic content with current data
function updateDynamicContent() {
    const hotelInfo = dataManager.getHotelInfo();
    
    // Update hero description
    const heroDescription = document.getElementById('heroDescription');
    if (heroDescription) {
        heroDescription.textContent = hotelInfo.description;
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    // Handle navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Gallery functionality
let currentGalleryTab = 'restaurant';
let currentImageIndex = 0;
let currentImages = [];

function switchGalleryTab(tab) {
    currentGalleryTab = tab;
    
    // Update tab buttons
    document.querySelectorAll('.gallery-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load gallery content
    loadGallery();
}

function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryImages = dataManager.getGalleryImages();
    currentImages = galleryImages[currentGalleryTab] || [];
    
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    currentImages.forEach((image, index) => {
        const imageElement = document.createElement('div');
        imageElement.className = 'gallery-item';
        imageElement.onclick = () => openLightbox(index);
        
        imageElement.innerHTML = `
            <img src="${image.url}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-info">
                    <h3>${image.title}</h3>
                    <p>${image.description}</p>
                </div>
            </div>
        `;
        
        galleryGrid.appendChild(imageElement);
    });
}

// Lightbox functionality
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    
    const image = currentImages[currentImageIndex];
    
    lightboxImage.src = image.url;
    lightboxImage.alt = image.title;
    lightboxTitle.textContent = image.title;
    lightboxDescription.textContent = image.description;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    openLightbox(currentImageIndex);
}

function prevImage() {
    currentImageIndex = currentImageIndex === 0 ? currentImages.length - 1 : currentImageIndex - 1;
    openLightbox(currentImageIndex);
}

// Close lightbox on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Menu functionality
let currentMenuTab = 'entrees';

function switchMenuTab(tab) {
    currentMenuTab = tab;
    
    // Update tab buttons
    document.querySelectorAll('.menu-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load menu content
    loadMenu();
}

function loadMenu() {
    const menuContent = document.getElementById('menuContent');
    const menuData = dataManager.getMenuData();
    const items = menuData[currentMenuTab] || [];
    
    if (!menuContent) return;
    
    const categoryTitles = {
        entrees: 'Entrées',
        plats: 'Plats Principaux',
        desserts: 'Desserts'
    };
    
    const categoryIcons = {
        entrees: 'coffee',
        plats: 'chef-hat',
        desserts: 'cake'
    };
    
    menuContent.innerHTML = `
        <div class="menu-header">
            <h3>
                <i data-lucide="${categoryIcons[currentMenuTab]}"></i>
                <span>${categoryTitles[currentMenuTab]}</span>
            </h3>
        </div>
        <div class="menu-items">
            ${items.map(item => `
                <div class="menu-item">
                    <div class="menu-item-content">
                        <h4>${item.name}</h4>
                        <p>${item.description}</p>
                    </div>
                    <div class="menu-item-price">${item.price}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Reinitialize icons
    lucide.createIcons();
}

// Reviews functionality
function loadReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    const reviewsData = dataManager.getReviews();
    
    if (!reviewsGrid) return;
    
    reviewsGrid.innerHTML = '';
    
    reviewsData.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-card';
        
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        
        reviewElement.innerHTML = `
            <div class="review-quote">"</div>
            <div class="review-header">
                <div class="review-user">
                    <div class="review-avatar">${review.name.charAt(0)}</div>
                    <div class="review-info">
                        <h4>${review.name}</h4>
                        <div class="review-meta">
                            <div class="review-stars">${stars}</div>
                            <span class="review-date">${review.date}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="review-comment">${review.comment}</div>
        `;
        
        reviewsGrid.appendChild(reviewElement);
    });
}

// Contact form functionality
function setupFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const reservation = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone') || '',
                guests: formData.get('guests') || '',
                date: formData.get('date') || '',
                message: formData.get('message') || ''
            };
            
            // Save reservation
            const success = dataManager.addReservation(reservation);
            
            if (success) {
                showToast('Demande envoyée !', 'Nous vous recontacterons rapidement.');
                contactForm.reset();
            } else {
                showToast('Erreur', 'Une erreur est survenue. Veuillez réessayer.', 'error');
            }
        });
    }
}

// Toast notification
function showToast(title, message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastTitle = toast.querySelector('.toast-title');
    const toastMessage = toast.querySelector('.toast-message');
    
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    // Update icon based on type
    const icon = toast.querySelector('i');
    if (type === 'error') {
        icon.setAttribute('data-lucide', 'alert-circle');
        toast.style.borderLeftColor = '#dc2626';
    } else {
        icon.setAttribute('data-lucide', 'check-circle');
        toast.style.borderLeftColor = '#10b981';
    }
    
    // Recreate icons
    lucide.createIcons();
    
    // Show toast
    toast.classList.add('show');
    
    // Hide after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Header scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .gallery-item, .review-card, .menu-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.footer-copyright');
    
    copyrightElements.forEach(el => {
        el.innerHTML = el.innerHTML.replace('2025', currentYear);
    });
});