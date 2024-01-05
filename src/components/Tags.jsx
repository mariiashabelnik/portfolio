function Tags({ listOfTags }) {
  const tagList = listOfTags.map((itemTag, keyTag) => {
    return (
      <div className={`bg-gray-800 py-1 px-2 rounded-xl `} key={keyTag}>
        {itemTag}
      </div>
    );
  });
  return <div className="text-tags flex flex-wrap gap-2  ">{tagList}</div>;
}

export default Tags;
