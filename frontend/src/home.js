export class Home{
  constructor(){
    var db = new Firebase("https://transmissiondata.firebaseio.com/");
    this.torrentsRef = db.child('torrentList');
    this.torrents = [];
  }

  activate(){
    var that = this;
    this.torrentsRef.on('value', function(data){
      that.torrents = data.val();
    });
  }
}
