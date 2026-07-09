import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "John Invisible Grills",
    short_name: "JohnGrills",
    description: "Premium High-Tensile Stainless Steel Invisible Safety Grills in Hyderabad",
    start_url: "/",
    display: "standalone",
    background_color: "#FCFCFC",
    theme_color: "#B08D57",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}
