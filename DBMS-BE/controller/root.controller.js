import { generateResponse, asyncHandler } from '../utils/helper.js';

const defaultHandler = asyncHandler(async (req, res, next) => {
        generateResponse(null,"health check passed apis",res)
});

export { defaultHandler }
