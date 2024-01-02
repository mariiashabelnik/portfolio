function Tags({ listOfTags }) {
  const tagList = listOfTags.map((itemTag, keyTag) => {
    return (
      <div className={`bg-gray-600 py-1 px-1 rounded-xl `} key={keyTag}>
        {itemTag}
      </div>
    );
  });
  return <div className="text-xs flex gap-2 mt-6 ">{tagList}</div>;
}

export default Tags;
