import instance from "./index";

export const getData = () => instance.get('users/.json')