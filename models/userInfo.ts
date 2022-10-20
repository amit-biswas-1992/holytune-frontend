interface UserInfo {
  createdat?: Date;
  customer_id?: string;
  deletedat?: Date;
  email?: string;
  id?: string;
  name?: string;
  password?: string;
  phone?: string;
  updatedAt?: Date;
  userStatus?: string;
  userType?: string;
  user_image?: string;
  total_free_videos?: string;
  total_watch_time?: string;
  total_ad_views?: string;
  is_subscribed?: boolean;
}

export default UserInfo;
