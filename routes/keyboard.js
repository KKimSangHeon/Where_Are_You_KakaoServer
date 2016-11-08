exports.returnAlive = function(req, res) {
    res.send({type:'buttons', buttons:['ClassId로 조회','이름으로 조회']});

};
