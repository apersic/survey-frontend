import useToast from '../../../common/utils/hooks/useToast';
import { SurveyService } from '../services/Survey.service';

export default function useSurveyApiConsumer() {
    const toast = useToast();
    const surveyService = new SurveyService();

    const getSurvey = async () => {
        try {
            const response = await surveyService.getSurvey();
            
            return response.data;
        } catch (e) {
            toast.show({
                message: "There was an error",
                severity: "error",
                wait: 3000
            });
        }
    };

    return {
        getSurvey,
    };
}
