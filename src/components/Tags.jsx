function Tags({ listOfTags }) {
  const tagList = listOfTags.map((itemTag, keyTag) => {
    return (
      <div className={`bg-gray-500 py-1 px-2 rounded-xl `} key={keyTag}>
        {itemTag}
      </div>
    );
  });
  return (
    <div className="text-tags flex flex-wrap gap-2 font-tags text-white ">
      {tagList}
    </div>
  );
}

export default Tags;
