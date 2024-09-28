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
    },

    async querySerializer(object, db){
        try{
            let models = await db.any(`select * from ${object.name}`)
            return models
        }catch(e){
            console.log(e)
        }
    }
}    