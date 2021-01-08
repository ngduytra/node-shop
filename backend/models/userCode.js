import mongoose from 'mongoose'

const userCodeSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:'User'
        },
        code:{
            type: String,
            required: true
        }
    }
)

const UserCode = mongoose.model('UserCode', userCodeSchema)
export default UserCode