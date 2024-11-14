// Initialize local storage if empty
if (!localStorage.getItem('domains')) {
    localStorage.setItem('domains', JSON.stringify([
        {
            name: 'example.com',
            price: 999,
            description: 'A perfect domain for your showcase website',
            category: 'business'
        }
    ]));
}

if (!localStorage.getItem('adminPassword')) {
    localStorage.setItem('adminPassword', 'AZERqsdf1235@'); // Default password
}

// DOM Elements
const domainCardsContainer = document.getElementById('domain-cards');
const keywordInput = document.getElementById('keyword');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const adminBtn = document.getElementById('adminBtn');
const adminLoginModal = document.getElementById('adminLoginModal');
const adminPanelModal = document.getElementById('adminPanelModal');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

// Admin Functions
let isAdminLoggedIn = false;

function login() {
    const password = document.getElementById('adminPassword').value;
    if (password === localStorage.getItem('adminPassword')) {
        isAdminLoggedIn = true;
        adminLoginModal.style.display = 'none';
        adminPanelModal.style.display = 'block';
        loadDomainsForEditing();
    } else {
        alert('Incorrect password');
    }
}

function loadDomainsForEditing() {
    const domains = JSON.parse(localStorage.getItem('domains'));
    const domainsList = document.getElementById('domainsList');
    domainsList.innerHTML = domains.map((domain, index) => `
        <div class="domain-edit-item">
            <input type="text" value="${domain.name}" data-index="${index}" data-field="name">
            <input type="number" value="${domain.price}" data-index="${index}" data-field="price">
            <button onclick="deleteDomain(${index})">Delete</button>
        </div>
    `).join('');
}

function deleteDomain(index) {
    const domains = JSON.parse(localStorage.getItem('domains'));
    domains.splice(index, 1);
    localStorage.setItem('domains', JSON.stringify(domains));
    loadDomainsForEditing();
    renderDomains();
}

// Domain Management
function addDomain(event) {
    event.preventDefault();
    const domains = JSON.parse(localStorage.getItem('domains'));
    const newDomain = {
        name: document.getElementById('newDomainName').value,
        price: Number(document.getElementById('newDomainPrice').value),
        description: document.getElementById('newDomainDescription').value,
        category: document.getElementById('newDomainCategory').value
    };
    domains.push(newDomain);
    localStorage.setItem('domains', JSON.stringify(domains));
    document.getElementById('domainForm').reset();
    loadDomainsForEditing();
    renderDomains();
}

// Create domain card HTML
function createDomainCard(domain) {
    return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${domain.name}</h2>
            </div>
            <div class="card-content">
                <p>${domain.description}</p>
            </div>
            <div class="card-footer">
                <div class="price">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/GoDaddy_Logo.svg" alt="GoDaddy">
                    <span>$${domain.price}</span>
                </div>
                <button class="button" onclick="window.open('https://godaddy.com/domains/searchresults.aspx?checkAvail=1&domainToCheck=${domain.name}', '_blank')">
                    Buy on GoDaddy
                </button>
            </div>
        </div>
    `;
}

// Filter domains
function filterDomains() {
    const domains = JSON.parse(localStorage.getItem('domains'));
    const keyword = keywordInput.value.toLowerCase();
    const minPrice = Number(minPriceInput.value) || 0;
    const maxPrice = Number(maxPriceInput.value) || Infinity;

    return domains.filter(domain => {
        const matchesKeyword = domain.name.toLowerCase().includes(keyword) ||
                             domain.description.toLowerCase().includes(keyword) ||
                             domain.category.toLowerCase().includes(keyword);
        const matchesPrice = domain.price >= minPrice && 
                           (maxPrice === 0 || domain.price <= maxPrice);
        return matchesKeyword && matchesPrice;
    });
}

// Render domains
function renderDomains() {
    const filteredDomains = filterDomains();
    domainCardsContainer.innerHTML = filteredDomains
        .map(domain => createDomainCard(domain))
        .join('');
}

// Event Listeners
adminBtn.addEventListener('click', () => {
    if (!isAdminLoggedIn) {
        adminLoginModal.style.display = 'block';
    } else {
        adminPanelModal.style.display = 'block';
    }
});

document.getElementById('domainForm').addEventListener('submit', addDomain);

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

keywordInput.addEventListener('input', renderDomains);
minPriceInput.addEventListener('input', renderDomains);
maxPriceInput.addEventListener('input', renderDomains);

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === adminLoginModal) adminLoginModal.style.display = 'none';
    if (e.target === adminPanelModal) adminPanelModal.style.display = 'none';
});

// Initial render
renderDomains();
