import React from 'react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      rating: "⭐⭐⭐⭐⭐",
      author: "Александр М.",
      text: "Обратился за разработкой продающего лендинга — получил отличный результат уже через неделю! Дизайн современный, адаптация под мобильные работает идеально, заявки пошли с первого дня. Особенно порадовала быстрая связь и готовность помочь даже после завершения проекта."
    },
    {
      id: 2,
      rating: "⭐⭐⭐⭐⭐",
      author: "Екатерина Р.",
      text: "Отличный специалист! Терпеливо объяснял нюансы, помог разобраться с хостингом и доменом. Всё сделано в срок, дизайн стильный, сайт работает стабильно. Уровень сервиса просто супер."
    },
    {
      id: 3,
      rating: "⭐⭐⭐⭐⭐",
      author: "Игорь П.",
      text: "Заказывал корпоративный сайт под ключ. Понравилось, что разработчик не просто делал задачи, а думал о бизнес-логике. Предложил улучшить структуру, сделал удобные формы и даже подготовил инструкции для сотрудников. Очень профессиональный подход."
    }
  ];

  return (
    <section className="reviews-section">
      <div className="container">
        <h2>Отзывы клиентов</h2>
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-rating">{review.rating}</div>
              <div className="review-author">{review.author}</div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;