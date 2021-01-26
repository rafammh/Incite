const Produto = require('../models/produto.model');

module.exports = {
    async index(req,res){
        const product = await Produto.find();
        res.json(product);
    },
    async create(req,res){
        const {mac,description,ip,ip6,ip6Local,user,firstSeen,lastSeen,manufacturer,os,recentDeviceSerial,recentDeviceName,recentDeviceMac,ssid,vlan,switchport,status,notes,sminstalled,grouppolicy8021x} = req.body;
        let data = {};
        let product =  await Produto.findOne({mac});
        
        if(!product){
            data = {mac,description,ip,ip6,ip6Local,user,firstSeen,lastSeen,manufacturer,os,recentDeviceSerial,recentDeviceName,recentDeviceMac,ssid,vlan,switchport,status,notes,sminstalled,grouppolicy8021x};

            product = await Produto.create(data);
            return res.status(200).json(product);
        }else{
            return res.status(500).json(product);
        }
    },
    async details(req,res){
        const {_id} = req.params;
        const product = await Produto.findOne({_id});
        res.json(product);
    },
    async delete(req,res){
        const { _id } = req.params;
        const product = await Produto.findByIdAndDelete({_id});
        return res.json(product);
    },
    async update(req,res){
        const { _id, mac,description,ip,ip6,ip6Local,user,firstSeen,lastSeen,manufacturer,os,recentDeviceSerial,recentDeviceName,recentDeviceMac,ssid,vlan,switchport,status,notes,sminstalled,grouppolicy8021x} = req.body;
        const data = {mac,description,ip,ip6,ip6Local,user,firstSeen,lastSeen,manufacturer,os,recentDeviceSerial,recentDeviceName,recentDeviceMac,ssid,vlan,switchport,status,notes,sminstalled,grouppolicy8021x};
        const product = await Produto.findOneAndUpdate({_id},data,{new:true});
        res.json(product);
    }
}