// Admin panel JavaScript for Hotel du Centre

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    checkAuthentication();
});

// Global variables
let currentMenuCategory = 'entrees';
let currentMenuItemId = null;
let currentReviewId = null;
const ADMIN_PASSWORD = 'menu2025';

// Check authentication
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated');
    
    if (isAuthenticated === 'true') {
        showAdminPanel();
    } else {
        showLoginModal();
    }
}

// Show login modal
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('adminContainer').style.display = 'none';
    
    // Setup login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    
    const password = document.getElementById('adminPassword').value;
    const errorElement = document.getElementById('loginError');
    
    if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('adminAuthenticated', 'true');
        showAdminPanel();
    } else {
        errorElement.style.display = 'block';
        document.getElementById('adminPassword').value = '';
        document.getElementById('adminPassword').focus();
    }
}

// Show admin panel
function showAdminPanel() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('adminContainer').style.display = 'block';
    initializeAdmin();
}

// Logout function
function logout() {
    sessionStorage.removeItem('adminAuthenticated');
    location.reload();
}

// Initialize admin functionality
function initializeAdmin() {
    loadMenuSection();
    loadReviewsSection();
    loadInfoSection();
    loadReservationsSection();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Menu form submission
    const menuForm = document.getElementById('menuForm');
    if (menuForm) {
        menuForm.addEventListener('submit', handleMenuFormSubmit);
    }

    // Review form submission
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewFormSubmit);
    }

    // Info form changes
    setupInfoFormListeners();
}

// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const section = document.getElementById(sectionId + 'Section');
    if (section) {
        section.classList.add('active');
    }

    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Load section content
    switch(sectionId) {
        case 'menu':
            loadMenuSection();
            break;
        case 'reviews':
            loadReviewsSection();
            break;
        case 'info':
            loadInfoSection();
            break;
        case 'reservations':
            loadReservationsSection();
            break;
    }
}

// Menu Management
function switchAdminMenuTab(category) {
    currentMenuCategory = category;
    
    // Update tab buttons
    document.querySelectorAll('.menu-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update category title
    const categoryTitles = {
        entrees: 'Entrées',
        plats: 'Plats Principaux',
        desserts: 'Desserts'
    };
    
    document.getElementById('categoryTitle').textContent = categoryTitles[category];
    
    // Load menu items
    loadMenuItems();
}

function loadMenuSection() {
    loadMenuItems();
}

function loadMenuItems() {
    const menuItems = document.getElementById('menuItems');
    const menuData = dataManager.getMenuData();
    const items = menuData[currentMenuCategory] || [];
    
    if (!menuItems) return;
    
    menuItems.innerHTML = '';
    
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item-card';
        
        itemElement.innerHTML = `
            <div class="menu-item-header">
                <div class="menu-item-info">
                    <h4>${item.name}</h4>
                    <div class="menu-item-price">${item.price}</div>
                </div>
            </div>
            <div class="menu-item-description">${item.description}</div>
            <div class="menu-item-actions">
                <button class="btn btn-small btn-outline" onclick="editMenuItem(${item.id})">
                    <i data-lucide="edit"></i>
                    Modifier
                </button>
                <button class="btn btn-small btn-danger" onclick="deleteMenuItem(${item.id})">
                    <i data-lucide="trash-2"></i>
                    Supprimer
                </button>
            </div>
        `;
        
        menuItems.appendChild(itemElement);
    });
    
    lucide.createIcons();
}

function addMenuItem() {
    currentMenuItemId = null;
    document.getElementById('menuModalTitle').textContent = 'Ajouter un plat';
    document.getElementById('menuForm').reset();
    document.getElementById('menuModal').classList.add('active');
}

function editMenuItem(itemId) {
    const menuData = dataManager.getMenuData();
    const item = menuData[currentMenuCategory].find(i => i.id === itemId);
    
    if (!item) return;
    
    currentMenuItemId = itemId;
    document.getElementById('menuModalTitle').textContent = 'Modifier le plat';
    document.getElementById('menuItemName').value = item.name;
    document.getElementById('menuItemPrice').value = item.price;
    document.getElementById('menuItemDescription').value = item.description;
    document.getElementById('menuModal').classList.add('active');
}

