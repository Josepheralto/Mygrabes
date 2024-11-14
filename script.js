document.addEventListener('DOMContentLoaded', () => {
  const domains = [
    { name: 'example.com', price: 999, description: 'A great domain for your next project.', location: { lat: 40.730610, lng: -73.935242 } },
    { name: 'mysite.net', price: 499, description: 'Perfect for a personal website or blog.', location: { lat: 34.052235, lng: -118.243683 } },
    { name: 'coolapp.io', price: 799, description: 'An eye-catching domain for your app or service.', location: { lat: 51.507351, lng: -127758 } },
    { name: 'bestdeal.co', price: 399, description: 'Ideal for an ecommerce or business website.', location: { lat: 48.856613, lng: 2.352222 } },
    { name: 'funstuff.xyz', price: 299, description: 'A fun and memorable domain name.', location: { lat: 49.282729, lng: -123.120738 } },
    { name: 'awesome.site', price: 599, description: 'Stand out with this premium domain.', location: { lat: 37.7749, lng: -122.4194 } }
  ];

  const filters = {
    keyword: '',
    minPrice: 0,
    maxPrice: 1000,
    location: null
  };

  const keywordInput = document.getElementById('keyword');
  const minPriceInput = document.getElementById('minPrice');
  const maxPriceInput = document.getElementById('maxPrice');
  const locationInput = document.getElementById('location');
  const domainCardsContainer = document.getElementById('domain-cards');

  const renderDomains = (domains) => {
    domainCardsContainer.innerHTML = '';
    domains.forEach((domain) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-header">
          <div class="card-title">${domain.name}</div>
        </div>
        <div class="card-content">
          <p>${domain.description}</p>
        </div>
        <div class="card-footer">
          <div class="price">
            <img src="/godaddy-logo.png" alt="GoDaddy" class="h-6 mr-2" />
            <span class="font-bold text-lg">$${domain.price}</span>
          </div>
          <button class="button">Buy on GoDaddy</button>
        </div>
      `;
      domainCardsContainer.appendChild(card);
    });
  };

  const filterDomains = () => {
    const filteredDomains = domains.filter((domain) => {
      return (
        domain.name.toLowerCase().includes(filters.keyword.toLowerCase()) &&
        domain.price >= filters.minPrice &&
        domain.price <= filters.maxPrice &&
        (!filters.location || (domain.location.lat === filters.location.lat && domain.location.lng === filters.location.lng))
      );
    });
    renderDomains(filteredDomains);
  };

  keywordInput.addEventListener('input', (e) => {
    filters.keyword = e.target.value;
    filterDomains();
  });

  minPriceInput.addEventListener('input', (e) => {
    filters.minPrice = parseInt(e.target.value) || 0;
    filterDomains();
  });

  maxPriceInput.addEventListener('input', (e) => {
    filters.maxPrice = parseInt(e.target.value) || 1000;
    filterDomains();
  });

  locationInput.addEventListener('input', (e) => {
    const [lat, lng] = e.target.value.split(',').map(Number);
    filters.location = lat && lng ? { lat, lng } : null;
    filterDomains();
  });

  // Initial render
  renderDomains(domains);
});
