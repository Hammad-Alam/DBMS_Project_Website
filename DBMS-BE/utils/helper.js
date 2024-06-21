export const generateResponse = (data, message, res, code = 200) => {
    return res.status(code).json({
        statusCode: code,
        message,
        data,
    });
}

export const asyncHandler = (requestHandler) => {
    return (req, res, next) => Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
};

export const generateRandomOTP = () => {
    return Math.floor(10000 + Math.random() * 90000);
}