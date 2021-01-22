var friendsNname = [ "uzzol", "sumi", "jhankar", "roky", "mathasagor", "jamal", "sadhon"];

function megaFriend(arr) {
  var longName = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > longName.length) {
      longName = arr[i];
    }
  }
  return longName;
}


console.log(megaFriend(friendsNname));