import { Button } from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import * as S from "./SurveyForm.styles";

interface SurveyFormProps {
    questions: any;
}

const SurveyForm = ({ questions }: SurveyFormProps) => {
    const handleOnSubmit = () => {
        console.log("submit");
    }

    return (
        <S.SurveyForm>
            {questions.map((item: any, index: number) => (
                <Card
                    key={index}
                    questionId={item.questionId}
                    questionType={item.questionType}
                    label={item.label}
                    required={item.required}
                    attributes={item.attributes} />
            ))}
            <Button 
                type="submit" 
                label="Submit"
                onClick={handleOnSubmit}
            />
        </S.SurveyForm>
    );
}

export default SurveyForm;