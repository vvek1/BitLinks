# 🚀 BitLinks

![GitHub Repo stars](https://img.shields.io/github/stars/vvek1/BitLinks?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/vvek1/BitLinks?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/vvek1/BitLinks?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/vvek1/BitLinks?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/vvek1/BitLinks?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/vvek1/BitLinks?style=for-the-badge)

---

## 👀 Visitor Counter
![Visitor Count](https://komarev.com/ghpvc/?username=vvek1&repo=BitLinks&style=for-the-badge)

A modern and simple **URL Shortener** built with ❤️ for developers and users.

---

## 📌 Features
- 🔗 Shorten long URLs into simple, shareable links  
- 📊 Track click counts (future feature)  
- 🎨 Clean and responsive UI  
- ⚡ Fast and reliable backend  

---

## 🛠️ Tech Stack
- **Frontend:** Next.js, HTML, CSS, JavaScript  
- **Backend:** Node.js / Next.js (or jo tum use kar rahe ho)  
- **Database:** MongoDB (if applicable)  

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or cloud)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/vvek1/BitLinks.git
cd BitLinks
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create a Next.js
```bash
npx create-next-app@latest
```

### 4️⃣ Environment Setup
Create a `.env.local` file in the root directory:
```env
# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/bitlinks

# Optional: Set your domain for production
NEXT_PUBLIC_HOST=http://localhost:3000
```

### 5️⃣ Start MongoDB
Make sure MongoDB is running on your system:
```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas (cloud) and update MONGODB_URI in .env.local
```

### 6️⃣ Run the development server
```bash
npm run dev
```

###  Open your browser
Visit 👉 **http://localhost:3000**

---

## 📁 Project Structure
```
BitLinks/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── generate/       # URL generation endpoint
│   ├── [shorturl]/        # Dynamic route for short URLs
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── shorten/            # URL shortening page
│   └── page.js             # Home page
├── components/             # React components
│   └── Navbar.js           # Navigation component
├── lib/                    # Utility functions
│   └── mongodb.js          # MongoDB connection
└── public/                 # Static assets
```

---

## 🔧 Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## 📸 Screenshots
(Add screenshots here)

---

## 🤝 Contributing
Contributions are always welcome!

1. Fork the repo
2. Create a new branch (`git checkout -b feature-xyz`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature-xyz`)
5. Open a Pull Request 🎉

---

## 📜 License
This project is licensed under the MIT License.
See the [LICENSE](LICENSE) file for details.

---

## 🙌 Author
Made with ❤️ by [Vivek](https://github.com/vvek1)
