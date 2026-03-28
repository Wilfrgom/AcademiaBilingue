import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "Annual Science Fair Showcases Student Innovation",
    category: "Event",
    date: "September 15, 2024",
    image: "/images/pexels-max-fischer-5212354_1pexels-max-fischer-5212354.avif",
  },
  {
    id: 2,
    title: "New Arts Program Launches This Fall",
    category: "News",
    date: "September 10, 2024",
    image: "/images/pexels-max-fischer-5212344_1pexels-max-fischer-5212344.avif",
  },
  {
    id: 3,
    title: "Students Excel in Regional Math Competition",
    category: "Achievement",
    date: "September 5, 2024",
    image: "/images/pexels-max-fischer-5212339_1pexels-max-fischer-5212339.avif",
  },
];

export function NewsEvents() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-stack">
          <div className="section-heading-block">
            <div className="center-section-heading">
              <div className="chips">
                <div className="chips-shape bg-primary" />
                <span className="serif-xs">News & Events</span>
              </div>
              <h2>Latest News and Upcoming Events</h2>
            </div>
          </div>

          <div className="publications-list-wrapper">
            <div className="publications-list">
              {newsItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="publication-item"
                >
                  <div className="publication-item-block">
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
                          <div className="chips-shape bg-primary" />
                          <span className="serif-xs">{item.category}</span>
                        </div>
                      </div>
                      <h3 className="max-width-360">{item.title}</h3>
                      <span className="regular-s color-grey">{item.date}</span>
                      <div className="publication-item-background" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/news-events" className="button secondary-button">
            <div className="button-text-wrapper">
              <span className="serif-l">View All News & Events</span>
              <span className="serif-l absolute">View All News & Events</span>
            </div>
            <div className="button-background bg-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
