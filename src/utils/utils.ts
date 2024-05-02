import get from "lodash.get";

export const getValue = (...param: any[]) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return get(...param)
}

export const isEmpty = (value: string | number | boolean | Array<any> | object): boolean => {
  return (
    value === undefined ||
    value === null ||
    isNaN(value) ||
    value === false ||
    value === 0 ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

