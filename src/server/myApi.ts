/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddMemberRequestApiDto {
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  positionId?: number;
  userName?: string | null;
  userEmail?: string | null;
  userPassword?: string | null;
  /** @format double */
  salary?: number;
}

export interface AddMetricRequestApiDto {
  /** @format int32 */
  positionId?: number;
  name?: string | null;
  /** @format int32 */
  weight?: number;
  description?: string | null;
  /** @format double */
  targetValue?: number;
}

export interface AddMetricResponseApiDto {
  item?: MetricApiDto;
}

export interface AddPositionRequestApiDto {
  name?: string | null;
  /** @format int32 */
  weight?: number;
  /** @format int32 */
  companyId?: number;
}

export interface AddPositionResponseApiDto {
  item?: PositionApiDto;
}

export interface ChangeUserPasswordRequestApiDto {
  /** @format int32 */
  id?: number;
  password?: string | null;
  repeatPassword?: string | null;
}

export interface CompanyApiDto {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  name?: string | null;
}

export interface CreateCompanyRequestApiDto {
  name?: string | null;
}

export interface CreateCompanyResponseApiDto {
  item?: CompanyApiDto;
}

export interface CreateFilialRequestApiDto {
  name?: string | null;
  address?: string | null;
  /** @format int32 */
  companyId?: number;
}

export interface CreateFilialResponseApiDto {
  item?: FilialApiDto;
}

export interface DeleteMetricRequestApiDto {
  /** @format int32 */
  id?: number;
}

export interface DeletePositionRequestApiDto {
  /** @format int32 */
  id?: number;
}

export interface FilialApiDto {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  name?: string | null;
  address?: string | null;
  company?: CompanyApiDto;
}

export interface GetCompanyByIdResponseApiDto {
  item?: CompanyApiDto;
}

export interface GetCompanyMembersByIdItemResponseApiDto {
  /** @format date-time */
  companyCreationDate?: string;
  companyName?: string | null;
  /** @format date-time */
  userCreationDate?: string;
  userName?: string | null;
  userEmail?: string | null;
  /** @format date-time */
  positionCreationDate?: string;
  positionName?: string | null;
  /** @format int32 */
  positionWeight?: number;
  /** @format double */
  salary?: number;
}

export interface GetCompanyMembersByIdResponseApiDto {
  items?: GetCompanyMembersByIdItemResponseApiDto[] | null;
}

export interface GetCompanyMetricsByIdRequestApiDto {
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  positionId?: number;
}

export interface GetCompanyMetricsByIdResponseApiDto {
  items?: MetricApiDto[] | null;
}

export interface GetCompanyPositionByIdResponseApiDto {
  items?: PositionApiDto[] | null;
}

export interface GetCompanyRatingByFilterItemResponseApiDto {
  name?: string | null;
  /** @format double */
  targetValue?: number;
  /** @format int32 */
  memberValue?: number;
}

export interface GetCompanyRatingByFilterRequestApiDto {
  /** @format date-time */
  creationDateFrom?: string;
  /** @format date-time */
  creationDateTo?: string;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  filialId?: number;
  /** @format int32 */
  positionId?: number;
  /** @format int32 */
  metricId?: number;
}

export interface GetCompanyRatingByFilterResponseApiDto {
  items?: GetCompanyRatingByFilterItemResponseApiDto[] | null;
}

export interface GetFilialByCompanyIdApiDto {
  items?: FilialApiDto[] | null;
}

export interface GetFilialByIdResponseApiDto {
  item?: FilialApiDto;
}

export interface GetUserByIdResponseApiDto {
  item?: UserApiDto;
}

export interface GetUserMetricsByIdRequestApiDto {
  /** @format int32 */
  userId?: number;
  /** @format date-time */
  dateFrom?: string;
  /** @format date-time */
  dateTo?: string;
}

export interface GetUserMetricsByIdResponseApiDto {
  items?: GetUserMetricsByIdResponseItemApiDto[] | null;
}

export interface GetUserMetricsByIdResponseItemApiDto {
  /** @format int32 */
  metricId?: number;
  metricName?: string | null;
  /** @format int32 */
  metricWeight?: number;
  metricDescription?: string | null;
  /** @format double */
  metricTargetValue?: number;
  /** @format int32 */
  count?: number;
  /** @format double */
  bonuses?: number;
}

export interface LoginUserRequestApiDto {
  email?: string | null;
  password?: string | null;
}

export interface LoginUserResponseApiDto {
  token?: string | null;
  refreshToken?: string | null;
}

export interface MetricApiDto {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  name?: string | null;
  /** @format int32 */
  weight?: number;
  description?: string | null;
  /** @format double */
  targetValue?: number;
  position?: PositionApiDto;
}

