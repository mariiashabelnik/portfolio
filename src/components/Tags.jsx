function Tags({ listOfTags }) {
  const tagList = listOfTags.map((itemTag, keyTag) => {
    return (
      <div className={`bg-indigo-500/40 py-2 px-4 rounded-full `} key={keyTag}>
        {itemTag}
      </div>
    );
  });
  return <div className="text-xs flex gap-4 mt-6 flex-wrap">{tagList}</div>;
}

export default Tags;
