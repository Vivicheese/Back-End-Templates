 const handler = (err,req,res,next)=>{
    console.log(err)
    // check if the error has a custom code
    const statusCode = err.statusCode ||500
    // check if the error has a message
    const message=err.message|| "internal server error"
    res.status(statusCode).json({error:message})
};

module.exports = handler;