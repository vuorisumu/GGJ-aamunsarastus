function PageIntro({ data }) {
  return (
    <>
      {data.title && <h1>{data.title}</h1>}
      {data.description && <p>{data.description}</p>}
    </>
  );
}

export default PageIntro;
