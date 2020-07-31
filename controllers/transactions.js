//all the methods that intercat with db 
const Transaction = require('../models/Transaction')

// @desc GET all Transaction
// @route GET /api/v1/transaction 
// @access Public
exports.getTransactions = async (req,res,next) => {
    try{
        const transactions = await Transaction.find()
        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        })
    } catch (err){
        return res.send(500).json({
            success:false,
            error:"Server Error"
        })
    }
}

// @desc GET add Transaction
// @route POST /api/v1/transaction 
// @access Public
exports.addTransaction = async (req,res,next) => {
    res.send('POST Transaction')
}

// @desc Delete  Transaction
// @route Delete /api/v1/transaction/:id
// @access Public
exports.deleteTransactions = async (req,res,next) => {
    res.send('DELETE Transaction')
}