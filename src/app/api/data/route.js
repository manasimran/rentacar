'use server';
// import connect from "@/src/app/api/db/dbconfig";
// import Car from "@/src/models/car.model";
const data = [
    {
        "id": 1,
        "name": "Cultus",
        "brand": "Suzuki",
        'fueltype': 'petrol',
        "year": 2007,
        "perhourrate": 3000,
        "milage": 180,
        "seats": 4,
        'transmissiontype': 'manual',
        "image": [
            "https://automark.pk/wp-content/uploads/2017/07/Suzuki-Cultus.jpg",
            "image14.jpg"
        ],
        "description": "Compact, fuel-efficient",
        "availability": true,
        "color": "gray",
        "overtimerate": 55,
        "category": "budget"
    },
    {
        "id": 2,
        "name": "Karvaan",
        "brand": "Changan",
        "fueltype": 'petrol',
        "year": 2024,
        "transmissiontype": 'manual',
        "perhourrate": 5500,
        "outcity": 7000,
        "milage": 200,
        "seats": 7,
        "image": [
            "https://www.gari.pk/images/news/2024-03/3400_1_27468.png",
            "image16.jpg"
        ],
        "description": "Comfortable midsize sedan",
        "availability": true,
        "color": "white",
        "overtimerate": 60,
        "category": "suv"
    },
    {
        "id": 3,
        "name": "Alto",
        "brand": "Suzuki",
        "year": 2020,
        "fueltype": 'petrol',
        "perhourrate": 3500,
        "milage": 280,
        "seats": 4,
        "transmissiontype": 'manual',
        "image": [
            "https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Graphite-Grey.jpg",
            "image48.jpg"
        ],
        "description": "Compact pickup truck",
        "availability": true,
        "color": "#708090",
        "overtimerate": 110,
        "category": "budget"
    },
    {
        "id": 4,
        "name": "Corolla Gli",
        "brand": "Toyota",
        "year": 2016,
        "perhourrate": 6000,
        "milage": 300,
        "seats": 4,
        'fueltype': 'petrol',
        "transmissiontype": 'manual',
        "image": [
            "https://deinfa.com/wp-content/uploads/bfi_thumb/Why-a-GLi-Car-is-a-Good-Rental-Vehicle-Choice-Featured-pygji2jzvd4bkgx7y0ng6yxoyv9zqabzf45pv0omic.jpg",
            "image50.jpg"
        ],
        "description": "Spacious, reliable",
        "availability": true,
        "color": "white",
        "category": "standard"
    },
    {
        "id": 5,
        "name": "Civic",
        "brand": "Honda",
        "year": 2015,
        "perhourrate": 5500,
        "outcity": 7000,
        "milage": 300,
        "seats": 4,
        "transmissiontype": 'manual',
        "image": [
            "https://cache2.pakwheels.com/system/car_generation_pictures/3050/original/Honda_Civic_2015_New_Grill.jpg?1445254212",
            "image50.jpg"
        ],
        "description": "Spacious, comfortable",
        "availability": true,
        "color": "white",
        "category": "standard"
    }
];

export async function GET(request) {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');

    let filteredData = data;

    if (category) {
        filteredData = data.filter(car => car.category.toLowerCase() === category.toLowerCase());
    }

    return new Response(JSON.stringify(filteredData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
