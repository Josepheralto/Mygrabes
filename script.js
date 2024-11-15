
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


function initializeDomainGrid(domainsToDisplay = domains) {
    const domainsGrid = document.getElementById('domains');
    domainsGrid.innerHTML = domainsToDisplay.map(createDomainCard).join('');
}


const domainSearch = document.getElementById('domainSearch');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    const searchTerm = domainSearch.value.toLowerCase();
    const filteredDomains = domains.filter(domain =>
        domain.name.toLowerCase().includes(searchTerm) ||
        domain.description.toLowerCase().includes(searchTerm)
    );
    initializeDomainGrid(filteredDomains);
});



const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');

function applyFilters() {
    let filteredDomains = domains;

    const selectedCategory = categoryFilter.value;
    if (selectedCategory) {
        filteredDomains = filteredDomains.filter(domain => domain.category === selectedCategory);
    }

    const selectedPriceRange = priceFilter.value;
    if (selectedPriceRange) {
        const [minPrice, maxPriceStr] = selectedPriceRange.split('-');
        const maxPrice = maxPriceStr === '+' ? Infinity : parseInt(maxPriceStr, 10);
        filteredDomains = filteredDomains.filter(domain => domain.price >= parseInt(minPrice, 10) && domain.price <= maxPrice);
    }

    initializeDomainGrid(filteredDomains);
}

categoryFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('change', applyFilters);



initializeDomainGrid();



const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

function toggleDarkMode() {
    html.classList.toggle('darkmode');

    if (html.classList.contains('darkmode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('darkmode', 'enabled');
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.removeItem('darkmode');
    }
     // Set initial state of toggle button based on localStorage
    if (localStorage.getItem('darkmode') === 'enabled') {
          darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    else{
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}


if (localStorage.getItem('darkmode') === 'enabled') {
    html.classList.add('darkmode');
    toggleDarkMode(); // Ensure toggle button matches the initial state
}

darkModeToggle.addEventListener('click', toggleDarkMode);
