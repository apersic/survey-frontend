import * as S from "./SurveyDescription.styles";

interface SurveyDescriptionProps {
    content: string;
}

export const SurveyDescription = ({ content }: SurveyDescriptionProps) => {
    return (
        <S.SurveyDescription dangerouslySetInnerHTML={{__html: content}}></S.SurveyDescription>
    );
}