import { useState } from "react"
import useSurveyApiConsumer from "./useSurveyApiService";

export const useSurvey = () => {
    const { getSurvey } = useSurveyApiConsumer();
    const [isLoading, setIsLoading] = useState(true);
    const [survey, setSurvey] = useState<any>(null);

    const getData = async () => {
        setIsLoading(true);
        const response = await getSurvey();

        setSurvey(response);
        setIsLoading(false);
    }

    return {
        data: {
            isLoading,
            survey,
        },
        getData,
    };
}