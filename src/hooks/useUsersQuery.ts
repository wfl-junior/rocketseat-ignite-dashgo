import { useQuery } from "react-query";
import { User } from "../@types/api";
import { api } from "../services/api";

interface GetUsersResponse {
  users: User[];
  totalCount: number;
}

async function getUsers(page = 1): Promise<GetUsersResponse> {
  const { data, headers } = await api.get<{ users: User[] }>("/users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);
  const users = data.users.map(
    (user): User => ({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    }),
  );

  return {
    users,
    totalCount,
  };
}

export function useUsersQuery(page = 1) {
  return useQuery(["users", { page }], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
