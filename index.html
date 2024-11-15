// Domain data
const domains = [
    { name: 'septiccompany.co', price: 2999, category: 'services', description: 'Perfect for septic service companies', age: 2 },
    { name: 'machineryrentalcompany.com', price: 3999, category: 'business', description: 'Ideal for equipment rental businesses', age: 3 },
    { name: 'homeinspectorspecialist.com', price: 2499, category: 'services', description: 'Premium domain for home inspection services', age: 1 },
    { name: 'environmentalremediationcompany.com', price: 4999, category: 'services', description: 'Environmental services domain', age: 2 },
    { name: 'riggingllc.com', price: 1999, category: 'business', description: 'Short, memorable domain for rigging companies', age: 4 },
    { name: 'homestagingllc.com', price: 1499, category: 'services', description: 'Perfect for home staging businesses', age: 2 },
    { name: 'floorcoatingservices.com', price: 2999, category: 'services', description: 'Specialized domain for flooring businesses', age: 1 },
    { name: 'stoneworkservices.com', price: 2499, category: 'services', description: 'Ideal for masonry and stonework companies', age: 3 },
    { name: 'aithought.co', price: 5999, category: 'tech', description: 'Premium AI-focused domain', age: 1 },
    { name: 'cognitiveagent.co', price: 4999, category: 'tech', description: 'Perfect for AI/ML companies', age: 1 },
    { name: 'guardbot.co', price: 3999, category: 'tech', description: 'Security/AI bot domain', age: 2 },
    { name: 'watertreatmentinc.com', price: 3499, category: 'services', description: 'Water treatment business domain', age: 3 },
    { name: 'phoenixsolarpanel.com', price: 2999, category: 'services', description: 'Solar energy business domain', age: 2 }
];

// Function to create domain cards
function createDomainCard(domain) {
    return `
        <div class="domain-card">
            <div class="domain-name">${domain.name}</div>
            <p>${domain.description}</p>
            <div class="domain-metrics">
                <span><i class="fas fa-calendar"></i> Age: ${domain.age}yr</span>
                <span><i class="fas fa-tag"></i> ${domain.category}</span>
            </div>
            <div class="domain-price">$${domain.price.toLocaleString()}</div>
            <div class="button-group">
                <a href="https://www.godaddy.com/domainsearch/find?domainToCheck=${domain.name}" 
                   class="btn btn-primary" target="_blank">Buy Now</a>
                <a href="mailto:info@pro-domains.com?subject=Offer for ${domain.name}" 
                   class="btn btn-secondary">Make Offer</a>
            </div>
        </div>
    `;
}

// Initialize domain grid
function initializeDomainGrid(filteredDomains = domains) {
    const domainsGrid = document.getElementById('domains');
    domainsGrid.innerHTML = filteredDomains.map(domain => createDomainCard(domain)).join('');
}

// Search functionality
const domainSearch = document.getElementById('domainSearch');
domainSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredDomains = domains.filter(domain => 
        domain.name.toLowerCase().includes(searchTerm) ||
        domain.description.toLowerCase().includes(searchTerm)
    );
    applyFilters(filteredDomains);
});

// Filter functionality
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');

function applyFilters(domains) {
    let filteredDomains = domains;

    // Apply category filter
    const category = categoryFilter.value;
    if (category) {
        filteredDomains = filteredDomains.filter(domain => domain.category === category);
    }

    // Apply price filter
    const priceRange = priceFilter.value;
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        filteredDomains = filteredDomains.filter(domain => domain.price >= min && (max === 0 || domain.price <= max));
    }

    initializeDomainGrid(filteredDomains);
}

categoryFilter.addEventListener('change', () => applyFilters(domains));
priceFilter.addEventListener('change', () => applyFilters(domains));

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.querySelector('i').classList.toggle('fa-sun');
    darkModeToggle.querySelector('i').classList.toggle('fa-moon');
});

// Initialize the domain grid
initializeDomainGrid();
