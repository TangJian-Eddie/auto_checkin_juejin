const schedule = require("./utils/schedule");
const { log } = require("./utils/index");
const juejin = require("./juejin");
// 每天6点30签到
schedule.setSchedule({ minute: 30, hour: 6 }, async () => {
  await juejin.checkIn();
  await juejin.draw();
});
log("开始运行");
