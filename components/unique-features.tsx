import Link from "next/link";
import Image from "next/image";

const features = [
  {
    id: "first",
    icon: "/images/Education.svg",
    title: "Personalized Learning",
    description: "Customized learning experiences tailored to each student's needs and style.",
  },
  {
    id: "second",
    icon: "/images/Catalog.svg",
    title: "Innovative Curriculum",
    description: "A forward-thinking curriculum that integrates the latest teaching methods.",
  },
  {
    id: "third",
    icon: "/images/People.svg",
    title: "Supportive Community",
    description: "A supportive environment where students, parents, and staff work together.",
  },
  {
    id: "fourth",
    icon: "/images/Cognitive.svg",
    title: "Skilled Educators",
    description: "Experienced teachers passionate about inspiring and educating students.",
  },
  {
    id: "fifth",
    icon: "/images/Bicycle.svg",
    title: "Diverse Extracurriculars",
    description:
      "A variety of clubs, sports, and activities that help students explore their talents.",
  },
  {
    id: "sixth",
    icon: "/images/Education.svg",
    title: "Modern Facilities",
    description: "Modern classrooms that enhance learning and overall academic achievement.",
  },
];

export function UniqueFeatures() {
  return (
    <section className="section">
      <div className="container">
        <div className="colored-section">
          <div className="flex-center-wrapper">
            <div className="colored-section-stack">
              <div className="section-heading-block">
                <div className="center-section-heading">
                  <div className="chips">
                    <div className="chips-shape bg-primary" />
                    <span className="serif-xs">Unique Benefits</span>
                  </div>
                  <h2>Experience the Distinctive Features That Set Us Apart</h2>
                </div>
              </div>

              <div className="three-blocks-grid">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className={`center-icon-block-wrapper ${feature.id}-block`}
                  >
                    <div className="center-icon-block">
                      <Image
                        src={feature.icon}
                        alt=""
                        width={48}
                        height={48}
                        className="icon-48"
                      />
                      <div className="center-icon-block-text">
                        <h3 className="max-width-200">{feature.title}</h3>
                        <p className="regular-s">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="button secondary-button">
                <div className="button-text-wrapper">
                  <span className="serif-l">Contact Us</span>
                  <span className="serif-l absolute">Contact Us</span>
                </div>
                <div className="button-background bg-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
