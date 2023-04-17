import React from "react";
import GalleryViewLayout from "src/components/layouts/Gallery";
import Card from "@/components/elements/Card";
import { IGallery } from "@/models/IGallery";

interface GalleryDynamicPageProps {
  galleries: IGallery[];
}

const Gallery = ({ galleries }: GalleryDynamicPageProps): JSX.Element => (
  <GalleryViewLayout title="Gallery">
    {galleries &&
      galleries.map((gallery) => <Card key={gallery._id} gallery={gallery} />)}
  </GalleryViewLayout>
);

export default Gallery;
