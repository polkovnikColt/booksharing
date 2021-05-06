import {Injectable} from '@nestjs/common';
import {getManager} from "typeorm";
import {Preference} from "../../entity/preference.entity";
import {PreferenceInterface} from "../../types/types";
import {getConnection} from "typeorm/index";

@Injectable()
export class PreferenceService {
    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async getUserPreference(id: number): Promise<PreferenceInterface> {
        const pref = await this.manager.findOne(Preference, {
            where: {
                user: id
            }
        });
        pref.user = await getConnection()
            .createQueryBuilder()
            .relation(Preference, "user")
            .of(pref)
            .loadMany();
        return pref;
    }


    async addToPReference(id: number, body): Promise<void> {
        const pref = this.manager.findOne(Preference, {
            where: {
                id: id
            }
        });
    }
}
