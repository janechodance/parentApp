export interface Activity {
  id: number;
  name: string;
  setup_time: number;
  active_time: number;
  description: string;
  expandable: boolean;
  secondary_skills_ids: number[];
  instructions: string[];
  modifications: string[];
  material_description: string;
  materials: string[];
  posted_by: string;
  reviewed_by: string;
  image: string;
  lead_physical_level_id: number;
  primary_skills_ids: number[];
  environment_ids: number[];
}

export interface Skill {
  name: string;
  primary: boolean;
}
