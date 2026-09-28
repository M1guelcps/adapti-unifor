import { Router } from "express";
import { ClientsController } from "../controllers/clients-Controller";


const clientsRoutes = Router();
const clientsController = new ClientsController;

clientsRoutes.get("/",clientsController.index)
clientsRoutes.get("/:id", clientsController.show)
clientsRoutes.post("/",clientsController.create)
clientsRoutes.put("/:id", clientsController.update)
clientsRoutes.delete("/:id", clientsController.remove)

export {clientsRoutes}