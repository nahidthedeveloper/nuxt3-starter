export const objectToArray = (obj: Record<string, string>): Array<{ name: string; message: string }> => {
    let fieldsErrors: Array<{ name: string; message: string }> = [];

    Object.entries(obj).forEach((entry) => {
        const [key, value] = entry;
        fieldsErrors.push({
            name: key,
            message: value,
        });
    });

    return fieldsErrors;
}
