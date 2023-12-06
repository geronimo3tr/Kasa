function Tags(props) {
  const tags = props.tags;

  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <span key={index} className="tag-container">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
