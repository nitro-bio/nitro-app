import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";
import { z } from "zod";
const origin = window.location.origin;
const baseUrl = z.string().url().parse(origin);
export const w = wretch(baseUrl).addon(QueryStringAddon);
