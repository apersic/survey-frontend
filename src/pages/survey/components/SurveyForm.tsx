import { FormEvent, useState } from "react";
import useToast from "../../../common/utils/hooks/useToast";
import { useSurveyValidator } from "../../../common/utils/hooks/validators/useSurveyValidator";
import { Button } from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import * as S from "./SurveyForm.styles";

interface SurveyFormProps {
    questions: any;
    handleOnSubmit: (payload: any) => void;
}

const SurveyForm = ({ questions, handleOnSubmit }: SurveyFormProps) => {
    const toast = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { validate } = useSurveyValidator()
    const [filmValue, setFilmValue] = useState('');
    const [reviewValue, setReviewValue] = useState(0);
    const initialErrors = {
        "film": '',
        "review": '',
    }
    const [errors, setErrors] = useState(initialErrors);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        setIsSubmitting(true);
        setErrors(initialErrors);
        const formErrors = validate(
            {
                film: filmValue,
                review: reviewValue
            }
        );

        // Check for form errors
        if (formErrors.film !== '' || formErrors.review !== '') {
            setErrors(formErrors);

            toast.show({
                message: "Please correct invalid fields",
                severity: "error",
                wait: 3000
            });
            setIsSubmitting(false);

            return;
        }

        const payload = {
            data: {
                type: "surveyAnswers",
                attributes: {
                    answers: [
                        {
                            questionId: "film",
                            answer: filmValue
                        },
                        {
                            questionId: "review",
                            answer: reviewValue,
                        }
                    ]
                },
            }
        }

        handleOnSubmit(payload);
        setIsSubmitting(false);
    }

    const handleOnChange = (event: any, id: string) => {
        if (id === "film") {
            setFilmValue(event.target.value);
        } else if (id === "review") {
            setReviewValue(event.target.value);
        }
    }

    const getInputError = (id: string) => {
        if (id === "film") {
            return errors.film;
        } else if (id === "review") {
            return errors.review;
        }
    }

    return (
        <S.SurveyForm onSubmit={(e) => onSubmit(e)}>
            {questions.map((item: any, index: number) => (
                <Card
                    key={index}
                    questionId={item.questionId}
                    questionType={item.questionType}
                    label={item.label}
                    required={item.required}
                    attributes={item.attributes}
                    onChange={(e) => handleOnChange(e, item.questionId)}
                    error={getInputError(item.questionId)}
                />
            ))}
            <Button
                type="submit"
                label={isSubmitting ? "Submitting" : "Submit"}
                disabled={isSubmitting}
            />
        </S.SurveyForm>
    );
}

export default SurveyForm;