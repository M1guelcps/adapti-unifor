import { Router } from "express";
import { clientsRoutes } from "./clientsRoutes";

const routes = Router()

routes.use("/clients",clientsRoutes);

export {routes}