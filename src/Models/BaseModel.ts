export type BaseModel = {
  createdAt?: Date;
  updatedAt?: Date;

  id: string;

  isArchived?: boolean;

  isDeleted?: boolean;
};
