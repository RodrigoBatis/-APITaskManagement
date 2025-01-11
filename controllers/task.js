import { db } from "../db.js";

export const getTasks = (_, res) =>{
   const query = "SELECT * FROM t_task_management";

   db.query(query, (err, data) =>{
      if(err) return res.json(err);

      return res.status(200).json(data);
   });
};