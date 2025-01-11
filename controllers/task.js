import { db } from "../db.js";

export const getTasks = (_, res) =>{
   const query = "SELECT * FROM t_task_management";

   db.query(query, (err, data) =>{
      if(err) return res.json(err);

      return res.status(200).json(data);
   });
};

export const addTask = (req, res) => {
   const query =
     "INSERT INTO t_task_management(`title`, `description`, `status`) VALUES(?)";
 
   const values = [
     req.body.title,
     req.body.description,
     req.body.status,
   ];
 
   db.query(query, [values], (err) => {
     if (err) return res.json(err);
 
     return res.status(200).json("Tarefa criado com sucesso.");
   });
 };


 export const updateTask = (req, res) => {
   const q =
     "UPDATE t_task_management SET `title` = ?, `description` = ?, `status` = ? WHERE `id` = ?";
 
   const values = [
     req.body.title,
     req.body.description,
     req.body.status
   ];
 
   db.query(q, [...values, req.params.id], (err) => {
     if (err) return res.json(err);
 
     return res.status(200).json("Tarefa atualizado com sucesso.");
   });
 };

 export const deleteTask = (req, res) => {
   const query = "DELETE FROM t_task_management WHERE `id` = ?";
 
   db.query(query, [req.params.id], (err) => {
     if (err) return res.json(err);
 
     return res.status(200).json("Tarefa deletado com sucesso.");
   });
 };