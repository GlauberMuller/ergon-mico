/* Reset básico */
* {
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
}

body {
  background: #f4faf6 url('https://images.unsplash.com/photo-1588776814546-ec76a71650f2?auto=format&fit=crop&w=1950&q=80') no-repeat center center fixed;
  background-size: cover;
  color: #003c2f;
  min-height: 100vh;
}

.container {
  background-color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h1 {
  font-size: 1.8rem;
  color: #007a4d;
  margin-bottom: 10px;
}

h2 {
  margin-top: 30px;
  font-size: 1.3rem;
  color: #005837;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 5px;
}

p {
  margin-bottom: 20px;
  color: #333;
}

label {
  display: block;
  margin-top: 15px;
  font-weight: 600;
  color: #222;
}

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

button {
  margin-top: 25px;
  background-color: #009c6f;
  color: white;
  font-size: 1rem;
  padding: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  transition: 0.3s ease;
}

button:hover {
  background-color: #007a4d;
}

#confirmation {
  margin-top: 20px;
  text-align: center;
  color: #007a4d;
  font-weight: bold;
}

.hidden {
  display: none;
}
