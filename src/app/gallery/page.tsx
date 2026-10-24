import { redirect } from "next/navigation";

/** Photos live on the home page once — deep-link there. */
export default function GalleryPage() {
  redirect("/#gallery");
}
