const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
        mac: String,
        description: String,
        ip: String,
        ip6: String,
        ip6Local: String,
        user: String,
        firstSeen: String,
        lastSeen: String,
        manufacturer: String,
        os: String,
        recentDeviceSerial: String,
        recentDeviceName: String,
        recentDeviceMac: String,
        ssid: String, 
        vlan: Number,
        switchport: String,
        status: String,
        notes: String, 
        smInstalled: String, 
        groupPolicy8021x: String 
},{
    timestamps:true
});

const produtos = mongoose.model('Produtos',DataSchema);
module.exports = produtos;