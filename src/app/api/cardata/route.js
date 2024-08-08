let a={
    "name": "Corvette",
    "brand": "Chevrolet",
    "year": 2020,
    "perhourrate": 55,
    "milage": 300,
    "seats": 2,
    "image": ["image33.jpg", "image34.jpg"],
    "description": "An iconic American sports car with powerful performance.",
    "availabilityfrom": "2024-08-05",
    "availability": true,
    "color": "Arctic White",
    "overtimerate": 75,
    "createdAt": "2024-06-10T00:00:00.000Z",
    "updatedAt": "2024-06-10T00:00:00.000Z"
  }
  export async function GET(request) {
    return new Response(JSON.stringify(a), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  