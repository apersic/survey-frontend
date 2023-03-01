import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { showToast } from '../common/utils/hooks/useToast';
interface GetParams {
  resource: string;
  params: AxiosRequestConfig;
}

interface PostParams {
  resource: string;
  data: unknown;
}

interface PatchParams {
  resource: string;
  data: unknown;
}

interface PutParams {
  resource: string;
  data: unknown;
}

interface DeleteParams {
  resource: string;
}

export default class ApiService {
  static serviceInstance: ApiService;
  instance: AxiosInstance;

  constructor() {
    axios.defaults.withCredentials = false;

    this.instance = axios.create({
      baseURL: getBaseURL(),
    });

    this.setResponseInterceptors();
  }

  public static getInstance(): ApiService {
    if (!ApiService.serviceInstance) {
      ApiService.serviceInstance = new ApiService();
    }
    return ApiService.serviceInstance;
  }

  async handle404Error() {
    await showToast(3000, 'Not found!');
  }

  setResponseInterceptors(): void {
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response?.status === 404) {
          this.handle404Error();
        } else {
          return Promise.reject(error);
        }
      },
    );
  }

  get<T>({ resource, params }: GetParams): Promise<AxiosResponse<T>> {
    return this.instance.get(resource, params);
  }

  post<T>({ resource, data }: PostParams): Promise<AxiosResponse<T>> {
    return this.instance.post(resource, data);
  }

  patch<T>({ resource, data }: PatchParams): Promise<AxiosResponse<T>> {
    return this.instance.patch(resource, data);
  }

  put<T>({ resource, data }: PutParams): Promise<AxiosResponse<T>> {
    return this.instance.put(resource, data);
  }

  delete<T>({ resource }: DeleteParams): Promise<AxiosResponse<T>> {
    return this.instance.delete(resource);
  }
}

function getBaseURL() {
  return "http://127.0.0.1:8050/api/v1/";
}

ApiService.getInstance();