export interface PositionApiDto {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  name?: string | null;
  /** @format int32 */
  weight?: number;
  company?: CompanyApiDto;
}

export interface RefreshUserResponseApiDto {
  token?: string | null;
  refreshToken?: string | null;
}

export interface RegisterUserRequestApiDto {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  repeatPassword?: string | null;
}

export interface RegisterUserResponseApiDto {
  token?: string | null;
  refreshToken?: string | null;
}

export interface UpdateFilialRequestApiDto {
  /** @format int32 */
  filialId?: number;
  name?: string | null;
  address?: string | null;
  /** @format int32 */
  companyId?: number;
}

export interface UpdateFilialResponseApiDto {
  item?: FilialApiDto;
}

export interface UpdateMetricRequestApiDto {
  /** @format int32 */
  metricId?: number;
  /** @format int32 */
  positionId?: number;
  name?: string | null;
  /** @format int32 */
  weight?: number;
  description?: string | null;
  /** @format double */
  targetValue?: number;
}

export interface UpdateMetricResponseApiDto {
  item?: MetricApiDto;
}

export interface UpdatePositionRequestApiDto {
  /** @format int32 */
  positionId?: number;
  name?: string | null;
  /** @format int32 */
  weight?: number;
  /** @format int32 */
  companyId?: number;
}

export interface UpdatePositionResponseApiDto {
  item?: PositionApiDto;
}

