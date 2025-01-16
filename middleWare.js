module.exports=  reqFilter  = (req, res, next) => {
    if (!req.query.age){
        res.send("provide the age")
    }else if(req.query.age < 18){
        res.send("You cant acces the page")

    }
    else{
        next();

    }
}
