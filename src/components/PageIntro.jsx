function PageIntro({ data }) {
  return (
    <div className="banner">
      {data.img && <img src={`/images/${data.img}`} />}
      {data.title && <h1>{data.title}</h1>}
      {data.description && <p>{data.description}</p>}
    </div>
  );
}

export default PageIntro;
