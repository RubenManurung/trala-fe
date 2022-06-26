import Head from "next/head";

const Index = () => {
  return (
    <Head>
      <title>Belajar Gak Ribet ala Trala</title>
      <meta
        httpEquiv="Cache-Control"
        content="no-cache, no-store, must-revalidate, max-age=4"
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, target-densityDpi=device-dpi, user-scalable = yes"
      />
      <meta charSet="utf-8" />
      <link rel="icon" href="/images/logo.png" />

      <meta
        name="description"
        content="Trala adalah salah satu product dari QuBisa yang merupakan platform belajar online terbesar di Indonesia yang bertujuan meningkatkan keterampilan diri & digital untuk mahasiswa, profesional, dan umum."
      />
    </Head>
  );
};

export default Index;
