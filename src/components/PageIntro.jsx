function PageIntro({ data }) {
  return (
    <div className="banner">
      {data.img && <img src={`/images/${data.img}`} />}
      <div className="texts">
        {data.title && <h1>{data.title}</h1>}
        {data.description && <p>{data.description}</p>}
      </div>
    </div>
  );
}

export default PageIntro;