function deleteMenuItem(itemId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce plat ?')) {
        const success = dataManager.deleteMenuItem(currentMenuCategory, itemId);
        if (success) {
            loadMenuItems();
            showToast('Plat supprimé', 'Le plat a été supprimé avec succès.');
        } else {
            showToast('Erreur', 'Impossible de supprimer le plat.', 'error');
        }
    }
}

function handleMenuFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const item = {
        name: formData.get('name'),
        price: formData.get('price'),
        description: formData.get('description') || ''
    };
    
    let success;
    if (currentMenuItemId) {
        success = dataManager.updateMenuItem(currentMenuCategory, currentMenuItemId, item);
    } else {
        success = dataManager.addMenuItem(currentMenuCategory, item);
    }
    
    if (success) {
        closeMenuModal();
        loadMenuItems();
        showToast('Succès', currentMenuItemId ? 'Plat modifié avec succès.' : 'Plat ajouté avec succès.');
    } else {
        showToast('Erreur', 'Impossible de sauvegarder le plat.', 'error');
    }
}

function closeMenuModal() {
    document.getElementById('menuModal').classList.remove('active');
    currentMenuItemId = null;
}

// Reviews Management
function loadReviewsSection() {
    loadReviews();
    updateReviewsStats();
}

function loadReviews() {
    const reviewsList = document.getElementById('reviewsList');
    const reviews = dataManager.getReviews();
    
    if (!reviewsList) return;
    
    reviewsList.innerHTML = '';
    
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-card';
        
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        
        reviewElement.innerHTML = `
            <div class="review-header">
                <div class="review-user">
                    <div class="review-avatar">${review.name.charAt(0)}</div>
                    <div class="review-user-info">
                        <h4>${review.name}</h4>
                        <div class="review-meta">
                            <span class="review-stars">${stars}</span>
                            <span>${review.date}</span>
                        </div>
                    </div>
                </div>
                <div class="review-actions">
                    <button class="btn btn-small btn-outline" onclick="editReview(${review.id})">
                        <i data-lucide="edit"></i>
                        Modifier
                    </button>
                    <button class="btn btn-small btn-danger" onclick="deleteReview(${review.id})">
                        <i data-lucide="trash-2"></i>
                        Supprimer
                    </button>
                </div>
            </div>
            <div class="review-comment">${review.comment}</div>
        `;
        
        reviewsList.appendChild(reviewElement);
    });
    
    lucide.createIcons();
}

function updateReviewsStats() {
    const reviews = dataManager.getReviews();
    const hotelInfo = dataManager.getHotelInfo();
    
    // Calculate average rating
    const avgRating = reviews.length > 0 
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : '0.0';
    
    document.getElementById('avgRating').textContent = avgRating;
    document.getElementById('totalReviews').textContent = hotelInfo.reviewCount;
    document.getElementById('displayedReviews').textContent = reviews.length;
}

function addReview() {
    currentReviewId = null;
    document.getElementById('reviewModalTitle').textContent = 'Ajouter un avis';
    document.getElementById('reviewForm').reset();
    document.getElementById('reviewModal').classList.add('active');
}

function editReview(reviewId) {
    const review = dataManager.getReviews().find(r => r.id === reviewId);
    
    if (!review) return;
    
    currentReviewId = reviewId;
    document.getElementById('reviewModalTitle').textContent = 'Modifier l\'avis';
    document.getElementById('reviewName').value = review.name;
    document.getElementById('reviewRating').value = review.rating;
    document.getElementById('reviewDate').value = review.date;
    document.getElementById('reviewComment').value = review.comment;
    document.getElementById('reviewModal').classList.add('active');
}

function deleteReview(reviewId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet avis ?')) {
        const success = dataManager.deleteReview(reviewId);
        if (success) {
            loadReviews();
            updateReviewsStats();
            showToast('Avis supprimé', 'L\'avis a été supprimé avec succès.');
        } else {
            showToast('Erreur', 'Impossible de supprimer l\'avis.', 'error');
        }
    }
}

function handleReviewFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const review = {
        name: formData.get('name'),
        rating: parseInt(formData.get('rating')),
        date: formData.get('date') || 'Récemment',
        comment: formData.get('comment')
    };
    
    let success;
    if (currentReviewId) {
        success = dataManager.updateReview(currentReviewId, review);
    } else {
        success = dataManager.addReview(review);
    }
    
    if (success) {
        closeReviewModal();
        loadReviews();
        updateReviewsStats();
        showToast('Succès', currentReviewId ? 'Avis modifié avec succès.' : 'Avis ajouté avec succès.');
    } else {
        showToast('Erreur', 'Impossible de sauvegarder l\'avis.', 'error');
    }
}

function closeReviewModal() {
    document.getElementById('reviewModal').classList.remove('active');
    currentReviewId = null;
}

// Info Management
function loadInfoSection() {
    const hotelInfo = dataManager.getHotelInfo();
    
    // Populate form fields
    document.getElementById('hotelName').value = hotelInfo.name;
    document.getElementById('hotelSubtitle').value = hotelInfo.subtitle;
    document.getElementById('hotelDescription').value = hotelInfo.description;
    document.getElementById('hotelPhone').value = hotelInfo.phone;
    document.getElementById('hotelEmail').value = hotelInfo.email;
    document.getElementById('hotelAddress').value = hotelInfo.address;
    document.getElementById('googleRating').value = hotelInfo.rating;
    document.getElementById('googleReviewCount').value = hotelInfo.reviewCount;
    
    // Populate hours
    document.getElementById('hoursMonday').value = hotelInfo.hours.monday;
    document.getElementById('hoursTuesday').value = hotelInfo.hours.tuesday;
    document.getElementById('hoursWednesday').value = hotelInfo.hours.wednesday;
    document.getElementById('hoursThursday').value = hotelInfo.hours.thursday;
    document.getElementById('hoursFriday').value = hotelInfo.hours.friday;
    document.getElementById('hoursSaturday').value = hotelInfo.hours.saturday;
    document.getElementById('hoursSunday').value = hotelInfo.hours.sunday;
}

function setupInfoFormListeners() {
    // Add change listeners to all info form fields
    const fields = [
        'hotelName', 'hotelSubtitle', 'hotelDescription', 'hotelPhone', 'hotelEmail', 'hotelAddress',
        'googleRating', 'googleReviewCount', 'hoursMonday', 'hoursTuesday', 'hoursWednesday',
        'hoursThursday', 'hoursFriday', 'hoursSaturday', 'hoursSunday'
    ];
    
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('change', saveInfoChanges);
            field.addEventListener('blur', saveInfoChanges);
        }
    });
}

function saveInfoChanges() {
    const updatedInfo = {
        name: document.getElementById('hotelName').value,
        subtitle: document.getElementById('hotelSubtitle').value,
        description: document.getElementById('hotelDescription').value,
        phone: document.getElementById('hotelPhone').value,
        email: document.getElementById('hotelEmail').value,
        address: document.getElementById('hotelAddress').value,
        rating: parseFloat(document.getElementById('googleRating').value) || 4.7,
        reviewCount: parseInt(document.getElementById('googleReviewCount').value) || 365,
        hours: {
            monday: document.getElementById('hoursMonday').value,
            tuesday: document.getElementById('hoursTuesday').value,
            wednesday: document.getElementById('hoursWednesday').value,
            thursday: document.getElementById('hoursThursday').value,
            friday: document.getElementById('hoursFriday').value,
            saturday: document.getElementById('hoursSaturday').value,
            sunday: document.getElementById('hoursSunday').value
        }
    };
    
    const success = dataManager.updateHotelInfo(updatedInfo);
    if (!success) {
        showToast('Erreur', 'Impossible de sauvegarder les modifications.', 'error');
    }
}

// Reservations Management
function loadReservationsSection() {
    loadReservations();
}

