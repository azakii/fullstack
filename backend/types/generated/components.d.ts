import type { Schema, Attribute } from '@strapi/strapi';

export interface PicturesGallery extends Schema.Component {
  collectionName: 'components_pictures_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'grid';
  };
  attributes: {
    Gallery: Attribute.Media;
  };
}

export interface SocialMediaSocialMedia extends Schema.Component {
  collectionName: 'components_social_media_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    links: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pictures.gallery': PicturesGallery;
      'social-media.social-media': SocialMediaSocialMedia;
    }
  }
}
