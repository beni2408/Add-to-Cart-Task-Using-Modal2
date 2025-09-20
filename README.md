# Add to Cart Task - ReactJS Application

A modern ReactJS application that fetches product data from the Fake Store API and allows users to add products to their cart through a modal interface.

## Features

- **Product Display**: Fetches and displays products from the Fake Store API
- **Shopping Cart**: Add products to cart with duplicate prevention
- **Modal Interface**: View cart contents in a responsive modal
- **Cart Management**: Remove items from cart
- **Alert System**: Shows alerts when trying to add duplicate items
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Cart count updates instantly

## Tech Stack

- **ReactJS** - Frontend framework
- **HTML/CSS** - Markup and styling
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Application logic
- **Fake Store API** - Product data source

## Project Structure

```
src/
├── components/
│   ├── Alert.js          # Alert component for notifications
│   ├── CartModal.js      # Modal for displaying cart items
│   ├── Navbar.js         # Navigation bar with cart count
│   ├── ProductCard.js    # Individual product card component
│   └── ProductList.js    # Product listing component
├── App.js                # Main application component
├── index.js              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd add-to-cart-task
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Key Components

### App.js

- Main application component
- Manages cart state using React hooks
- Handles cart operations (add/remove)
- Controls modal and alert states

### ProductList.js

- Fetches products from Fake Store API
- Displays products in a responsive grid
- Handles loading and error states

### CartModal.js

- Modal component for cart display
- Shows cart items with remove functionality
- Calculates and displays total price

### Navbar.js

- Navigation bar with cart count badge
- Cart button to open modal

## API Integration

The application uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data:

- **Endpoint**: `https://fakestoreapi.com/products`
- **Data**: Product information including title, price, image, category, and ratings

## Features Implementation

### Cart Functionality

- **Add to Cart**: Click "Add to Cart" button on any product
- **Duplicate Prevention**: Shows alert if item already exists in cart
- **Remove from Cart**: Remove items using the "Remove" button in modal
- **Real-time Count**: Cart count updates immediately in navbar

### Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Grid Layout**: Responsive product grid (1-4 columns based on screen size)
- **Modal**: Responsive modal that works on all screen sizes
- **Touch-friendly**: Large buttons and touch targets

### User Experience

- **Loading States**: Shows spinner while fetching products
- **Error Handling**: Displays error messages for API failures
- **Smooth Animations**: CSS transitions and animations
- **Alert System**: Non-intrusive alerts for user feedback

## Deployment

### Netlify Deployment

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure environment variables if needed

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please open an issue in the repository.
