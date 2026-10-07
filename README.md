# 🦆 Bibe Market — Monochrome POS & Information System
> **IT 101: Introduction to Computing — Final Project**  
> *AI-Assisted Information System Development*

Welcome to **Bibe Market**, a Point of Sale (POS) & Order Information System featuring a **stretched bold monochrome aesthetic** inspired by modern high-fashion editorial streetwear (Syne 900 + Poppins). Built to run 100% statically on **GitHub Pages** with client-side **HTML5 `localStorage`** persistence.

---

## 🌟 Live Preview
Runs directly in any browser at:
`http://localhost:3000` or hosted on **GitHub Pages**.

---

## ✨ Features Breakdown

### 1. 🖼️ High-Impact Editorial Landing Page (Screenshot Inspired)
- **Stretched Bold Typography**:
  - Headings and hero titles powered by **Syne (Ultra-Bold 900)** with horizontal geometric stretch.
  - Body and details styled in clean, modern, legible **Poppins**.
  - Strict high-contrast black & white palette.
- **Hero Banner Overlay (Bottom-Left Positioned)**:
  - Big background hero image (`bibe-hero.jpg`) with dark vignette overlay.
  - Huge stretched headline **BIBE MARKET** anchored at the **bottom-left**.
  - Subtitle tagline: `'FRESH HARVEST & TOYS' OUT NOW`.
  - Pill CTA buttons: **[ Explore Store ]** and **[ Claim Vouchers ]**.
  - Left/right navigation arrows (`←` and `→`) and slide indicator dots at the bottom.
- **Popular Favorites Slider**:
  - Buttonless tactile cards displaying live stock and pipe-separated options.
- **About Section & Minimalist Footer**:
  - Academic project details for IT 101 Introduction to Computing.

---

### 2. 🏪 Store Catalog View (Buttonless Cards & Pipe-Separated Options)
- **Tactile Buttonless Product Cards**:
  - **No buttons on the cards!** The entire card is clickable to open the detail popup.
  - Product variant descriptions are split cleanly by **` | `** (e.g. `Classic Yellow | Ocean Blue | Pastel Pink` instead of commas).
- **Left Filter Sidebar**:
  - Real-time search by keyword.
  - Department filters: **Toys & Fun**, **Fruits & Produce**, **Fresh Bakery**, **Beverages & Coffee**, **Snacks & Pantry**.
  - Price range filters & In Stock availability toggle.
  - Reset filters shortcut.

---

### 3. 🎨 Product Details Popup with Dynamic Image Swapping
- Clicking any product card opens the **Product Details Modal**.
- **The [ Add to Bag ➔ ] button is located inside the popup modal**.
- **Dynamic Variant Image Swapping**:
  - When picking a different variant pill (e.g., *Yellow Rubber Bibe Toy* ➔ *Classic Yellow* vs *Ocean Blue* vs *Pastel Pink*), the product image **instantly swaps to match that exact item**!
  - Apples swap between *Fuji Apple (red)*, *Granny Smith (green)*, and *Honeycrisp*.
  - Croissants swap between *Regular Butter* and *Chocolate Filled*.
  - Corn swaps between *Normal Corn* and *Butter Glazed*.
  - Coffee swaps between *Regular Black* and *With Oat Milk*.
- Quantity stepper controls (`-`, `+`) with stock cap.

---

### 4. 🛍️ Slide-Over Shopping Bag (Grouped by Category, Zero Tax)
- Accessible anytime via the **Bag** button in the header.
- **Category-Grouped Display**: Items are organized under clear category banners with variant images, titles, quantity adjusters, and line totals.
- **Claimed Vouchers Integration**: Select any claimed coupon (e.g., `BIBE10`, `WELCOME5`) for instant savings.
- **NO TAX!**: Tax calculations and tax rates have been completely removed ($0 tax). Total = Subtotal − Voucher Savings.

---

### 5. 👤 User Profile & Delivery Address Management
- **Saved Delivery Addresses Manager**:
  - View all saved delivery addresses.
  - Set default address.
  - Enter new addresses (`[ + Add ]`) directly into the user's profile.
- **Locked Checkout Delivery Dropdown**:
  - At checkout, the delivery address is a **locked dropdown** populated directly from the user's profile addresses for instant selection!
  - Users can click `[ + Manage in Profile ]` to add addresses anytime.

---

### 6. 🚚 Real-Time Order Tracking (Direct Details — No Typing Needed)
- Customer order tracking screen automatically displays active order details without needing to type a tracking number!
- **4-Stage Lifecycle Stepper**:
  1. ⏳ **Payment Processing**: Order placed, awaiting payment confirmation.
  2. 📦 **Payment Accepted & Preparing**: Payment verified by Admin. Order packed.
  3. 🚚 **Passed to Shipper**: Parcel handed over to courier; out for delivery.
  4. ✅ **Order Delivered**: Parcel successfully delivered.
- Itemized parcel summary showing variants and prices.

---

### 7. 🔒 Admin Portal Separation
- **Strict UI Separation**:
  - When switching to Admin mode, customer navigation links (`Home`, `Store`, `Vouchers`, `Track Order`, `About`) and header action icons (`Vouchers`, `Track Order`, `Profile`, `Bag`) are **completely hidden**!
  - Header displays clean `BIBE MARKET — ADMIN CONSOLE` and a **[ 🛒 Store View ]** button to return anytime.
- **Dashboard & KPIs**: Real-time Gross Revenue, Total Orders, Units Sold, and Average Order Spend.
- **Orders & Sales History**:
  - Full real-time ledger.
  - **4-Stage Lifecycle Progression Buttons**:
    - Click `[ ✔ Accept Payment ]` to move from *Payment Processing* to *Payment Accepted*.
    - Click `[ 🚚 Hand Over to Shipper ]` to advance to *Passed to Shipper*.
    - Click `[ ✅ Mark as Delivered ]` to mark as completed.
    - All status updates instantly propagate to customer tracking via cross-tab storage sync!
  - Export to **CSV** and **JSON**.
- **Inventory & Vouchers Management**: Live restock (+10 units) and coupon enable/disable toggles.
- **Demo Presentation Tools**: 1-click sample orders, clear orders to $0, and factory reset.

---

## 🚀 How to Publish to GitHub Pages

1. Create a repository on GitHub (e.g. `bibe-market-pos`).
2. Upload all files from this folder (`index.html`, `styles.css`, `app.js`, `bibe-logo.jpg`, `bibe-hero.jpg`, `README.md`).
3. In your repo, go to **Settings** > **Pages**.
4. Set source to **Deploy from a branch** > branch **main** > folder **/(root)**.
5. Click **Save**. Your site will be live at `https://<your-username>.github.io/bibe-market-pos/` within 2 minutes!
