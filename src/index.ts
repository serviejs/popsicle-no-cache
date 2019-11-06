import { CommonRequest, CommonResponse } from "servie/dist/common";
import { getURL } from "servie-url";

export function noCache() {
  return function noCacheMiddleware<
    T extends CommonRequest,
    U extends CommonResponse
  >(req: T, next: () => Promise<U>): Promise<U> {
    const url = getURL(req);
    url.searchParams.set("_nocache", String(Date.now()));
    req.url = url.toString();

    req.headers.set(
      "Cache-Control",
      "no-cache,no-store,must-revalidate,max-age=-1"
    );

    return next();
  };
}
