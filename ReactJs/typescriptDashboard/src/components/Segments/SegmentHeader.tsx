import CreateButton from "../CreateButton";



const SegmentHeader = () => {
  return (
    <div className="flex flex-1 items-center justify-between">
      <div>
        <h3 className="font-bold text-2xl ">Audience Segments</h3>
        <p className="text-[13px] text-gray-400 font-semibold">
          Discover segments,view everything you built or have been shared with
          you.
        </p>
      </div>
      <CreateButton></CreateButton>
    </div>
  );
}

export default SegmentHeader
