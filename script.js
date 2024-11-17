const domains = [
    {
        name: 'homeinspectorspecialist.com',
        buyNowPrice: 200,
        minOffer: 99,
        floorPrice: 150,
        dateAdded: '2024-02-25',
        status: 'Listed',
        views: 0
    },
    {
        name: 'riggingllc.com',
        buyNowPrice: 1299,
        minOffer: 99,
        floorPrice: 250,
        dateAdded: '2024-05-29',
        status: 'Listed',
        views: 0
    },
    // Add other domains here
];

function initializePage() {
    displayDomains(domains);
    updateStats();
    setupEventListeners();
}

function displayDomains(domainsToShow) {
    const container = document.getElementById('domainsContainer');
    container.innerHTML = '';

    domainsToShow.forEach(domain => {
        const card = createDomainCard(domain);
        container.appendChild(card);
    });
}

function createDomainCard(domain) {
    const card = document.createElement('div');
    card.className = 'domain-card';
    card.innerHTML = `
        <h2>${domain.name}</h2>
        <div class="domain-info">
            <p class="price">Buy Now: $${domain.buyNowPrice}</p>
            <p>Min Offer: $${domain.minOffer}</p>
            <p>Listed: ${new Date(domain.dateAdded).toLocaleDateString()}</p>
            <p>Views: ${domain.views}</p>
        </div>
        <div class="buttons">
            <button class="btn btn-primary" onclick="buyNow('${domain.name}')">Buy Now</button>
            <button class="btn btn-secondary" onclick="makeOffer('${domain.name}')">Make Offer</button>
        </div>
    `;
    return card;
}

function searchDomains() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredDomains = domains.filter(domain => 
        domain.name.toLowerCase().includes(searchTerm)
    );
    displayDomains(filteredDomains);
}

function sortDomains(criteria) {
    const sortedDomains = [...domains];
    switch(criteria) {
        case 'priceAsc':
            sortedDomains.sort((a, b) => a.buyNowPrice - b.buyNowPrice);
            break;
        case 'priceDesc':
            sortedDomains.sort((a, b) => b.buyNowPrice - a.buyNowPrice);
            break;
        case 'nameAsc':
            sortedDomains.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'nameDesc':
            sortedDomains.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'dateAdded':
            sortedDomains.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            break;
    }
    displayDomains(sortedDomains);
}

function buyNow(domain) {
    const url = `https://www.godaddy.com/domainsearch/find?domain=${domain}`;
    window.location.href = url;
}

function makeOffer(domain) {
    const modal = document.getElementById('offerModal');
    modal.style.display = 'block';
    // Store selected domain for form submission
    modal.dataset.domain = domain;
}

function updateStats() {
    document.getElementById('totalDomains').textContent = domains.length;
    document.getElementById('activeDomains').textContent = 
        domains.filter(d => d.status === 'Listed').length;
}

function setupEventListeners() {
    // Sort listener
    document.getElementById('sortBy').addEventListener('change', (e) => {
        sortDomains(e.target.value);
    });

    // Price filter listener
    document.getElementById('priceFilter').addEventListener('change', (e) => {
        const value = e.target.value;
        let filtered = domains;
        if (value !== 'all') {
            const [min, max] = value.split('-').map(v => v === '+' ? Infinity : Number(v));
            filtered = domains.filter(d => 
                d.buyNowPrice >= min && (max === Infinity || d.buyNowPrice <= max)
            );
        }
        displayDomains(filtered);
    });

    // Offer form submission
    document.getElementById('offerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const domain = document.getElementById('offerModal').dataset.domain;
        const amount = document.getElementById('offerAmount').value;
        const email = document.getElementById('offerEmail').value;
        
        // Here you would typically send this data to your backend
        console.log(`Offer submitted for ${domain}: $${amount} from ${email}`);
        
        // Close modal and reset form
        document.getElementById('offerModal').style.display = 'none';
        e.target.reset();
    });

    // Close modal
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('offerModal').style.display = 'none';
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);
