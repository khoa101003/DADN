const { createNotification } = require('./notification.controller')
const { getThresholdById } = require('./device.controller')

module.exports.checkThreshold = async (context) => {
    if (context['record']) {
        const dt = context['record']
        const io = context['io']
        const newValue = context['new-value']

        const {min, max} = await getThresholdById(dt.id)
        if (newValue.value < min || newValue.value > max) {
          const threshold = newValue.value < min ? min : max;
          const type = dt.type === 'air' ? "Air Humidity"
                  : dt.type === 'temp' ? "Temperature" 
                  : "Soil Humidity";
          await createNotification(type, dt.owner, false, newValue.value, threshold, newValue.log_time, "SuperGarden", 1, 5)
          if (io.sockets.adapter.rooms.has(`notify-${dt.owner}`)) {
            io.to(`notify-${dt.owner}`).emit('newNotify')
          }
        }
    }
}