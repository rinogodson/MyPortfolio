import ImageView from "../ImageView/ImageView";

function PageContent() {
  return (
    <div className="p-[2em] h-[calc(100vh_-_2em)] w-[100%] bg-[#1A1A1A] rounded-t-[3em]">
      <ImageView
        url={
          "https://images.unsplash.com/photo-1734983235410-cbbc5f5fcdaf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </div>
  );
}

export default PageContent;
