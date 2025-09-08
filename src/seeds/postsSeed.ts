import {Post} from "../models/Post";

export const seedPosts = async () => {
    const count = await Post.countDocuments();
    if (count > 0) {
        console.log("Posts already exist, skipping seeding...");
        return;
    }

    await Post.insertMany([
        {
            id: "1",
            title: "Paris — The City of Love",
            description: "Visit the Eiffel Tower, the Louvre, and enjoy French cuisine.",
            imageUrl: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
            country: "France",
            price: 1200,
            rating: 4.8
        },
        {
            id: "2",
            title: "Carpathians — The Heart of Ukraine",
            description: "Clean air, mountains, skiing and Hutsul culture.",
            imageUrl: "https://www.thenaturaladventure.com/wp-content/uploads/2024/10/where-are-the-carpathians-and-what-makes-them-so-special-2.png",
            country: "Ukraine",
            price: 500,
            rating: 4.7
        },
        {
            id: "3",
            title: "Barcelona — Gaudí’s Architecture",
            description: "The streets of Barcelona impress with Gaudí’s style and delicious tapas.",
            imageUrl: "https://www.moyaeuropa.com.ua/wp-content/uploads/2014/05/Barcelona-1024x625.jpg",
            country: "Spain",
            price: 900,
            rating: 4.6
        },
        {
            id: "4",
            title: "Rome — The Eternal City",
            description: "The Colosseum, the Pantheon, and the world’s best pizza.",
            imageUrl: "https://www.italyperfect.com/g/photos/upload/sml_845543004-1590582528-ip-info-rome.jpg",
            country: "Italy",
            price: 1000,
            rating: 4.9
        },
        {
            id: "5",
            title: "Amsterdam — The City of Canals",
            description: "Canals, bicycles, and unique museums.",
            imageUrl: "https://cdn.pixabay.com/photo/2016/09/20/17/45/amsterdam-1682963_1280.jpg",
            country: "Netherlands",
            price: 800,
            rating: 4.5
        },
        {
            id: "6",
            title: "Kyoto — The Temple Capital",
            description: "Traditional Japan with temples and cherry blossoms.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckLqXX-JW1laoix4CUeM17sg22OeF5kA9Mw&s",
            country: "Japan",
            price: 1500,
            rating: 4.9
        },
        {
            id: "7",
            title: "New York — The City That Never Sleeps",
            description: "The Statue of Liberty, Times Square, and contemporary art.",
            imageUrl: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/shutterstock_329662223_ss_non-editorial_3_csm8lw?_a=BAVAZGE70",
            country: "USA",
            price: 1800,
            rating: 4.7
        },
        {
            id: "8",
            title: "Cape Town — Where Oceans Meet",
            description: "Beaches, vineyards, and views of Table Mountain.",
            imageUrl: "https://thetravelexpert.ie/wp-content/uploads/2018/04/cape-town-1562907_1280_opt-768x461.jpg",
            country: "South Africa",
            price: 1300,
            rating: 4.6
        },
        {
            id: "9",
            title: "Sydney — Australia’s Symbol",
            description: "The Opera House, Bondi Beach, and an active lifestyle.",
            imageUrl: "https://www.rmets.org/sites/default/files/Sydney_Opera_House_-_Dec_2008.jpg",
            country: "Australia",
            price: 2000,
            rating: 4.8
        },
        {
            id: "10",
            title: "Rio de Janeiro — The Carnival City",
            description: "Christ the Redeemer, Copacabana, and an incredible carnival.",
            imageUrl: "https://i.content4travel.com/seeplaces/temp/9ecc4378-3201-4070-89e8-de66534c9d9c.jpg",
            country: "Brazil",
            price: 1100,
            rating: 4.7
        }
    ]);

    console.log("Seed data inserted!");
};
