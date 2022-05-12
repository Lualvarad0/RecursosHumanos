const express = require('express');
const empleados = express.Router();
const db = require('../config/database');

empleados.post("/", async (req,res, next)=>{
    const {nombre,apellidos,telefono,correo,direccion} = req.body;
    if (nombre && apellidos && telefono && correo && direccion) {
        let query = "INSERT INTO empleados (nombre,apellidos,telefono,correo,direccion)";
        query += ` VALUES('${nombre}','${apellidos}','${telefono}','${correo}','${direccion}')`;
        
        const rows = await db.query(query);
        console.log(rows);
    
        if(rows.affectedRows == 1){
            return res.status(201).json({ code:201, message: "Empleado insertado correctamente"});
        } 
        return res.status(500).json({ code:500, message: "Ocurrio un error"});    
    }
    return res.status(500).json({ code:500, message: "Campos incompletos"});    

});


empleados.delete('/:name([A-Za-z]+)', async (req, res, next)=>{
    const query = `DELETE FROM empleados WHERE nombre=${req.params.name}`;

    const rows = await db.query(query);

    if (rows.affectedRows == 1) {
        return res.status(200).json({ code:200, message: "Empleado borrado correctamente"});
    }
    return res.status(404).json({code:404,message:"Empleado no encontrado"});
 
});

empleados.put('/:name([A-Za-z]+)', async (req,res,next)=>{
    const {nombre,apellidos,telefono,correo,direccion} = req.body;

    if (nombre && apellidos && telefono && correo && direccion) {
        let query = `UPDATE empleados SET nombre=${req.params.name},apellidos=${apellidos},`;
        query += `telefono=${telefono},correo=${correo},direccion=${direccion} WHERE nombre=${req.params.name}`;
        
        const rows = await db.query(query);
        console.log(rows);
    
        if(rows.affectedRows == 1){
            return res.status(201).json({ code:201, message: "Empleado actualizado correctamente"});
        } 
        return res.status(500).json({ code:500, message: "Ocurrio un error"});    
    }
    return res.status(500).json({ code:500, message: "Campos incompletos"});    

});

empleados.get('/:name([A-Za-z]+)', async (req, res, next)=>{
    const name = req.params.name;

    const emp = await db.query("SELECT * FROM empleados WHERE nombre='"+name+"';");

    if (emp.length>0){ 
        return res.status(200).json({ code:200, message: pkmn});
    } 
    
    return res.status(404).json({code:404,message:"Empleado no encontrado"});
});

module.exports = empleados;
