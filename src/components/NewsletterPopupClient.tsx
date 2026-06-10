"use client";

import dynamic from "next/dynamic";

const NewsletterPopup = dynamic(() => import("./NewsletterPopup"), {
  ssr: false,
});

export default NewsletterPopup;
