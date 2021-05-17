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
        const pref: PreferenceInterface = await this.manager.findOne(Preference, {
            where: {
                user: body.user
            }
        });
        if (pref) {
            if(pref.author.length >= 10 || pref.genre.length >= 10 ) {
                const authorCut = [];
                const genreCut = [];
                for ( let i = pref.author.length - 3; i > 0; i--) {
                    authorCut.push(pref.author[i]);
                    genreCut.push(pref.author[i]);
                }
                pref.author = authorCut;
                pref.genre = genreCut;
            }
            pref.author.push(body.author);
            pref.genre.push(body.genre);
            await this.manager.save(pref);
        } else {
            throw new BadRequestException();
        }
    }

    async getPreference(id:number):Promise<PreferenceInterface> {
        const allPreference:PreferenceInterface[] = await this.manager
            .find(Preference);
        const myPreference:PreferenceInterface = await this.manager
            .findOne(Preference, {where: {user: id}});
        console.log(allPreference)
       let res:PreferenceInterface = {id: 0, author: [], genre: [] , user: id};
        for(let i = 0; i < allPreference.length; i++) {
           for(let j = 0; j < allPreference[i].author.length; j++){
               console.log(allPreference[i].author)
               if(!res.author.includes(allPreference[i].author[j])){
                   res.author.push(allPreference[i].author[j]);
               }
               if(!res.genre.includes(allPreference[i].genre[j])) {
                   res.genre.push(allPreference[i].genre[j]);
               }
           }
        }
        res.author.concat(myPreference.author);
        res.genre.concat(myPreference.genre);
        console.log(res);
        return res;
    }
}
