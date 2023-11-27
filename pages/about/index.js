import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import config from "@config/config.json";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import { parseMDX } from "@lib/utils/mdxParser";
import PageHeader from "@layouts/partials/PageHeader";
import Contact_Form from "@layouts/components/Contact_Form";
const { title } = config.site;

const About = ({ data, mdxContent, freeQuote }) => {
    return (
        <Base title={`${title} | Frequently Asked Questions`}>

            <section className="section">
                <div className="container">
                    <PageHeader title={data.frontmatter.title} image={data.frontmatter.image}/>
                    <div className="content my-16 text-left dark:text-white">
                        <MDXRemote {...mdxContent} components={shortcodes} />
                    </div>
                    <Contact_Form data={freeQuote} />
                </div>
            </section>

        </Base>
    );
};

export const getStaticProps = async () => {
    const aboutData = await getListPage('content/about.md');
    const mdxContent = await parseMDX(aboutData.content);
    const freeQuote = await getListPage(`content/consultation.md`);
    return {
        props: {
            data: aboutData,
            mdxContent,
            freeQuote
        },
    };
};

export default About;
