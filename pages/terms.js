import { getTerms } from "lib/api";
import { BlogContent } from "components/BlogContent";
import { PageSeo } from "components/MetaDecorator";
const content = require("data/content");
import Aside from "components/Aside";

const Terms = ({ termsData }) => {
  return (
    <>
      <PageSeo
        title='Term of Use'
        description='Our Terms of Use'
        url={`${content.siteUrl}/terms`}
      />
      {/* Google Ads */}

      <div className='layoutWrapper'>
        <div className='wrapper-lg no-border'>
          <main className='main-content no-pad'>
            {termsData.map((c, i) => {
              return (
                <div key={`${i}`}>
                  <div className='title'>
                    <h1>{c.title}</h1>
                  </div>
                  {c.content && <BlogContent content={c.content} />}
                </div>
              );
            })}
          </main>
        </div>
        {/* Aside */}
        <Aside />
      </div>
    </>
  );
};

export default Terms;

export async function getStaticProps() {
  const termsContent = await getTerms();
  return {
    props: {
      termsData: termsContent,
    },
  };
}
