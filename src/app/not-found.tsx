import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap center">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lede" style={{ marginInline: "auto" }}>
          The page you&apos;re looking for doesn&apos;t exist. Head back home or explore our rooms.
        </p>
        <p>
          <Link className="btn btn--navy" href="/">
            Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
