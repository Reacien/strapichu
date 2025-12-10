import type { Schema, Struct } from '@strapi/strapi';

export interface ModelCreditItem extends Struct.ComponentSchema {
  collectionName: 'components_model_credit_items';
  info: {
    displayName: 'credit-item';
    icon: 'oneToMany';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    roles: Schema.Attribute.Component<'model.credit-item-role', true>;
  };
}

export interface ModelCreditItemRole extends Struct.ComponentSchema {
  collectionName: 'components_model_credit_item_roles';
  info: {
    displayName: 'credit-item-role';
    icon: 'paint';
  };
  attributes: {
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ModelGalleryImage extends Struct.ComponentSchema {
  collectionName: 'components_model_gallery_images';
  info: {
    displayName: 'GalleryImage';
    icon: 'landscape';
  };
  attributes: {
    caption: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'(e.g., "Front View", "Back View")'>;
    image: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'model.credit-item': ModelCreditItem;
      'model.credit-item-role': ModelCreditItemRole;
      'model.gallery-image': ModelGalleryImage;
    }
  }
}
