interface subscribeinfo {
  createdat?: Date;
  updatedAt?: Date;
  deletedat?: Date;
  user_id?: string;
  package_id?: string;
  channel?: string;
  subscription_id?: string;
  id?: string;
  name?: string;
  cycle?: string;
  price?: string;
  validity?: string;
  is_active?: true;
  package?: any;
}

export default subscribeinfo;
