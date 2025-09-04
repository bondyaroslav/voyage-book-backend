import app from "./app";
import {connectDB} from "./config/mongo";
import {seedPosts} from "./seeds/postsSeed";

const PORT = process.env.PORT || 5000;

connectDB().then(async () => {
    await seedPosts()
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})

