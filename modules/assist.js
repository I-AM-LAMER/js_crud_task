import models from './models/models_saving.js'

export const Validators = {
    checkCorrectTime(hours, minutes){
        if(hours > 23 || hours < 0){
            throw 'hours must be between 0 and 23'
        }
        if(minutes > 59 || minutes < 0){
            throw 'minuted must be between 0 and 60'
        }
    },

    checkMoney(money){
        if(money < 0 || money > 99999){
            throw 'money should be in range between 0 and 99999'
        }
    }
}

export const Querying = {
    async queryAll(model, db) {
        return await db.any(`SELECT * FROM ${model.name}`);
    },

    async checkForUser(username, db){
        const stmt = `select * from users where username='${username}'`
        return await db.oneOrNone(stmt)
    },

    async queryCheck(model_name, data, db){
        let params = [];
        for (let key of Object.keys(data)){
            if (data[key] != "id"){
                params.push(`${key}='${data[key]}'`)
            }
        }
        const stmt = `select * from ${model_name} where ${params.join(" and ")}`
        return await db.oneOrNone(stmt)
    },

    async querySingle(model, db, id){
        return await db.any(`SELECT * FROM ${model.name} where id=${`'${id}'`}`)
    },

    async create(model, data, db){
        try{
            let stmt = `insert into ${model.name} (${Object.keys(data).join(", ")}) values (${Object.values(data).map(value => `'${value}'`).join(', ')}) returning id`
            const query = await db.any(stmt)
            data['id'] = query[0]['id']
            const instance = new model(data)
            let model_list = models.get(model)
            model_list.push(instance) 
            models.set(model, model_list)
            return query
        }catch(e){
            console.log(`ERROR: ${e}`)
        } 
    },

    async createUser(data, db){
        data['password'] = data['password']

        let stmt = `insert into users (${Object.keys(data).join(", ")}) values (${Object.values(data).map(value => `'${value}'`).join(', ')}) returning id`
        return await db.any(stmt)
    },

    async delete(model, data, db){
        try{
            let stmt = `delete from ${model.name} where id=${`'${data.id}'`} returning id`
            const query = await db.any(stmt)
            let new_model_list = models.get(model).filter(inst => inst.id == `'${data.id}'`)
            models.set(model, new_model_list)        
            return query
        }catch(e){
            console.log(`ERROR: ${e}`)
        } 
    },

    async update(model, data, db){
        try{
            let params = [];
            for (let key of Object.keys(data)){
                if (data[key] != "id"){
                    params.push(`${key} = '${data[key]}'`)
                }
            }
            let stmt = `update ${model.name} set ${params.join(", ")} where id=${`'${data.id}'`} returning id`
            const new_index = models.get(model).findIndex(inst => inst.id == `'${data.id}'`);
            let model_list = models.get(model)
            
            model_list.splice(new_index, 1, new model(data))

            models.set(model, model_list)
            await db.any(stmt)
            return await this.querySingle(model, db, data.id)       
        }catch(e){
            console.log(`ERROR: ${e}`)
        } 
    }
}