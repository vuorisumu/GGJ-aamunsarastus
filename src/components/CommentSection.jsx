function CommentSection({ data }) {
  return (
    <section className="comments">
      <h3>Kommentit</h3>
      {data ? (
        data.map((c, i) => (
          <section key={`comment${i}`}>
            <div className="from">
              <p className="user">{c.user}</p>
              <p className="date">{c.date}</p>
            </div>
            <p className="comment">{c.comment}</p>
          </section>
        ))
      ) : (
        <>
          <h3>Kommentit</h3>
          <section>
            <p>Ei kommentteja</p>
          </section>
        </>
      )}
    </section>
  );
}

export default CommentSection;
