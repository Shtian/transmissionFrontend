var firebase = require('firebase');

export class Welcome{
  constructor(){
    this.transmissionDb = new Firebase("https://transmissiondata.firebaseio.com/");
    this.torrentListRef = this.transmissionDb.child('torrentList');
    this.isLoading = true;
    this.torrents = [];
  }

  set torrents(value){
    this.torrents = value;
  }

  get torrents(){
    return this.torrents;
  }

  retrieveTorrents(){
    this.isLoading = true;
    this.torrentListRef.on('value', function(data){
      this.torrents = data;
      this.isLoading = false;
    })
  }
}
