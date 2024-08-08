// pages/api/cars.js

// In-memory data store
const cars = [
    { id: 1, name: 'Car A', category: 'SUV' },
    { id: 2, name: 'Car B', category: 'Luxury' },
    { id: 3, name: 'Car C', category: 'Budget' },
    { id: 4, name: 'Car D', category: 'SUV' },
    // Add more car objects as needed
  ];
  
  export default function handler(req, res) {
    try {
      // Check if the request method is GET
      if (req.method === 'GET') {
        // Parse URL and extract query parameters
        const url = new URL(req.url, `http://${req.headers.host}`);
        const category = url.searchParams.get('category');
  
        if (category) {
          // Filter cars by category if the query parameter is provided
          const filteredCars = cars.filter(car => car.category.toLowerCase() === category.toLowerCase());
          res.status(200).json(filteredCars);
        } else {
          // Return all cars if no category is provided
          res.status(200).json(cars);
        }
      } else {
        // If the method is not GET, respond with 405 Method Not Allowed
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    } catch (error) {
      // Handle any errors that occur
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  