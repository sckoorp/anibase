import PocketBase from "pocketbase";

export const usePocketbase = (url: string) => {
  return new PocketBase(url);
}
