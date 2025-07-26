import ImageView from "@/components/ImageView/ImageView";


function About({
  lora,
  ibmPlexSans,
}: {
  lora: { className: string };
  ibmPlexSans: { className: string };
}) {
  return (
    <>
      <ImageView
        url={
          "https://images.unsplash.com/photo-1734983235410-cbbc5f5fcdaf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <div className="w-full  font-[Lora] text-right text-[1.1em] pr-5 text-[#AFAFAF]">
        it's cool huh?
      </div>
      <div className="w-full pl-5 text-[#F3F3F3]">
        <h1 className={`${lora.className} text-[3.3em]`}>Rino Godson</h1>
        <p className={`${ibmPlexSans.className} text-[1.3em]`}>
          turning coffee into code and bugs into features
        </p>
        <p
          className={`${ibmPlexSans.className} text-[1.3em] mt-10 max-w-[80ch]`}
        >
          not a tutorial guy. i learn by building - sometimes small, sometimes
          wild. i like turning ideas into real, working stuff. even if it's
          half-broken at first, it works... eventually.
        </p>
        <h2 className={`${lora.className} text-[2.2em] mt-10`}>
          I'm proud of,
        </h2>
        <ul
          className={`${ibmPlexSans.className} text-[1.3em] mt-3 list-disc pl-10`}
        >
          <li>completed CS50x at my 16, and didn't rage quit halfway</li>
          <li>made an app where you can store music in cards</li>
          <li>made an attendance app for my school and my teachers use it</li>
          <li>represented my district in the state-level IT Quiz</li>
          <li>created my own projects instead of copying YouTube tutorials</li>
          <li>i'm a part of hackclub</li>
          <li>i use vim btw ;)</li>
        </ul>
      </div>
    </>
  );
}

export default About;
