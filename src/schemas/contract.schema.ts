import * as mongoose from 'mongoose';

export const ContractSchema = new mongoose.Schema({
    createadAt: Date,
    updateadAt: Date,
    loanAmount: Number,
    civilStatus: String,
    monthlyIncome: Number,
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContractStatus',
    },

});
