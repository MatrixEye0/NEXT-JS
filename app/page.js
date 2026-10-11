export const metadata = {
  title: "SkillGraph | AI Career Platform",
  description: "Analyze skills and build your developer career.", // if only write this two line and icon line so our website show only this

  openGraph: { // this for when we show wesite image in social media like facebook, twitter etc for SEO purpose we use this openGraph and give the image and title and description of website
    title: "SkillGraph",
    description: "Your AI-powered developer career assistant.",
    url: "https://example.com",
    siteName: "SkillGraph",
    images: [
      {
        url: "https://example.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SkillGraph platform",
      },
    ],
    type: "website",
  },

 twitter: { // if we add specific social media so use like this 
    card: "summary_large_image",
    title: "Jagjit Singh | Portfolio",
    description: "Explore my projects and development skills.",
    images: ["/images/og-image.png"],
    creator: "@yourusername",
  },

}; // this for SEO  

const Home = () => {
  return (
    <div>
      <h1>Jagjit first Next app</h1>
    </div>
  );
}
export default Home; // this automatic go to layout.js and render the layout with the content of this page.