import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import * as S from "./SurveyPage.styles";

const MOCK_DATA = [
    {
        questionId: "film",
        questionType: "text",
        label: "What film did you watch",
        required: true,
        attributes: null,
    },
    {
        questionId: "review",
        questionType: "rating",
        label: "Rate the film",
        required: true,
        attributes: {
            min: 1,
            max: 5
        },
    }
];

const SurveyPage = () => {
    return (
        <Layout>
            <S.SurveyTitle>
                Film feedback form
            </S.SurveyTitle>
            <S.SurveyDescription>
                Thank you for participating bla bla bla bla v bla bla bla bla
            </S.SurveyDescription>
            <Card>
                <p>Question example</p>
                <span>answer field</span>
            </Card>
        </Layout>
    );
}

export default SurveyPage;