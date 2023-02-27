import { AxiosResponse } from 'axios';
import ApiService from '../../../services/Api.services';

export class SurveyService {
    private apiService: ApiService;
    public abortController: AbortController;
    private baseApiRoute: string;

    constructor() {
        this.apiService = ApiService.getInstance();
        this.baseApiRoute = '/survey';
        this.abortController = new AbortController();
    }

    getSurvey(): Promise<AxiosResponse> {
        return this.apiService.get({
            resource: this.baseApiRoute,
            params: {
                signal: this.abortController.signal,
            },
        });
    }
}
