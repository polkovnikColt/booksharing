import {BadRequestException, Injectable} from '@nestjs/common';
import {getManager} from "typeorm";
import {Preference} from "../../entity/preference.entity";
import {PreferenceInputInterface, PreferenceInterface} from "../../types/types";
import {getConnection} from "typeorm/index";

@Injectable()
export class PreferenceService {
    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async getAllPreference(): Promise<PreferenceInterface[]> {
        return await this.manager.find(Preference);
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


    async addToPreference(id: number, body: PreferenceInputInterface): Promise<void> {
        const pref: PreferenceInterface = this.manager.findOne(Preference, {
            where: {
                user: id
            }
        });
        if (pref) {
            pref.author.push(body.author);
            pref.genre.push(body.genre)
            await this.manager.save(pref);
        } else {
            throw new BadRequestException();
        }
    }
}
