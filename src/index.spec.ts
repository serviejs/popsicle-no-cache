import { compose } from "throwback";
import { toFetch } from "popsicle/dist/common";
import { Request, Response } from "servie/dist/node";
import { noCache } from "./index";

describe("popsicle no cache", () => {
  it("should set cache busting params", async () => {
    const spy = jest.fn(req => new Response());
    const fetch = toFetch(
      compose<Request, Response>([noCache(), spy]),
      Request
    );

    await fetch("/");

    expect(spy.mock.calls.length).toEqual(1);
    expect(spy.mock.calls[0][0].url).toMatch(
      /^http:\/\/localhost\/\?_nocache=\d+$/
    );
    expect(spy.mock.calls[0][0].headers.get("cache-control")).toEqual(
      "no-cache,no-store,must-revalidate,max-age=-1"
    );
  });
});
