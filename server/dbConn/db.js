import mongoose from 'mongoose'

const connect = ()=>{
    try {
        if(mongoose.connect(process.env.MONGO_URI)){
            console.log('Successfully connected to Database ')
        } else{
            console.log('There was an error connecting the Database ')
        }
    } catch (error) {
        

        console.error(error);
        
        
    }
}

export default connect