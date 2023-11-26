export interface product {
  id: number;
  name: string;
  slug: string;
  count_in_box: number;
  priority: number;
  existing_number: number;
  enable_comments: number;
  enable_faqs: number;
  cover: string;
  market: {
    id: number;
    title: string;
    brief_description: string;
  };
  brand: any;
  price_display_status: number;
  full_price: {
    packing_cost: number;
    buy_price: number;
    box_price: number;
    sale_price: number;
    discount_percent: number;
    tax_percent: number;
    discount_amount: number;
    tax_amount: number;
    sale_price_with_discount: number;
    box_price_with_discount: number;
    sale_price_with_tax_and_discount: number;
    box_price_with_tax_and_discount: number;
    other_prices: any;
  };
  product_link: string;
  attributes: {
    attribute_id: number;
    attribute_name: string;
    value: string;
  }[];
  variety_attributes: {
    attribute_id: number;
    attribute_name: string;
    details: {
      value: string;
      existing_number: string;
    }[];
  }[];
  is_bookmarked: number;
  brief_description: string;
  score: number;
  orders_rate: number;
  minimum_order_no: number;
  count_unit: {
    id: number;
    title: string;
    per_unit_title: string;
  };
  box_count_unit: {
    id: number;
    title: string;
    per_unit_title: string;
  };
  catalog: string;
  amazing_end_millisecond: number | null;
  complimentary: string;
  settlement_type: number;
}

export interface cartType {
  id: number;
  count: number;
}
