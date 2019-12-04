import * as mongoose from 'mongoose';

export const ContractStatusSchema = new mongoose.Schema({
    createadAt: Date,
    status: String,
    storage: String,
});
