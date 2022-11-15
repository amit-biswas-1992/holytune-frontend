interface CategoryMediaInfo {
  createdat?: Date;
  updatedAt?: Date;
  deletedat?: Date;
  id?: string;
  name?: string;
  categoryData?: any;
  imageUrl?: any;
  categoryName?: string;
  totalMedias?: any;
  audio?: any;
  is_active: boolean;
  total_media?: string;
  thumb_photo?: string;
  cover_photo?: string;
  mediaCategories?: any;
  mediaTags?: any;
  mediaVendors?: any;
  mediaPlatforms?: any;
}
interface CategoryMediaInfo extends Array<CategoryMediaInfo> {}

export default CategoryMediaInfo;
