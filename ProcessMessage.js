/*
* 2차원 배열 client_list 의 요소는 key, step
*
*/

module.exports=function(route){

    var client_list=new Array();
    var client_count=0;

  route.post('/',function(req,res){
    var v_type = req.body.type;
    var v_user_key = req.body.user_key;
    var v_content = req.body.content;
    var myQuery=require('./MyQuery');

    console.log("*** message.returnText =====================================")
    console.log("*** type : " + v_type);
    console.log("*** user_key : " + v_user_key);
    console.log("*** content : " + v_content);

    var client_index=require('./GetClientIndex')(client_list,client_count,v_user_key); //클라이언트의 인덱스를 구한다.

    if(client_index===-99){  //새로운 사용자 입력일 경우 한 행을 추가한다
      client_list[client_count]=new Array();
      client_list[client_count][0]=v_user_key;
      client_list[client_count][1]=0;
      client_index=client_count;
      client_count++;
    }

    var message;
    var conn=require('./AccessDB')();


      if(v_content==='ClassId로 조회' ||v_content==='classid')
      {
          client_list[client_index][1]=1;
          message='조회 할 ClassId를 입력해 주세요'
        //  require('./SendMessageToClient')(res,message);
      }
      else if(v_content==='이름으로 조회' ||v_content==='name'){
          client_list[client_index][1]=10;
          message='조회 할 학생의 이름을 입력해 주세요'
        //  require('./SendMessageToClient')(res,message);

      }
      else if(client_list[client_index][1]===1)
      {

          myQuery.searchingByClassID(conn,message,v_content,res);
          return;
      }
      else if(client_list[client_index][1]===10)
      {
          myQuery.searchingByName(conn,message,v_content,res);
          return;
      }
      else {
        message='잘못된 입력입니다 확인 후 재입력 해주세요.'
      //  require('./SendMessageToClient')(res,message);
      }
    require('./SendMessageToClient')(res,message);
  });

















  return route;
}
