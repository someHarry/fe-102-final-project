import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function RadioButton({ option, imgsrc }) {
  const [selectedOption, setSelectedOption] = useState(null);

  // Функція обробник події зміни RadioButton
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <label htmlFor={option} style={{ display: 'inline-block', position: 'relative', cursor: 'pointer' }}>
      <input
        type="radio"
        id={option}
        name="paymentOption" // Встановлюємо однаковий name для обох радіо-кнопок
        value={option}
        checked={selectedOption === option}
        onChange={handleOptionChange}
        style={{ visibility: 'hidden' }}
      />
      <img
        src={imgsrc} // Додайте URL або шлях до вашого зображення вмісці imgsrc
        alt={option}
        style={{ display: 'block' }}
      />
    </label>
  );
}

RadioButton.propTypes = {
  option: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
};
