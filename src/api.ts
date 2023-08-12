/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/status": {
    /** @description get status */
    get: operations["status"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** @description error description */
    Error: {
      message: string;
    };
    User: {
      /**
       * Format: int64
       * @description User ID
       */
      id: number;
      /** @description User name */
      nickname: string;
      /** @description User full name */
      full_name: string;
      /**
       * Format: uri
       * @description User avatar URL
       */
      avatar_url: string;
      /**
       * Format: uri
       * @description User profile URL
       */
      html_url: string;
    };
    /** @description User statistics */
    UserStat: {
      user: components["schemas"]["User"];
      /** @description Total commits */
      total_commits: number;
    };
    /** @description Statistics */
    Statistics: {
      /** @description Total commits */
      total_commits: number;
      /** @description Top users */
      top_users: components["schemas"]["UserStat"][];
    };
    /** @description Status */
    Status: {
      /** @description Message */
      message: string;
      stat: components["schemas"]["Statistics"];
    };
  };
  responses: {
    /** @description Error while processing request */
    Error: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
  };
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /** @description get status */
  status: {
    responses: {
      /** @description Go Faster Status */
      200: {
        content: {
          "application/json": components["schemas"]["Status"];
        };
      };
      default: components["responses"]["Error"];
    };
  };
}
