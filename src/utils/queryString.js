import { parse, stringify } from "query-string";

const setQueryStringWithoutPageReload = qsValue => {
    const newurl = window.location.protocol + "//" +
    window.location.host +
    window.location.pathname +
    qsValue;

    window.history.pushState({ path: newurl }, "", newurl);
};

export const setQueryStringValue = (
    key,
    value,
    queryString = window.location.search
) => {
    const values = parse(queryString);
    const newQsValue = stringify({ ...values, [key]: value });
    setQueryStringWithoutPageReload(`?${newQsValue}`);
};

export const getQueryStringValue = (
    key,
    queryString = window.location.search
) => {
    const values = parse(queryString);
    return values[key];
};
