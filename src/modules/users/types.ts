export type UserResponseDto = {
  wallet_id: string;
  email: string;
  name: string;
  last_name: string;
  sex_type: string;
  dni: string;
  birth_date: string;
  created_at: string;
};

export const TUserKeyType = {
  WALLET_ID: "wallet_id",
  EMAIL: "email",
  NAME: "name",
  LAST_NAME: "last_name",
  SEX_TYPE: "sex_type",
  DNI: "dni",
  BIRTH_DATE: "birth_date",
  CREATED_AT: "created_at",
} as const;

export type UserKeyType = (typeof TUserKeyType)[keyof typeof TUserKeyType];

export type SortByType = UserKeyType;

export type SortDirectionType = "ascending" | "descending";

export type MatchType = Partial<Record<UserKeyType, string>> | undefined;

export type QueryStringsType = {
  page: number;
  limit: number;
  sortBy: SortByType;
  sortDirection: SortDirectionType;
  match?: MatchType;
};

export type PaginationResponse<TResults> = {
  result: TResults;
  ids: string[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    nextPage: number | null;
  };
  filters: {
    match: MatchType;
    sortBy: SortByType;
    sortDirection: SortDirectionType;
  };
};
