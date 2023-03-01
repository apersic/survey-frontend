export const useSurveyValidator = () => {
    const validate = (values: { film: string | any[]; review: number | any[] }) => {
        const errors = {
            film: "",
            review: "",
        };

        if (!values.film || values.film === "") {
            errors.film = 'Required';
        }

        if (!values.review || values.review.toString() === "") {
            errors.review = 'Required';
        } else if (values.review < 1 || values.review > 5) {
            errors.review = 'Value out of range';
        }

        return errors;
    };

    return {
        validate
    }
}