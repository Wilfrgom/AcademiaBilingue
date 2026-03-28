import Link from "next/link";
import Image from "next/image";

const infoBlocks = [
  {
    title: "High Graduation Rate",
    description: "We prepare students for success with a strong graduation rate.",
  },
  {
    title: "Personalized Attention",
    description: "We ensure focused learning with a low student-teacher ratio.",
  },
  {
    title: "Active Engagement",
    description: "We boost development with high extracurricular participation.",
  },
];

export function Hero() {
  return (
    <main className="hero">
      <div className="container" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div className="hero-content">
          <div className="hero-media-content">
            <div className="hero-main-image">
              <Image
                src="/images/pexels-julia-m-cameron-4145151_1pexels-julia-m-cameron-4145151.avif"
                alt="A student wearing a red uniform sits while holding a book in his hands"
                fill
                className="absolute-image"
                priority
              />
            </div>
            <div className="hero-testimonial">
              <p className="regular-s hero-testimonial-text">
                &quot;This school has been amazing. The supportive teachers and personalized
                attention have helped me excel academically and personally. I feel confident and
                well-prepared for the future.&quot;
              </p>
              <span className="serif-s">Jack M.</span>
            </div>
          </div>

          <div className="hero-main-content">
            <div className="hero-text-and-info-blocks">
              <div className="hero-text-wrapper">
                <h1>Unlocking True Potential Through Individual Strengths</h1>
                <p className="regular-m max-width-440">
                  We nurture each student&apos;s unique strengths, helping them grow into confident,
                  capable individuals ready to succeed.
                </p>
              </div>

              <div className="three-columns-border-info-blocks">
                {infoBlocks.map((block) => (
                  <div key={block.title} className="border-info-block">
                    <span className="serif-m">{block.title}</span>
                    <p className="regular-s max-width-216">{block.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-buttons-wrapper">
              <Link href="/admissions" className="button primary-button">
                <div className="button-text-wrapper">
                  <span className="serif-l">Enroll Today</span>
                  <span className="serif-l absolute">Enroll Today</span>
                </div>
                <div className="button-background bg-primary-light" />
              </Link>
              <Link href="/about" className="button secondary-button">
                <div className="button-text-wrapper">
                  <span className="serif-l">About School</span>
                  <span className="serif-l absolute">About School</span>
                </div>
                <div className="button-background bg-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
