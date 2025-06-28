body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f9fdfc;
  color: #0b5b4c;
  padding: 20px;
  background-image: url('https://images.unsplash.com/photo-1588776814546-ec9ec99cefa7');
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(3px);
}

.container {
  background: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 0 25px rgba(0,0,0,0.1);
}

h1 {
  color: #00724d;
  margin-bottom: 10px;
  font-size: 2rem;
  text-align: center;
}

p {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 25px;
}

label {
  display: block;
  margin-top: 15px;
  font-weight: 600;
  font-size: 1rem;
}

input, select, textarea {
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

button {
  margin-top: 30px;
  width: 100%;
  background-color: #057a55;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

button:hover {
  background-color: #046b49;
  transform: scale(1.02);
}

button::before {
  content: '\1F4CB'; /* Emoji de prancheta */
  font-size: 1.4rem;
}

.success {
  color: #1c8a00;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  font-size: 1.1rem;
}

.hidden {
  display: none;
}

@media (max-width: 600px) {
  .container {
    padding: 20px;
  }
  h1 {
    font-size: 1.5rem;
  }
  label {
    font-size: 0.95rem;
  }
  input, select, textarea {
    font-size: 0.95rem;
  }
  button {
    font-size: 1rem;
  }
}
