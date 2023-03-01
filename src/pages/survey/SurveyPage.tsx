import { useEffect } from "react";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import { SurveyDescription } from "./components/SurveyDescription";
import SurveyForm from "./components/SurveyForm";
import { useSurvey } from "./consumers/useSurvey";
import useSurveyApiConsumer from "./consumers/useSurveyApiService";
import * as S from "./SurveyPage.styles";

const SurveyPage = () => {
    const { data, getData } = useSurvey();
    const { submitAnswers } = useSurveyApiConsumer();

    useEffect(() => {
        (async () => await getData())();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnSubmit = async (payload: any) => {
        const response = await submitAnswers(payload, data.survey.id);
        console.log(response);
    }

    if (data.isLoading) {
        return (
            <S.Layout>
                <LoadingComponent text="Loading" />
            </S.Layout>
        );
    }

    return (
        <S.Layout>
            <S.SurveyTitle>{data.survey.attributes.title}</S.SurveyTitle>
            <SurveyDescription content={data.survey.attributes.description} />
            <SurveyForm questions={data.survey.attributes.questions} handleOnSubmit={handleOnSubmit} />
        </S.Layout>
    );
}

export default SurveyPage;