import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MindSpring Academy - News & Events",
  description: "Stay updated with our latest news and upcoming events. Discover what's new and what's next at our school.",
};

const newsItems = [
  {
    id: 1,
    title: "Annual Science Fair Winners Announced",
    date: "March 15, 2026",
    category: "News",
    image: "/images/pexels-max-fischer-5212354_1pexels-max-fischer-5212354.avif",
  },
  {
    id: 2,
    title: "Spring Concert Series Begins Next Week",
    date: "March 20, 2026",
    category: "Events",
    image: "/images/pexels-max-fischer-5212344_1pexels-max-fischer-5212344.avif",
  },
  {
    id: 3,
    title: "New STEM Lab Opening Ceremony",
    date: "March 25, 2026",
    category: "News",
    image: "/images/pexels-max-fischer-5212339_1pexels-max-fischer-5212339.avif",
  },
];

export default function NewsEventsPage() {
  return (
    <>
      <Navigation />
      <main className="hero">
        <div className="container container-grow">
          <div className="hero-content internal-hero-content">
            <div className="hero-media-content">
              <div className="hero-main-image">
                <Image
                  src="/images/pexels-thirdman-8926545_1pexels-thirdman-8926545.avif"
                  alt="A teacher is showing a globe to a group of students"
                  fill
                  className="absolute-image"
                />
              </div>
            </div>
            <div className="hero-main-content">
              <div className="hero-text-and-info-blocks">
                <div className="hero-text-wrapper">
                  <h1 className="h1">Current School Updates and Upcoming Events</h1>
                  <p className="regular-m max-width-440">{`Stay updated with our latest news and upcoming events. Discover what's new and what's next at our school.`}</p>
                </div>
                <div className="three-columns-border-info-blocks">
                  <div className="border-info-block">
                    <div className="serif-m">Timely Updates</div>
                    <p className="regular-s max-width-216">Stay informed with the latest school news and developments.</p>
                  </div>
                  <div className="border-info-block">
                    <div className="serif-m">Event Highlights</div>
                    <p className="regular-s max-width-216">Get previews and summaries of upcoming events and activities.</p>
                  </div>
                  <div className="border-info-block">
                    <div className="serif-m">Announcements</div>
                    <p className="regular-s max-width-216">Receive essential information about deadlines and events.</p>
                  </div>
                </div>
              </div>
              <div className="button-wrapper">
                <Link href="/about" className="button primary-button">
                  <div className="button-text-wrapper">
                    <span className="button-text serif-l">About School</span>
                    <span className="button-text serif-l bottom-absolute-text">About School</span>
                  </div>
                  <div className="button-background bg-color-primary-light"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* News List Section */}
      <section className="section">
        <div className="container">
          <div className="section-stack">
            <div className="section-heading-block smaller-padding-bottom">
              <div className="center-section-heading">
                <div className="chips">
                  <div className="chips-shape bg-color-primary"></div>
                  <div className="serif-xs">News &amp; Events</div>
                </div>
                <h2 className="h2">School News and Event Highlights</h2>
              </div>
            </div>
            <div className="publications-list-wrapper">
              <div className="publications-list big-list">
                {newsItems.map((item) => (
                  <div key={item.id} className="publication-item">
                    <Link href="#" className="publication-item-block">
                      <div className="publication-item-image-wrapper">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="publication-image"
                        />
                      </div>
                      <div className="publication-item-content">
                        <div className="chips-wrapper">
                          <div className="chips">
                            <div className={`chips-shape ${item.category === "News" ? "bg-color-primary" : "bg-color-red"}`}></div>
                            <div className="serif-xs">{item.category}</div>
                          </div>
                        </div>
                        <h3 className="h3 max-width-360-tablet-320">{item.title}</h3>
                        <div className="serif-s color-grey">{item.date}</div>
                        <div className="publication-item-background"></div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Section */}
      <section className="section">
        <div className="container">
          <div className="large-image">
            <Image
              src="/images/pexels-julia-m-cameron-4145032_1pexels-julia-m-cameron-4145032.avif"
              alt="A happy student is on a video call, smiling and engaged"
              fill
              className="absolute-image"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
