import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center py-16">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <p className="mt-4 text-xl text-muted">
            Aradığınız sayfa bulunamadı.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </Container>
    </div>
  );
}
