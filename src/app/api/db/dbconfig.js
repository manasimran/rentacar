import mongoose from 'mongoose';
// const mongoose=require('mongoose');
// import React from 'react'

export default async function connect() {

        try {
            await mongoose.connect('mongodb://localhost:27017/test');
            const connection=mongoose.connection;
            console.log(`MongoDB connected: ${connection.host}`);
        } catch (error) {
            console.error(" connection main error aa raha ha ");
        }
}