function loadReservations(filter = 'all') {
    const reservationsList = document.getElementById('reservationsList');
    const reservations = dataManager.getReservations();
    
    if (!reservationsList) return;
    
    // Filter reservations
    let filteredReservations = reservations;
    if (filter !== 'all') {
        filteredReservations = reservations.filter(r => r.status === filter);
    }
    
    reservationsList.innerHTML = '';
    
    if (filteredReservations.length === 0) {
        reservationsList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #64748b;">
                <i data-lucide="calendar-x" style="width: 48px; height: 48px; margin-bottom: 1rem;"></i>
                <p>Aucune réservation trouvée.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    filteredReservations.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    filteredReservations.forEach(reservation => {
        const reservationElement = document.createElement('div');
        reservationElement.className = 'reservation-card';
        
        const statusClass = `status-${reservation.status}`;
        const statusText = {
            pending: 'En attente',
            confirmed: 'Confirmée',
            cancelled: 'Annulée'
        }[reservation.status] || 'En attente';
        
        const createdDate = new Date(reservation.createdAt).toLocaleDateString('fr-FR');
        
        reservationElement.innerHTML = `
            <div class="reservation-header">
                <div class="reservation-info">
                    <h4>${reservation.name}</h4>
                    <div class="reservation-details">
                        <span>Email: ${reservation.email}</span>
                        ${reservation.phone ? ` • Tél: ${reservation.phone}` : ''}
                        ${reservation.guests ? ` • ${reservation.guests} convive(s)` : ''}
                        ${reservation.date ? ` • Date: ${reservation.date}` : ''}
                        <br>
                        <small>Demande reçue le ${createdDate}</small>
                    </div>
                </div>
                <div>
                    <div class="reservation-status ${statusClass}">${statusText}</div>
                    <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem;">
                        <select onchange="updateReservationStatus(${reservation.id}, this.value)" style="padding: 0.25rem; font-size: 0.75rem;">
                            <option value="pending" ${reservation.status === 'pending' ? 'selected' : ''}>En attente</option>
                            <option value="confirmed" ${reservation.status === 'confirmed' ? 'selected' : ''}>Confirmée</option>
                            <option value="cancelled" ${reservation.status === 'cancelled' ? 'selected' : ''}>Annulée</option>
                        </select>
                        <button class="btn btn-small btn-danger" onclick="deleteReservation(${reservation.id})">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                </div>
            </div>
            ${reservation.message ? `
                <div class="reservation-message">
                    <strong>Message:</strong> ${reservation.message}
                </div>
            ` : ''}
        `;
        
        reservationsList.appendChild(reservationElement);
    });
    
    lucide.createIcons();
}

function filterReservations(filter) {
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load filtered reservations
    loadReservations(filter);
}

function updateReservationStatus(reservationId, status) {
    const success = dataManager.updateReservationStatus(reservationId, status);
    if (success) {
        showToast('Statut mis à jour', 'Le statut de la réservation a été modifié.');
    } else {
        showToast('Erreur', 'Impossible de mettre à jour le statut.', 'error');
    }
}

function deleteReservation(reservationId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette réservation ?')) {
        const success = dataManager.deleteReservation(reservationId);
        if (success) {
            loadReservations();
            showToast('Réservation supprimée', 'La réservation a été supprimée avec succès.');
        } else {
            showToast('Erreur', 'Impossible de supprimer la réservation.', 'error');
        }
    }
}

// Save all data
function saveAllData() {
    const success = dataManager.saveData();
    if (success) {
        showToast('Données sauvegardées', 'Toutes les modifications ont été sauvegardées.');
    } else {
        showToast('Erreur de sauvegarde', 'Impossible de sauvegarder les données.', 'error');
    }
}

// Toast notification
function showToast(title, message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastTitle = toast.querySelector('.toast-title');
    const toastMessage = document.getElementById('toastMessage');
    
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    // Update icon based on type
    const icon = toast.querySelector('i');
    if (type === 'error') {
        icon.setAttribute('data-lucide', 'alert-circle');
        toast.style.borderLeftColor = '#dc2626';
        toast.querySelector('.toast-content i').style.color = '#dc2626';
    } else {
        icon.setAttribute('data-lucide', 'check-circle');
        toast.style.borderLeftColor = '#10b981';
        toast.querySelector('.toast-content i').style.color = '#10b981';
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

// Modal close on background click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        if (e.target.id === 'menuModal') {
            closeMenuModal();
        } else if (e.target.id === 'reviewModal') {
            closeReviewModal();
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMenuModal();
        closeReviewModal();
    }
    
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        saveAllData();
    }
});