/* eslint-disable react/jsx-key */
import { Trans } from "react-i18next";

function CommentSection({ data }) {
  return (
    <section className="comments">
      <h3>Kommentit</h3>
      {data ? (
        data.map((c, i) => (
          <section key={`comment${i}`}>
            <div className="from">
              <p className="user">{c.user}</p>
            </div>
            <p className="comment">
              <Trans i18nKey={`comments.${i}`} components={[<a />]}>
                {c.comment}
              </Trans>
            </p>
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
