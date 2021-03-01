const Cliente = require('../models/cliente.model');

module.exports = {
    async index(req, res) {
        const client_r = await Cliente.find();

        res.json(client_r);
    },
    async diferencadata(req, res) {
        const client_r = await Cliente.aggregate([
            {

                $project: {
                    _id: "$_id",
                    mac: "$mac",
                    lastSeen: { $dateToString: { date: { $toDate: "$lastSeen" }, format: "%Y-%m-%d %H:%M" } },
                    firstSeen: { $dateToString: { date: { $toDate: "$firstSeen" }, format: "%Y-%m-%d %H:%M" } },
                    // data2:{ $dateFromString:{  date: '$$NOW'}},
                    // difdata: [{ $subtract: ["$$NOW",  ] }]
                }
            }
        ]);


        res.json(client_r);
    },
    async coordenada(req, res) {
        const client_r = await Cliente.aggregate([
            {

                $project: {
                    _id: "$_id",
                    lat: "$lon",
                    lon: "$lat",
                }
            }
        ]);


        res.json(client_r);
    },
    async create(req, res) {
        const { mac, description, ip, ip6, ip6Local, user, firstSeen, lastSeen, manufacturer, os, recentDeviceSerial, recentDeviceName, recentDeviceMac, ssid, lon, lat, vlan, switchport, status, notes, sminstalled, grouppolicy8021x } = req.body;
        let data = {};
        let client_r = await Cliente.findOne({ mac });

        if (!client_r) {
            data = { mac, description, ip, ip6, ip6Local, user, firstSeen, lastSeen, manufacturer, os, recentDeviceSerial, recentDeviceName, recentDeviceMac, ssid, lon, lat, vlan, switchport, status, notes, sminstalled, grouppolicy8021x };

            client_r = await Cliente.create(data);
            return res.status(200).json(client_r);
        } else {
            return res.status(500).json(client_r);
        }
    },
    async details(req, res) {
        const { _id } = req.params;
        const client_r = await Cliente.findOne({ _id });
        res.json(client_r);
    },
    async grupoOS(req, res) {
        const client_r = await Cliente.aggregate([
            {
                $group: {
                    // const {_id} = req.params;
                    _id: { os: "$os" },
                    idsUnicos: { $addToSet: "$_id" },
                    total: { $sum: 1 }
                }
            },
            {
                $match: {
                    total: { "$gt": 1 }
                }
            }
        ]);
        res.json(client_r);
    },
    async grupoIP(req, res) {
        const client_r = await Cliente.aggregate([
            {
                $group: {
                    // const {_id} = req.params;
                    _id: { ip: "$ip" },
                    idsUnicos: { $addToSet: "$_id" },
                    total: { $sum: 1 }
                }
            },
            {
                $match: {
                    total: { "$gt": 1 }
                }
            }
            
        ]).sort({total:-1}).limit(10);
        res.json(client_r);
    },
    async delete(req, res) {
        const { _id } = req.params;
        const client_r = await Cliente.findByIdAndDelete({ _id });
        return res.json(client_r);
    },
    async update(req, res) {
        const { _id, mac, description, ip, ip6, ip6Local, user, firstSeen, lastSeen, manufacturer, os, recentDeviceSerial, recentDeviceName, recentDeviceMac, ssid, lon, lat, vlan, switchport, status, notes, sminstalled, grouppolicy8021x } = req.body;
        const data = { mac, description, ip, ip6, ip6Local, user, firstSeen, lastSeen, manufacturer, os, recentDeviceSerial, recentDeviceName, recentDeviceMac, ssid, lon, lat, vlan, switchport, status, notes, sminstalled, grouppolicy8021x };
        const client_r = await Cliente.findOneAndUpdate({ _id }, data, { new: true });
        res.json(client_r);
    }
}

