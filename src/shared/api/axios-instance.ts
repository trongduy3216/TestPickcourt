import { attachAuthInterceptor } from "./auth-interceptor";
import { createBaseApi } from "./create-base-api";

export const baseApi = createBaseApi();
attachAuthInterceptor(baseApi);
