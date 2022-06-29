import { useQuery } from "react-query";
import { User } from "../@types/api";
import { api } from "../services/api";

async function getUsers(): Promise<User[]> {
  const { data } = await api.get<{ users: User[] }>("/users");

  return data.users.map(
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
}

export function useUsersQuery() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5, // 5 seconds
  });
}
