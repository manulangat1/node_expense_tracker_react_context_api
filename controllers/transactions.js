//all the methods that intercat with db 


// @desc GET all Transaction
// @route GET /api/v1/transaction 
// @access Public
exports.getTransactions = (req,res,next) => {
    res.send('GET Transaction')
}

// @desc GET add Transaction
// @route POST /api/v1/transaction 
// @access Public
exports.addTransaction = (req,res,next) => {
    res.send('POST Transaction')
}

// @desc Delete  Transaction
// @route Delete /api/v1/transaction/:id
// @access Public
exports.deleteTransactions = (req,res,next) => {
    res.send('DELETE Transaction')
}