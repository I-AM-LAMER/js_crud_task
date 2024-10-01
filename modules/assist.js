// assist.js

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

export const Serializers = {
    timeSerializer(worktime){
        start = worktime['start'].split(':')
        end = worktime['end'].split(':')
        //TODO: finish when enshure in type of response
    }
}

export const Querying = {
    async queryAll(model, db) {
        return db.any(`SELECT * FROM ${model.name}`);
    },

    async querySingle(model, db, id){
        return db.any(`SELECT * FROM ${model.name} where id=${`'${id}'`}`)
    },

    async create(model, data, db){
        try{
            let stmt = `insert into ${model.name} (${Object.keys(data).join(", ")}) values (${Object.values(data).map(value => `'${value}'`).join(', ')}) returning id`
            const query = await db.any(stmt)
            return query
        }catch(e){
            console.log(`ERROR: ${e}`)
        } 
    },

    async delete(model, data, db){
        try{
            let stmt = `delete from ${model.name} where id=${`'${data.id}'`} returning id`
            const query = await db.any(stmt)
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
            await db.any(stmt)
            return await this.querySingle(model, db, data.id)
            
        }catch(e){
            console.log(`ERROR: ${e}`)
        } 
    }
}