export interface UserApiDto {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  creationDate?: string;
  name?: string | null;
  email?: string | null;
  /** @format int32 */
  companyId?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:5000";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title EmployeeMotivationSystem.API
 * @version 1.0
 * @baseUrl http://localhost:5000
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Auth
     * @name V1AuthRegisterCreate
     * @request POST:/api/v1/Auth/Register
     * @secure
     */
    v1AuthRegisterCreate: (data: RegisterUserRequestApiDto, params: RequestParams = {}) =>
      this.request<RegisterUserResponseApiDto, any>({
        path: `/api/v1/Auth/Register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name V1AuthLoginCreate
     * @request POST:/api/v1/Auth/Login
     * @secure
     */
    v1AuthLoginCreate: (data: LoginUserRequestApiDto, params: RequestParams = {}) =>
      this.request<LoginUserResponseApiDto, any>({
        path: `/api/v1/Auth/Login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name V1AuthLogoutCreate
     * @request POST:/api/v1/Auth/Logout
     * @secure
     */
    v1AuthLogoutCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/Auth/Logout`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name V1AuthRefreshCreate
     * @request POST:/api/v1/Auth/Refresh
     * @secure
     */
    v1AuthRefreshCreate: (params: RequestParams = {}) =>
      this.request<RefreshUserResponseApiDto, any>({
        path: `/api/v1/Auth/Refresh`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name V1CompaniesDetail
     * @request GET:/api/v1/Companies/{id}
     * @secure
     */
    v1CompaniesDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetCompanyByIdResponseApiDto, any>({
        path: `/api/v1/Companies/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name V1CompaniesMembersDetail
     * @request GET:/api/v1/Companies/{id}/members
     * @secure
     */
    v1CompaniesMembersDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetCompanyMembersByIdResponseApiDto, any>({
        path: `/api/v1/Companies/${id}/members`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name V1CompaniesRatingByFilterCreate
     * @request POST:/api/v1/Companies/RatingByFilter
     * @secure
     */
    v1CompaniesRatingByFilterCreate: (data: GetCompanyRatingByFilterRequestApiDto, params: RequestParams = {}) =>
      this.request<GetCompanyRatingByFilterResponseApiDto, any>({
        path: `/api/v1/Companies/RatingByFilter`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name V1CompaniesMetricsByFilterList
     * @request GET:/api/v1/Companies/MetricsByFilter
     * @secure
     */
    v1CompaniesMetricsByFilterList: (data: GetCompanyMetricsByIdRequestApiDto, params: RequestParams = {}) =>
      this.request<GetCompanyMetricsByIdResponseApiDto, any>({
        path: `/api/v1/Companies/MetricsByFilter`,
        method: "GET",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name V1CompaniesPositionsDetail
     * @request GET:/api/v1/Companies/{id}/positions
     * @secure
     */
    v1CompaniesPositionsDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetCompanyPositionByIdResponseApiDto, any>({
        path: `/api/v1/Companies/${id}/positions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name V1CompaniesCreate
     * @request POST:/api/v1/Companies
     * @secure
     */
    v1CompaniesCreate: (data: CreateCompanyRequestApiDto, params: RequestParams = {}) =>
      this.request<CreateCompanyResponseApiDto, any>({
        path: `/api/v1/Companies`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name V1CompaniesUpdateCompanyMemberUpdate
     * @request PUT:/api/v1/Companies/UpdateCompanyMember
     * @secure
     */
    v1CompaniesUpdateCompanyMemberUpdate: (
      data: {
        /** @format int32 */
        CompanyId?: number;
        /** @format int32 */
        MemberId?: number;
        /** @format int32 */
        PositionId?: number;
        /** @format double */
        Salary?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/Companies/UpdateCompanyMember`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name V1CompaniesMemberDelete
     * @request DELETE:/api/v1/Companies/{companyId}/member/{memberId}
     * @secure
     */
    v1CompaniesMemberDelete: (companyId: number, memberId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/Companies/${companyId}/member/${memberId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Filials
     * @name V1FilialsDetail
     * @request GET:/api/v1/Filials/{id}
     * @secure
     */
    v1FilialsDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetFilialByIdResponseApiDto, any>({
        path: `/api/v1/Filials/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Filials
     * @name V1FilialsDelete
     * @request DELETE:/api/v1/Filials/{id}
     * @secure
     */
    v1FilialsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/Filials/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Filials
     * @name V1FilialsByCompanyList
     * @request GET:/api/v1/Filials/ByCompany
     * @secure
     */
    v1FilialsByCompanyList: (
      query?: {
        /** @format int32 */
        companyId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetFilialByCompanyIdApiDto, any>({
        path: `/api/v1/Filials/ByCompany`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Filials
     * @name V1FilialsCreate
     * @request POST:/api/v1/Filials
     * @secure
     */
    v1FilialsCreate: (data: CreateFilialRequestApiDto, params: RequestParams = {}) =>
      this.request<CreateFilialResponseApiDto, any>({
        path: `/api/v1/Filials`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Filials
     * @name V1FilialsUpdate
     * @request PUT:/api/v1/Filials
     * @secure
     */
    v1FilialsUpdate: (data: UpdateFilialRequestApiDto, params: RequestParams = {}) =>
      this.request<UpdateFilialResponseApiDto, any>({
        path: `/api/v1/Filials`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Members
     * @name V1MembersCreate
     * @request POST:/api/v1/Members
     * @secure
     */
    v1MembersCreate: (data: AddMemberRequestApiDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/Members`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metrics
     * @name V1MetricsCreate
     * @request POST:/api/v1/Metrics
     * @secure
     */
    v1MetricsCreate: (data: AddMetricRequestApiDto, params: RequestParams = {}) =>
      this.request<AddMetricResponseApiDto, any>({
        path: `/api/v1/Metrics`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metrics
     * @name V1MetricsUpdate
     * @request PUT:/api/v1/Metrics
     * @secure
     */
    v1MetricsUpdate: (data: UpdateMetricRequestApiDto, params: RequestParams = {}) =>
      this.request<UpdateMetricResponseApiDto, any>({
        path: `/api/v1/Metrics`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metrics
     * @name V1MetricsDelete
     * @request DELETE:/api/v1/Metrics
     * @secure
     */
    v1MetricsDelete: (data: DeleteMetricRequestApiDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/Metrics`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Positions
     * @name V1PositionsCreate
     * @request POST:/api/v1/Positions
     * @secure
     */
    v1PositionsCreate: (data: AddPositionRequestApiDto, params: RequestParams = {}) =>
      this.request<AddPositionResponseApiDto, any>({
        path: `/api/v1/Positions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Positions
     * @name V1PositionsUpdate
     * @request PUT:/api/v1/Positions
     * @secure
     */
    v1PositionsUpdate: (data: UpdatePositionRequestApiDto, params: RequestParams = {}) =>
      this.request<UpdatePositionResponseApiDto, any>({
        path: `/api/v1/Positions`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Positions
     * @name V1PositionsDelete
     * @request DELETE:/api/v1/Positions
     * @secure
     */
    v1PositionsDelete: (data: DeletePositionRequestApiDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/Positions`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V1UsersDetail
     * @request GET:/api/v1/Users/{id}
     * @secure
     */
    v1UsersDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetUserByIdResponseApiDto, any>({
        path: `/api/v1/Users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V1UsersMetricsCreate
     * @request POST:/api/v1/Users/Metrics
     * @secure
     */
    v1UsersMetricsCreate: (data: GetUserMetricsByIdRequestApiDto, params: RequestParams = {}) =>
      this.request<GetUserMetricsByIdResponseApiDto, any>({
        path: `/api/v1/Users/Metrics`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V1UsersChangePasswordCreate
     * @request POST:/api/v1/Users/ChangePassword
     * @secure
     */
    v1UsersChangePasswordCreate: (data: ChangeUserPasswordRequestApiDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/Users/ChangePassword`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
