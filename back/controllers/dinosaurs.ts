import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import dinosaurRepo from "../repositories/dinosaurRepo.ts";
import { Dinosaur } from "../types/types.ts";


const getDinosaurs = async ({ response }: { response: Response }) => {
  const dinosaurs: Dinosaur[] = await (await dinosaurRepo.selectAll()).rows;
  response.body = {
    success: true,
    data: dinosaurs,
  };
};

const getDinosaur = async (
  { params, response }: { params: { id: string }; response: Response },
) => {
  const selectedDino: Dinosaur[] = await (await dinosaurRepo.selectById(params.id)).rows;

  if (selectedDino.length === 1) {
    response.status = 200;
    response.body = {
      success: true,
      data: selectedDino[0],
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "Dinosaur Not Found",
    };
  }
};

const addDinosaur = async (
  { request, response }: { request: Request; response: Response },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const { value: dinosaurBody } = await request.body();
    const dinosaur: Dinosaur = await dinosaurBody;
    await dinosaurRepo.create(dinosaur);
    response.status = 201;
    response.body = {
      success: true,
      data: dinosaur,
    };
  }
};

const deleteDinosaur = async (
  { params, response }: { params: { id: string }; response: Response },
) => {
  const dinosaur: Dinosaur[] = await (await dinosaurRepo.selectById(params.id)).rows;
  if (dinosaur.length !== 1) {
    response.status = 404;
    response.body = {
      success: false,
      msg: "Not found",
    };
  } else {
    await dinosaurRepo.delete(params.id);
    response.status = 200;
    response.body = {
      success: true,
      msg: `Dinosaur with id ${params.id} has been deleted`,
    };
  }
};

const updateDinosaur = async (
  { params, request, response }: {
    params: { id: string };
    request: Request;
    response: Response;
  },
) => {
  const requestedDinosaur: Dinosaur[] = await (await dinosaurRepo.selectById(params.id)).rows;

  if (requestedDinosaur.length === 1) {
    const { value: updatedDinosaurBody } = await request.body();
    const updatedDinosaur: Dinosaur = await updatedDinosaurBody;
    dinosaurRepo.update(params.id, await updatedDinosaur)
    response.status = 200;
    response.body = {
      success: true,
      msg: `Dinosaur id ${params.id} updated`,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: `Not Found`,
    };
  }
};

export {
  updateDinosaur,
  deleteDinosaur,
  getDinosaurs,
  getDinosaur,
  addDinosaur,
};
