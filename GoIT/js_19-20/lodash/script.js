$(function(){
  $.ajax({
    url: "https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",
    success: success,
    error: function(){
      console.log('fail');
    }
  });
});

function success(data){
  var obj = JSON.parse(data);
  /* array of skills*/

  var skills = _.map(obj, 'skills');
  skills = _.flatten(skills);
  skills = _.uniq(skills);
  skills = _.orderBy(skills);
  console.log("skills array: ", skills);

  /* array users by friends */

  var userFriends = _.orderBy(obj, function(el){
    return 1 - el.friends.length;});
  userFriends = _.map(userFriends, 'name');

  console.log('users sorted by friends amount: ', userFriends);

  /* Массив всех друзей всех пользователей, не должно быть повторяющихся людей*/

  var friends = _.map(obj, "friends");
  friends = _.flatten(friends);
  friends = _.map(friends, "name");
  friends = _.flatten(friends);
  friends = _.uniq(friends);

  console.log('array of all friends', friends);
}