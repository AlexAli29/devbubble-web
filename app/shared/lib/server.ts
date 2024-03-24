import { NextRequest } from "next/server";

export const checkSession = async (request: NextRequest) => {
  const session = request.cookies.get("Session");

  const isAuthorized = session
    ? await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/auth/session`, {
        method: "GET",
        headers: {
          Cookie: `${session.name}=${session.value}`,
        },
      })
        .then((response) => {
          return response.status === 200;
        })
        .catch((error) => {
          console.error("Ошибка при выполнении запроса:", error);
          return false;
        })
    : false;

  return isAuthorized;
};
