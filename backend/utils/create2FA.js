import twoFactor from 'node-2fa'
import UserCode from '../models/userCode.js'
import asyncHandler from 'express-async-handler'

const createCode = asyncHandler(async(idUser)=>{
    const newSecret = twoFactor.generateSecret(idUser);
    const newToken = twoFactor.generateToken(newSecret.secret)
    await UserCode.create({
        user: idUser,
        code: newToken.token
    })
    return newToken.token
})

export default createCode