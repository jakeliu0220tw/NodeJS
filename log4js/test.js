let log4js = require('log4js');

log4js.configure({
  "appenders": [
      {
          type: "file",
          filename: "test.log",
          maxLogSize: 1024,
          backups: 3,
          category: ["logfile", "console"]
      },
      {
          type: "console"
      }
  ],

  replaceConsole: true
});


let log = log4js.getLogger("logfile");

for (var i=0 ; i<5000; i++) {
    log.info("Logging with number %d", i);
    console.log("This should appear as info output");
}
