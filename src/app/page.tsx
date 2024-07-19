// import GoogleButton from "@/components/GoogleButton";
import { ImagesSliderDemo } from "@/components/ImageSlider";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  console.log(session, "gachu session");
  if (session) {
    redirect("/dashboard");
  }

  return (
    <main>
      <ImagesSliderDemo />
      {/* <GoogleButton /> */}
    </main>
  );
}
