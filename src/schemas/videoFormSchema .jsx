import { z } from "zod";

export const videoFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  tag1: z.string().min(1, "Tag is required"),
  video: z
    .any()
    .refine((file) => file instanceof File && file.type.startsWith("video/"), {
      message: "A valid video file is required"
    })
});
