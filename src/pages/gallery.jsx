import { Section } from "../components/Section";
import * as React from "react";
import { Masonry } from "masonic";
import Header, { StaticHeader } from "../components/Header";
import {ParallaxScroll} from '../components/ui/parallax-scroll'
import MobileView from "../components/mobileview/MobileView";
import { useStateContext } from "../context";

const cats = [
  "https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg",
  "https://cdn.pixabay.com/photo/2015/06/03/13/13/cats-796437__480.jpg",
  "https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345__480.jpg",
  "https://cdn.pixabay.com/photo/2014/09/18/20/17/cat-451377__480.jpg",
  "https://cdn.pixabay.com/photo/2015/01/31/12/36/cat-618470__480.jpg",
  "https://cdn.pixabay.com/photo/2014/07/24/18/40/cat-401124__480.jpg",
  "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__480.jpg",
  "https://cdn.pixabay.com/photo/2015/02/14/10/16/cat-636172__480.jpg",
  "https://cdn.pixabay.com/photo/2013/10/28/14/30/cat-201855__480.jpg",
  "https://cdn.pixabay.com/photo/2015/04/16/15/21/cat-725793__480.jpg",
  "https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__480.jpg",
  "https://cdn.pixabay.com/photo/2017/05/31/21/52/cat-2361787__480.jpg",
  "https://cdn.pixabay.com/photo/2014/10/01/10/46/cat-468232__480.jpg",
  "https://cdn.pixabay.com/photo/2014/04/29/13/19/cat-334383__480.jpg",
  "https://cdn.pixabay.com/photo/2014/01/17/14/53/cat-246933__480.jpg",
  // "https://cdn.pixabay.com/photo/2017/05/31/21/46/cats-2361762__480.jpg",
];

function GalleryPage() {
    const {drawerOpen} = useStateContext()
  return (

    <Section>
        {
            drawerOpen ? (<MobileView />) : null
          }

      <h1 className="mx-auto mb-8 lg:text-7xl lg:text-start text-5xl text-center font-semibold leading-none tracking-tighter m-5 text-neutral-600">Gallery</h1>
      <ParallaxScroll images={cats} />
    </Section>
  );
}

export default GalleryPage;
