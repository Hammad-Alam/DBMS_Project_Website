import { createUser, deleteUser, fetchSubAdmins, findUser } from "../queries/auth.queries.js";
import { STATUS_CODES } from "../utils/constant.js";
import { asyncHandler,generateResponse } from "../utils/helper.js";

export const register = asyncHandler(async (req, res, next) => {
    
    const { email,password,name } = req.body;

    const isUserExistAlready = await findUser(email);

    if(isUserExistAlready.length > 0){
        return generateResponse(null, "Email Already Exist", res, STATUS_CODES.BAD_REQUEST)
    }
    const createdUser = await createUser(email, password,name);
    if(createdUser.affectedRows === 0){
       return generateResponse(null, "User Not Created", res, STATUS_CODES.BAD_REQUEST)
    }
 
    generateResponse(null, "User has been Register", res)
});

export const login = asyncHandler(async (req, res, next) => {
    
    const { email, password } = req.body;

    const isUserExistAlready = await findUser(email);

    if(isUserExistAlready.length === 0){
        return generateResponse(null, "User Not Found", res, STATUS_CODES.BAD_REQUEST)
    }

    if(isUserExistAlready[0].password !== password){
        return generateResponse(null, "Password is incorrect", res, STATUS_CODES.BAD_REQUEST)
    }

    generateResponse(null, "User sucessfully login", res)    
});

export const fetchAdmins = asyncHandler(async (req, res, next) => {
    const results = await fetchSubAdmins();
    generateResponse(results, "Sub Admins Fetched", res);
})

export const deleteAdmin = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const results = await deleteUser(id);
    generateResponse(results, "Sub Admin Deleted", res);
})