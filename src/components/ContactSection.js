import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Отправка данных через n8n webhook
      const response = await fetch('https://petuam.app.n8n.cloud/webhook/web', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Спасибо за ваш запрос! Я свяжусь с вами в ближайшее время для обсуждения создания вашего сайта.');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        alert('Произошла ошибка при отправке запроса. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      alert('Произошла ошибка при отправке запроса. Пожалуйста, попробуйте еще раз.');
      console.error('Error:', error);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Хотите заказать сайт? Или не понравились шаблоны и вы хотите уникальный сайт? Или хотите заказать веб приложение? Тогда напишите мне!</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Контактная информация</h3>
            <p><strong>Email:</strong> molchaniuk_pa@mail.ru</p>
            <p><strong>Телефон:</strong> +7 (965) 426-25-07</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Номер телефона</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone || ''}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Описание</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">отправить сообщение</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;