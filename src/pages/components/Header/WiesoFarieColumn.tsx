interface Page {
  name: string;
  description: string;
  url: string;
}

interface Props {
  content: {
    title: string;
    pages: Page[];
  };
}

const WiesoFarieColumn = ({ content }: Props) => {
  return (
    <section>
      <h2>{content.title}</h2>
      <ul>
        {content.pages.map((page: Page, index) => (
          <li key={index}>
            <a href={page.url}>
              <h3>{page.name}</h3>
              <p>{page.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WiesoFarieColumn;
