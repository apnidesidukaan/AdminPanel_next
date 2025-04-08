# 🍔 BadiEats - Food Delivery Solution

**BadiEats** is a **Micro Frontend** architecture-based solution for the **BadiDukan** platform. It provides a scalable, modular, and user-friendly experience for managing food delivery operations.

---

## 🌐 Why Micro Frontends?

Micro Frontends decompose a monolithic frontend into **independent, modular applications**. This approach benefits **BadiEats** by offering:

- **Scalability**: Add or update features without disrupting other modules.
- **Modular Flexibility**: Load and deliver business-specific features on demand.
- **Independent Deployment**: Teams can develop and deploy modules separately.
- **Improved Collaboration**: Parallel development of features by different teams.
- **Custom User Experience**: Each user role sees only relevant modules (e.g., Restaurant Admin, Delivery Partner, Customer).

---

## 📊 How It Works

1. **Business Registration**: Restaurants register on the platform and access relevant modules.
2. **Dynamic Module Loading**: Tailored micro frontends are loaded based on user roles.
3. **Order Management**: Customers place orders, and restaurants and delivery partners handle fulfillment.

---


## 🚀 Key Features

- **Multi-Tenant Support**: Each restaurant operates independently.
- **Role-Based Access Control (RBAC)**: Different modules for customers, restaurant admins, and delivery partners.
- **Real-Time Order Tracking**: Monitor orders from placement to delivery.
- **Scalable Micro Frontends**: Dynamic loading for better performance.
- **Custom Module Assignment**: Tailor features to different business needs.

---

## 🛠️ Tech Stack

- **Frontend**: React (with Single-SPA for Micro Frontends)
- **Backend**: Node.js + Express (with MySQL Database)
- **Styling**: Tailwind CSS (with custom themes)
- **Deployment**: Docker (for containerized services)

---

## 📦 Installation

1. **Clone the Repository:**

```bash
git clone https://github.com/your-org/BadiEats.git
cd BadiEats
```

2. **Set Up Environment Variables:**

Create a `.env` file in the root directory:

```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root 
MYSQL_PASS=yourpassword
MYSQL_DB=badi_eats
JWT_SECRET=your_jwt_secret
```

3. **Install Dependencies:**

```bash
npm install
```

4. **Run the Application:**

```bash
npm run dev
```

---

## 📖 Contribution Guidelines

1. Fork the repository and create a new branch.
2. Implement your changes.
3. Submit a pull request with a clear description.

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 🌟 Motto

**"From Local Hustle to Global Muscle"**