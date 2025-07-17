function ServerImage({ url, openModal }: { url: string; openModal: () => void }) {
  return (
    <img
      src={url}
      alt="A beautiful view of a mountain landscape"
      className="w-full object-cover h-[50%] max-h-[calc(100vh_-_2em)] max-w-full rounded-[calc(3em_-_2em)] saturate-0 cursor-pointer hover:saturate-20 transition-all duration-300 hover:shadow-lg"
      onClick={openModal}
    />
  );
}

export default ServerImage;
