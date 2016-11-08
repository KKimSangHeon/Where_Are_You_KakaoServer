exports.searchingByClassID = function(conn,message,v_content,res) {

  var sql = 'SELECT * FROM studentdata WHERE classid=\''+v_content+'\'';

  conn.query(sql, function(err, rows, fields){
    if(err){
      console.log(err);

    } else {
              message='학생들의 현재위치\n-----------------\n'
        for(var i in rows){
              message+='이름: '+rows[i].name+' X: '+rows[i].coordinate_x+' Y '+rows[i].coordinate_y+'\n';
        }

        if(rows.length===0)
        {
          message=v_content+'에 해당하는 학생이 존재하지 않습니다.\n'
        }
        message+='-----------------\n조회 할 ClassId를 입력해 주세요\n이름으로 다시조회하시려면 name을 입력해주세요'
        require('./SendMessageToClient')(res,message);

    }
    });
  conn.end();
};
exports.searchingByName = function(conn,message,v_content,res) {

  var sql = 'SELECT * FROM studentdata WHERE name=\''+v_content+'\'';

  conn.query(sql, function(err, rows, fields){
    if(err){
      console.log(err);

    } else {
            message=v_content+'학생의 현재위치\n-----------------\n'
        for(var i in rows){
              message+='이름: '+rows[i].name+' X: '+rows[i].coordinate_x+' Y '+rows[i].coordinate_y+'\n';

        }
        if(rows.length===0)
        {
          message=v_content+'학생이 존재하지 않습니다.\n'
        }
        message+='-----------------\n조회 할 이름을 입력해 주세요\nClassId로 다시조회하시려면 classid을 입력해주세요'
        require('./SendMessageToClient')(res,message);

    }
    });
  conn.end();
};
