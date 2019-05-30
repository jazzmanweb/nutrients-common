export enum HttpSuccessStatus {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
}

export enum HttpRedirectionStatus {
    MOVED = 301,
}

export enum HttpClientErrorStatus {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
}

export enum HttpServerErrorStatus {
    INTERNAL_SERVER_ERROR,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504
}
