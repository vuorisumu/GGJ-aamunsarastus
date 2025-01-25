function Content({ data }) {
  return (
    <>
      {data.length > 0 &&
        data.map((c, i) => (
          <section key={`section${i}`}>
            {c.title && <h2>{c.title}</h2>}
            {c.text && <p>{c.text}</p>}
          </section>
        ))}
    </>
  );
}

export default Content;
