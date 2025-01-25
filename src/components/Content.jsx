/* eslint-disable react/jsx-key */
import { Trans } from "react-i18next";

function Content({ data }) {
  return (
    <>
      {data.length > 0 &&
        data.map((c, i) => (
          <section key={`section${i}`}>
            {c.title && <h2>{c.title}</h2>}

            {c.text && (
              <p>
                <Trans i18nKey={`text.${i}`} components={[<br />]}>
                  {c.text}
                </Trans>
              </p>
            )}
          </section>
        ))}
    </>
  );
}

export default Content;
