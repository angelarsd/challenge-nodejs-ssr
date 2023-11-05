import { UserResponseDto } from "./types";

export const USER1_MOCK: UserResponseDto = {
  wallet_id: "1",
  name: "John",
  email: "john@example.com",
  last_name: "Papa",
  sex_type: "male",
  dni: "34567890",
  birth_date: "2000-01-01T00:00:00.000Z",
  created_at: "2023-11-05T00:00:00.000Z",
};

export const USER2_MOCK: UserResponseDto = {
  wallet_id: "2",
  name: "Jane",
  email: "jane@example.com",
  last_name: "McDonald",
  sex_type: "female",
  dni: "12345678",
  birth_date: "2000-02-02T00:00:00.000Z",
  created_at: "2023-11-05T00:00:00.000Z",
};

export const USER3_MOCK: UserResponseDto = {
  wallet_id: "3",
  name: "Bob",
  email: "bob@example.com",
  last_name: "Patiño",
  sex_type: "male",
  dni: "23456789",
  birth_date: "2000-03-03T00:00:00.000Z",
  created_at: "2023-11-05T00:00:00.000Z",
};

export const USERS_MOCK: UserResponseDto[] = [
  USER1_MOCK,
  USER2_MOCK,
  USER3_MOCK,
];
