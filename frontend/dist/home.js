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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUFhLElBQUk7Ozs7Ozs7O0FBQUosVUFBSTtBQUNKLGlCQURBLElBQUk7Z0NBQUosSUFBSTs7QUFFYixjQUFJLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0FBQ2xFLGNBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzQyxjQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNwQjs7NkJBTFUsSUFBSTtBQU9mLGtCQUFRO21CQUFBLG9CQUFFO0FBQ1Isa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMsSUFBSSxFQUFDO0FBQ3pDLG9CQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztlQUM1QixDQUFDLENBQUM7YUFDSjs7Ozs7O2VBWlUsSUFBSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=