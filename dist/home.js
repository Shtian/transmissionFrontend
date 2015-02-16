System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, Home;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Home = _export("Home", (function () {
        function Home() {
          _classCallCheck(this, Home);

          var db = new Firebase("https://transmissiondata.firebaseio.com/");
          this.torrentsRef = db.child("torrentList");
          this.torrents = [];
        }

        _prototypeProperties(Home, null, {
          activate: {
            value: function activate() {
              var that = this;
              this.torrentsRef.on("value", function (data) {
                that.torrents = data.val();
                that.torrents = _.map(that.torrents, function (item) {
                  item.totalSize = Math.floor(item.totalSize / 1000000);
                  item.addedDate = moment(item.addedDate, "X").fromNow();
                  return item;
                });
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Home;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUFhLElBQUk7Ozs7Ozs7O0FBQUosVUFBSTtBQUNKLGlCQURBLElBQUk7Z0NBQUosSUFBSTs7QUFFYixjQUFJLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0FBQ2xFLGNBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzQyxjQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNwQjs7NkJBTFUsSUFBSTtBQU9mLGtCQUFRO21CQUFBLG9CQUFFO0FBQ1Isa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMsSUFBSSxFQUFDO0FBQ3pDLG9CQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUUzQixvQkFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBUyxJQUFJLEVBQUM7QUFDakQsc0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELHNCQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3ZELHlCQUFPLElBQUksQ0FBQztpQkFDYixDQUFDLENBQUE7ZUFDSCxDQUFDLENBQUM7YUFDSjs7Ozs7O2VBbEJVLElBQUkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9