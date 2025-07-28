/* eslint-disable @typescript-eslint/no-explicit-any */

export interface SeoMetaItem {
  content: string;
  type: string; // e.g., "property" or "name"
  value: string; // e.g., "og:title", "og:image"
}

export interface SeoSchemaItem {
  meta_name: string; // e.g., "ld-json"
  meta_value: string; // this may contain JSON string or be empty
  type: string; // e.g., "ld-json"
}

 interface SeoData {
  defaultMeta: SeoMetaItem[];
  description: string;
  keywords: string[];
  schema: SeoSchemaItem[];
  title: string;
}


interface MediaItem {
    name: string;
    resource_type: string;
    resource_value: string;
    thumbnail_url?: string;
}
interface ChecklistItem {
    color: string;
    icon: string;
    id: string;
    list_page_visibility: boolean;
    text: string;
}

interface Section {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: any[];
}
interface CtaText {
    name: string;
    value: string;
}

interface OldInfo {
    cat_id: number;
    course_id: number;
    platform: string;
    skills_cat_id: number;
    slug: string;
}

interface CourseData {
    slug: string;
    id: number;
    title: string;
    description: string;
    platform: string;
    type: string;
    modality: string;
    old_info: OldInfo;
    start_at: string;
    media: MediaItem[];
    checklist: ChecklistItem[];
    seo: SeoData;
    cta_text: CtaText;
    sections: Section[];
    is_cohort_based_course: boolean;
    secondary_cta_group: any[];
    delivery_method: string;
}
interface CourseApiResponse {
    code: number;
    data: CourseData;
    error: any[];
    message: string;
    payload: any[];
    status_code: number;
}

export type { MediaItem, ChecklistItem, Section, CtaText, OldInfo, CourseData, CourseApiResponse }