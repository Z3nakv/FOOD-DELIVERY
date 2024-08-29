import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://adrivarola18:fi8sQVFqseXe9g6p@cluster0.sqx8txg.mongodb.net/food-del')
        .then(() => console.log("DB connected"))
}