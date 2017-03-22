var log4js = require('log4js')
, log
, i = 0;

// log4js.configure({
//   "appenders": [
//       {
//           type: "console"
//         , category: "console"
//       },
//       {
//           "type": "file",
//           "filename": "tmp-test.log",
//           "maxLogSize": 1024,
//           "backups": 3,
//           "category": "test"
//       }
//   ]
// });

log4js.configure({
  "appenders": [
      {
          "type": "file",
          "filename": "tmp-test.log",
          "maxLogSize": 1024*1024*5,
          "backups": 3,
          "category": ["test", "console"]
      },
      {
          type: "console"
      }
  ],
  replaceConsole: true
});



log = log4js.getLogger("test");

function doTheLogging(x) {
    log.info("Logging something %d", x);
    console.log("This should appear as info output");
}

for ( ; i < 5000; i++) {
    doTheLogging(i);
}
