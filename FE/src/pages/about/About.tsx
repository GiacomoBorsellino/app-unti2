import ImageCard from "@/components/ui/image-card";
import me from "../../assets/me.gif";

function About() {
  return (
    <>
      <main className="flex flex-col gap-4 justify-center items-center bg-white border-2 border-black rounded-md p-2">
        <h1 className="text-4xl font-bold">About-me</h1>
        <ImageCard
          caption="``I try to code my best way, i try to be what i say``"
          imageUrl={me}
        ></ImageCard>
        <p className="font-semibold">
          I'm a dreamer, a coder, an obsessed guy that try to take a lil
          peacefully place in this caotic world. Too curious for a life, too
          stupid to know everything, perfect to be surprised to everything that
          i see in front my way
        </p>
      </main>
    </>
  );
}

export default About;
