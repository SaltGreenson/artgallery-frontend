import { IGallery } from "@/models/IGallery";

export const submitBtnTextConfig = (defaultValues?: IGallery) =>
  defaultValues ? "SAVE" : "CREATE";
