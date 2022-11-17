interface AlbumInfo {
  createdat?: Date;
  updatedAt?: Date;
  deletedat?: Date;
  id?: string;
  name?: string;
  medias?: string;
  categoryData?: any;
  imageUrl?: any;
  mediaUrl?: any;
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
  all?: any;
}
interface AlbumInfo extends Array<AlbumInfo> {}

export default AlbumInfo;
