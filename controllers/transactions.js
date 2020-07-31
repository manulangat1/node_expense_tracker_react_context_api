//all the methods that intercat with db 


// @desc GET all Transaction
// @route GET /api/v1/transaction 
// @access Public
exports.getTransactions = (req,res,next) => {
    res.send('GET Transaction')
}