document.addEventListener('DOMContentLoaded', () => {
  const domains = [
    { name: 'septiccompany.co', price: 399, description: 'A reliable domain for your septic company.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=septiccompany.co', website: 'https://septiccompany.co' },
    { name: 'machineryrentalcompany.com', price: 499, description: 'Ideal for a machinery rental business.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=machineryrentalcompany.com', website: 'https://machineryrentalcompany.com' },
    { name: 'homeinspectorspecialist.com', price: 599, description: 'Perfect for a home inspection specialist.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=homeinspectorspecialist.com', website: 'https://homeinspectorspecialist.com' },
    { name: 'environmentalremediationcompany.com', price: 699, description: 'Ideal for an environmental remediation company.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=environmentalremediationcompany.com', website: 'https://environmentalremediationcompany.com' },
    { name: 'riggingllc.com', price: 799, description: 'A strong domain for a rigging LLC.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=riggingllc.com', website: 'https://riggingllc.com' },
    { name: 'homestagingllc.com', price: 899, description: 'Great for a home staging LLC.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=homestagingllc.com', website: 'https://homestagingllc.com' },
    { name: 'floorcoatingservices.com', price: 999, description: 'Ideal for floor coating services.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=floorcoatingservices.com', website: 'https://floorcoatingservices.com' },
    { name: 'stoneworkservices.com', price: 1099, description: 'Perfect for stonework services.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=stoneworkservices.com', website: 'https://stoneworkservices.com' },
    { name: 'aithought.co', price: 1199, description: 'A premium domain for AI thought leaders.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=aithought.co', website: 'https://aithought.co' },
    { name: 'cognitiveagent.co', price: 1299, description: 'Ideal for cognitive agent solutions.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=cognitiveagent.co', website: 'https://cognitiveagent.co' },
    { name: 'guardbot.co', price: 1399, description: 'Perfect for a security robot company.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=guardbot.co', website: 'https://guardbot.co' },
    { name: 'watertreatmentinc.com', price: 1499, description: 'Ideal for a water treatment company.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=watertreatmentinc.com', website: 'https://watertreatmentinc.com' },
    { name: 'phoenixsolarpanel.com', price: 1599, description: 'Great for a solar panel company.', link: 'https://godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=phoenixsolarpanel.com', website: 'https://phoenixsolarpanel.com' }
  ];

  const filters = {
    keyword: '',
    minPrice: 0,
    maxPrice: 1000
  };

  const keywordInput = document.getElementById('keyword');
  const minPriceInput = document.getElementById('minPrice');
  const maxPriceInput = document.getElementById('maxPrice');
  const domainCardsContainer = document.getElementById('domain-cards');
  const formMessage = document.getElementById('form-message');
  const contactForm = document.getElementById('contact-form');

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
            <span class="font-bold text-lg">$${domain.price}</span>
          </div>
          <div class="actions">
            <a href="${domain.link}" class="button">Buy on GoDaddy</a>
            <a href="${domain.website}" class="button make-offer">Make Offer</a>
          </div>
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
        domain.price <= filters.maxPrice
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

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form inputs
    if (!name || !email || !message) {
      formMessage.classList.remove('hidden');
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }

    // Simulate form submission
    formMessage.classList.remove('hidden');
    formMessage.textContent = 'Message sent successfully!';

    // Send email to markksteffan@gmail.com
    const emailContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    sendEmail('markksteffan@gmail.com', 'Contact Form Submission', emailContent);
  });

  const sendEmail = (to, subject, body) => {
    // Simulate sending an email
    console.log(`Email sent to ${to} with subject ${subject} and body:\n${body}`);
  };

  // Initial render
  renderDomains(domains);
});
