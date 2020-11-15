import client from "../db/database.ts";
import { Dinosaur } from "../types/types.ts";

class DinosaurRepo {
    create(dinosaur: Dinosaur) {
        return client.query(
            "INSERT INTO dinosaur (name, era, area, diet) VALUES ($1, $2, $3, $4)",
            dinosaur.name,
            dinosaur.era,
            dinosaur.area,
            dinosaur.diet,
        );
    }

    selectAll() {
        return client.query("SELECT * FROM dinosaur ORDER BY id");
    }

    selectById(id: string) {
        return client.query(`SELECT * FROM dinosaur WHERE id = $1`, id);
    }
    async update(id: string, dinosaur: Dinosaur) {
        const latestDinosaur: Dinosaur[] =  await (await this.selectById(id)).rows;
        if (latestDinosaur.length > 1 || latestDinosaur.length < 1) { return ;}
        const query = `UPDATE dinosaur SET name = $1, era = $2, area = $3, diet = $4 WHERE id = $5`;

        return client.query(query,
            dinosaur.name !== undefined ? dinosaur.name : latestDinosaur[0].name,
            dinosaur.era !== undefined ? dinosaur.era : latestDinosaur[0].era,
            dinosaur.area !== undefined ? dinosaur.area : latestDinosaur[0].area,
            dinosaur.diet !== undefined ? dinosaur.diet : latestDinosaur[0].diet, id);
    }
    delete(id: string) {
        var query = `DELETE dinosaur WHERE id = $1`;

        return client.query(query, undefined, id);
    }
}

export default new DinosaurRepo();