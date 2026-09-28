import { Request, Response } from "express";
import { ClientsService } from "../services/clients-Services";

class ClientsController {
    private clientsService = new ClientsService();

    index = async (request: Request, response: Response) => {
        const clientes = await this.clientsService.findAll();

        response.status(200).json(clientes)
    }

    show = async (request: Request, response: Response) => {
        const { id } = request.params;

        const cliente = await this.clientsService.findById(Number(id))
        if (!cliente) {
            return response.status(404).json({ message: "Cliente não encontrado" })
        }
        response.status(200).json(cliente)
    }

    create = async (request: Request, response: Response) => {
        const { name, surname, email } = request.body;

        const novoCliente = await this.clientsService.create({ name, surname, email })
        response.status(201).json(novoCliente)
    }

    update = async (request: Request, response: Response) => {
        const { id } = request.params;
        const { name, surname, email } = request.body;

        const clienteAtualizado = await this.clientsService.update(Number(id), { name, surname, email })

        if (!clienteAtualizado) {
            return response.status(404).json({ message: "Cliente não encontrado" })
        }

        response.status(200).json(clienteAtualizado)
    }

    remove = async (request: Request, response: Response) => {
        const { id } = request.params;

        const removido = await this.clientsService.remove(Number(id))

        if (!removido) {
            return response.status(404).json({ message: "Cliente não encontrado" })
        }

        response.status(204).send()
    }

}

export { ClientsController };
