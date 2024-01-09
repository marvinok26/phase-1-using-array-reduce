const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calculate the total number of batteries
let totalBatteries = batteryBatches.reduce((acc, current) => acc + current, 0);