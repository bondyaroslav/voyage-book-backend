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
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftourbaza.com%2Fhome%2Fukraine%2Fwestern%2Fkarpaty.html&psig=AOvVaw1yHmuRO-rT0RvhOMVYu-7E&ust=1757101817758000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICdvsDwv48DFQAAAAAdAAAAABAE",
            country: "Ukraine",
            price: 500,
            rating: 4.7
        },
        {
            id: "3",
            title: "Barcelona — Gaudí’s Architecture",
            description: "The streets of Barcelona impress with Gaudí’s style and delicious tapas.",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.moyaeuropa.com.ua%2Fspain%2Fbarselona%2F&psig=AOvVaw02ZFs3TDM2NDplMxoGuAXq&ust=1757101843586000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJCjrM7wv48DFQAAAAAdAAAAABAE",
            country: "Spain",
            price: 900,
            rating: 4.6
        },
        {
            id: "4",
            title: "Rome — The Eternal City",
            description: "The Colosseum, the Pantheon, and the world’s best pizza.",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.expedia.com%2FRome.dx179899&psig=AOvVaw2sIOlk8G1E_kV24ttZiE7H&ust=1757101877075000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKD_p9zwv48DFQAAAAAdAAAAABAV",
            country: "Italy",
            price: 1000,
            rating: 4.9
        },
        {
            id: "5",
            title: "Amsterdam — The City of Canals",
            description: "Canals, bicycles, and unique museums.",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.afar.com%2Ftravel-guides%2Fthe-netherlands%2Famsterdam%2Fguide&psig=AOvVaw1tzCknmnXzGt_NVtXPjf-H&ust=1757101904494000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJiy3erwv48DFQAAAAAdAAAAABAL",
            country: "Netherlands",
            price: 800,
            rating: 4.5
        },
        {
            id: "6",
            title: "Kyoto — The Temple Capital",
            description: "Traditional Japan with temples and cherry blossoms.",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hilton.com%2Fru%2Ftravel%2Farticles%2Fkyotos-enchanting-history-architecture-culture%2F&psig=AOvVaw0cy-69LfHJkE0-rBYcpTK-&ust=1757101933206000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMiRifrwv48DFQAAAAAdAAAAABAE",
            country: "Japan",
            price: 1500,
            rating: 4.9
        },
        {
            id: "7",
            title: "New York — The City That Never Sleeps",
            description: "The Statue of Liberty, Times Square, and contemporary art.",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hilton.com%2Fru%2Ftravel%2Farticles%2Fa-traveling-insiders-guide-to-new-york-city%2F&psig=AOvVaw3ZfxtTVXU1vQUnRr8-3SK7&ust=1757101965535000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNC3jIfxv48DFQAAAAAdAAAAABAz",
            country: "USA",
            price: 1800,
            rating: 4.7
        },
        {
            id: "8",
            title: "Cape Town — Where Oceans Meet",
            description: "Beaches, vineyards, and views of Table Mountain.",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthetravelexpert.ie%2Ftravel-expert-article%2Fcape-town-what-to-do-where-to-stay-where-to-eat-safety%2F&psig=AOvVaw3LyptPEqBBnGEVvwJ_1sId&ust=1757101999227000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIDzw5bxv48DFQAAAAAdAAAAABA8",
            country: "South Africa",
            price: 1300,
            rating: 4.6
        },
        {
            id: "9",
            title: "Sydney — Australia’s Symbol",
            description: "The Opera House, Bondi Beach, and an active lifestyle.",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rmets.org%2Fmetmatters%2Ftravellers-guide-sydney-australia&psig=AOvVaw2l6bIMdNC9B36ySqQd9_8D&ust=1757102039532000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCODL2qvxv48DFQAAAAAdAAAAABAE",
            country: "Australia",
            price: 2000,
            rating: 4.8
        },
        {
            id: "10",
            title: "Rio de Janeiro — The Carnival City",
            description: "Christ the Redeemer, Copacabana, and an incredible carnival.",
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rio.com%2Fpractical-rio%2Fwhen-go-rio-de-janeiro&psig=AOvVaw2U8bsOPoxDaovxjOq2NuDi&ust=1757102092736000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICu0MPxv48DFQAAAAAdAAAAABBQ",
            country: "Brazil",
            price: 1100,
            rating: 4.7
        }
    ]);

    console.log("Seed data inserted!");
};
