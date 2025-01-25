function CommentSection({ data }) {
  return (
    <section className="comments">
      {data ? (
        data.map((c, i) => (
          <section key={`comment${i}`}>
            <p>{c.user}</p>
            <p>{c.date}</p>
            <p>{c.comment}</p>
          </section>
        ))
      ) : (
        <section>
          <p>Ei kommentteja</p>
        </section>
      )}
    </section>
  );
}

export default CommentSection;
