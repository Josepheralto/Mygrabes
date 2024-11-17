// Domain data
const domains = [
    {domain: "septiccompany.co", tld: "co", price: 200, minOffer: 99, floorPrice: 150, dateAdded: "2024-02-09", status: "Listed", fastTransfer: "Active"},
    {domain: "machineryrentalcompany.com", tld: "com", price: 200, minOffer: 99, floorPrice: 150, dateAdded: "2024-02-10", status: "Listed", fastTransfer: "Active"},
    {domain: "homeinspectorspecialist.com", tld: "com", price: 200, minOffer: 99, floorPrice: 150, dateAdded: "2024-02-25", status: "Listed", fastTransfer: "Active"},
    {domain: "environmentalremediationcompany.com", tld: "com", price: 200, minOffer: 99, floorPrice: 150, dateAdded: "2024-03-17", status: "Listed", fastTransfer: "Active"},
    {domain: "riggingllc.com", tld: "com", price: 1299, minOffer: 99, floorPrice: 250, dateAdded: "2024-05-29", status: "Listed", fastTransfer: "Active"},
    {domain: "homestagingllc.com", tld: "com", price: 1299, minOffer: 99, floorPrice: 250, dateAdded: "2024-05-29", status: "Listed", fastTransfer: "Active"},
    {domain: "floorcoatingservices.com", tld: "com", price: 200, minOffer: 99, floorPrice: 150, dateAdded: "2024-05-29", status: "Listed", fastTransfer: "Active"},
    {domain: "stoneworkservices.com", tld: "com", price: 200, minOffer: 99, floorPrice: 150, dateAdded: "2024-05-29", status: "Listed", fastTransfer: "Active"},
    {domain: "aithought.co", tld: "co", price: 1299, minOffer: 99, floorPrice: 250, dateAdded: "2024-05-30", status: "Listed", fastTransfer: "Registrar Not Eligible"},
    {domain: "cognitiveagent.co", tld: "co", price: 1299, minOffer: 99, floorPrice: 250, dateAdded: "2024-05-30", status: "Listed", fastTransfer: "Registrar Not Eligible"},
    {domain: "guardbot.co", tld: "co", price: 1299, minOffer: 99, floorPrice: 250, dateAdded: "2024-05-30", status: "Listed", fastTransfer: "Registrar Not Eligible"},
    {domain: "watertreatmentinc.com", tld: "com", price: 1299, minOffer: 99, floorPrice: 250, dateAdded: "2024-10-22", status: "Listed", fastTransfer: "Opt-in Required"},
    {domain: "phoenixsolarpanel.com", tld: "com", price: 200, minOffer: 99, floorPrice: 150, dateAdded: "2024-10-31", status: "Listed", fastTransfer: "Opt-in Required"}
];

// DOM Elements
const domainGrid = document.getElementById('domainGrid');
const searchInput = document.getElementById('searchInput');
const tldFilter = document.getElementById('tldFilter');
const priceFilter = document.getElementById('priceFilter');
const sortBy = document.getElementById('sortBy');
const modal = document.getElementById('offerModal');
const closeBtn = document.querySelector('.close');
const offerForm = document.getElementById('offerForm');

// Create domain card HTML
function createDomainCard(domain) {
    return `
        <div class="domain-card">
            <div class="domain-name">${domain.domain}</div>
            <div class="domain-price">$${domain.price.toLocaleString()}</div>
            <div class="domain-details">
                <p>TLD: ${domain.tld}</p>
                <p>Status: ${domain.status}</p>
                <p>Transfer: ${domain.fastTransfer}</p>
                <p>Listed: ${new Date(domain.dateAdded).toLocaleDateString()}</p>
            </div>
            <div class="buttons">
                <a href="https://www.godaddy.com/domainsearch/find?domainToCheck=${domain.domain}" 
                   target="_blank" 
                   class="button button-primary">Buy Now</a>
                <button onclick="openOfferModal('${domain.domain}')" 
                        class="button button-secondary">Make Offer</button>
            </div>
        </div>
    `;
}

// Filter and display domains
function filterAndDisplayDomains() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedTld = tldFilter.value;
    const selectedPrice = priceFilter.value;
    const sortOption = sortBy.value;

    let filteredDomains = domains.filter(domain => {
        const matchesSearch = domain.domain.toLowerCase().includes(searchTerm);
        const matchesTld = !selectedTld || domain.tld === selectedTld;
        let matchesPrice = true;

        if (selectedPrice) {
            const [min, max] = selectedPrice.split('-').map(num => num.replace('+', '9999'));
            matchesPrice = domain.price >= parseInt(min) && (!max || domain.price <= parseInt(max));
        }

        return matchesSearch && matchesTld && matchesPrice;
    });

    // Sort domains
    filteredDomains.sort((a, b) => {
        switch(sortOption) {
            case 'price':
                return a.price - b.price;
            case 'date':
                return new Date(b.dateAdded) - new Date(a.dateAdded);
            default:
                return a.domain.localeCompare(b.domain);
        }
    });

    // Update DOM
    domainGrid.innerHTML = filteredDomains.map(createDomainCard).join('');
}

// Modal functions
function openOfferModal(domainName) {
    modal.style.display = 'flex';
    document.getElementById('domainName').value = domainName;
}

function closeModal() {
    modal.style.display = 'none';
}

// Event listeners
searchInput.addEventListener('input', filterAndDisplayDomains);
tldFilter.addEventListener('change', filterAndDisplayDomains);
priceFilter.addEventListener('change', filterAndDisplayDomains);
sortBy.addEventListener('change', filterAndDisplayDomains);

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

offerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        domain: document.getElementById('domainName').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        amount: document.getElementById('offerAmount').value
    };

    // Here you would typically send this data to a server
    console.log('Offer submitted:', formData);
    alert('Thank you for your offer! We will contact you soon.');
    closeModal();
    offerForm.reset();
});

// Initialize the page
document.addEventListener('DOMContentLoaded', filterAndDisplayDomains);
