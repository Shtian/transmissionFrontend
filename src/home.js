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
      that.torrents = _.sortBy(that.torrents, 'addedDate').reverse();
      // Normalize values
      that.torrents = _.map(that.torrents, function(item){
        item.totalSize = Math.floor(item.totalSize / 1000000);
        item.addedDate = moment(item.addedDate, "X").fromNow();
        return item;
      });
    });
  }
}
