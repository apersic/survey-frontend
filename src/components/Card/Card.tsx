import { InputField } from "../InputField/InputField";
import * as S from "./Card.styles";

export interface CardProps {
    questionId: string,
    questionType: string,
    label: string,
    required: boolean,
    attributes: Object | null,
}

const Card = ({ questionId, questionType, label, required, attributes }: CardProps) => {
    const getInputType = () => {
        if (questionType === "rating") {
            return "number";
        }

        return questionType;
    }

    return (
        <S.Card>
            <S.CardText>{label}</S.CardText>
            <InputField type={getInputType()} placeholder="Write your answer here..." {...attributes} />
        </S.Card>
    );
}

export default Card;