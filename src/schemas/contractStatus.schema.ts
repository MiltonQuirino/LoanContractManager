import * as mongoose from 'mongoose';

export const ContractStatusSchema = new mongoose.Schema({
    createadAt: Date,
    updateadAt: Date,
    type: Number,
    status: String,
    storage: String,
});