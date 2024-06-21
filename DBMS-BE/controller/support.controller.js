import { createSupport, getSupport } from "../queries/support.queries.js";
import { asyncHandler,generateResponse } from "../utils/helper.js";

export const createSupportMessage = asyncHandler (async (req,res) => {
    const {firstName,lastName,email,message} = req.body;
    console.log("message from controller",message);
    const results = await createSupport({firstName,lastName,email,message});
    generateResponse(results,"Message Created",res);
}); 

export const fetchSupportMessages = asyncHandler (async (req,res) => {
    const results = await getSupport();
    generateResponse(results,"Messages Fetched",res);
});


