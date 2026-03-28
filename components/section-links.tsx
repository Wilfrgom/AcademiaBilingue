import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    id: "first",
    chip: "About School",
    title: "Uncover the History and Vision That Drive Our School Forward",
    description:
      "Dive into our school's story, exploring the history, mission, and values that shape our community. Learn how our passionate team and shared goals contribute to our ongoing success.",
    buttonText: "About School",
    href: "/about",
    image: "/images/pexels-max-fischer-5212687_1pexels-max-fischer-5212687.avif",
    imageAlt: "Students are working on laptops in a classroom",
  },
  {
    id: "second",
    chip: "Academic Programs",
    title: "Fostering Excellence Through Innovative Learning Experiences",
    description:
      "Explore our programs that ignite curiosity and drive success. With innovative teaching and support, we foster a thriving environment for student excellence.",
    buttonText: "Explore Academics",
    href: "/academics",
    image: "/images/pexels-julia-m-cameron-4144929_1pexels-julia-m-cameron-4144929.avif",
    imageAlt: "A schoolgirl participates in an online lesson using a tablet",
  },
  {
    id: "third",
    chip: "Admissions",
    title: "Explore the Admission Process and Join Our Vibrant Community",
    description:
      "Learn about our straightforward admission process and find out how you can become part of our dynamic and welcoming community. We're excited to guide you every step of the way.",
    buttonText: "Discover Admissions",
    href: "/admissions",
    image: "/images/pexels-august-de-richelieu-4260323_1pexels-august-de-richelieu-4260323.avif",
    imageAlt:
      "A mother and her daughter are working together on a laptop, focusing on homework",
  },
];

export function SectionLinks() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-links-wrapper">
          <div className="section-link-blocks">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`section-link ${section.id}-block`}
              >
                <div className="section-link-content-wrapper">
                  <div className="section-link-content">
                    <div className="chips">
                      <div className="chips-shape bg-primary" />
                      <span className="serif-xs">{section.chip}</span>
                    </div>
                    <div className="section-link-text">
                      <h2>{section.title}</h2>
                      <p className="regular-m">{section.description}</p>
                    </div>
                  </div>
                  <div className="button-wrapper">
                    <Link href={section.href} className="button secondary-button">
                      <div className="button-text-wrapper">
                        <span className="serif-l">{section.buttonText}</span>
                        <span className="serif-l absolute">{section.buttonText}</span>
                      </div>
                      <div className="button-background bg-primary" />
                    </Link>
                  </div>
                </div>
                <div className="section-link-image">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="absolute-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
