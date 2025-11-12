import React from 'react';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Шаблон",
      price: "3000 рублей",
      features: []
    },
    {
      name: "Индивидуальный сайт",
      price: "от 4000р",
      features: []
    },
    {
      name: "Веб приложение",
      price: "от 20000р",
      features: []
    },
    {
      name: "Шаблон + тг бот для связи",
      price: "10000 рублей",
      description: "смотреть тут",
      link: "https://pet-avt-portfolio.vercel.app/"
    },
    {
      name: "Индивидуальный сайт + тг бот для связи",
      price: "11000",
      description: "смотреть тут",
      link: "https://pet-avt-portfolio.vercel.app/"
    },
    {
      name: "Шаблон + автоматизация для бизнеса ввиде возможности оправки сообщения находясь на сайте",
      price: "10000",
      description: "(у меня на сайте последняя страница)"
    },
    {
      name: "Индивидуальный сайт + автоматизация для бизнеса ввиде возможности оправки сообщения находясь на сайте",
      price: "11000",
      description: "(у меня на сайте последняя страница)"
    }
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <h2>Стоимость</h2>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}</div>
              {plan.description && (
                <p className="description">
                  {plan.description === "смотреть тут" ? (
                    <button 
                      className="view-button"
                      onClick={() => window.open(plan.link, plan.link.startsWith('#') ? '_self' : '_blank')}
                    >
                      {plan.description}
                    </button>
                  ) : (
                    plan.description
                  )}
                </p>
              )}
              <ul className="features">
                {plan.features && plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;