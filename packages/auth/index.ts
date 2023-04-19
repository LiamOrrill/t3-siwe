export { authOptions } from "./src/auth";
export { getServerAuthSession } from "./src/auth";
export type { Session } from "next-auth";
export type CreateContextOptions = {
  // session: Session | null;
  // #TODO figure out why Session is not working
  session: any | null;
};
