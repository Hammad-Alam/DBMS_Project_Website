export const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return next({
                statusCode: STATUS_CODES.UNPROCESSABLE_ENTITY,
                message: error.details[0].message.replace(/"/g, ''),
            });
        }
        next();
    };
}