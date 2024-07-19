import { getServerSession } from "next-auth";

const SessionData = async () => {
  const session = await getServerSession();
  const sessionDatas = session?.user?.name;
  console.log(sessionDatas, "dadas ssesss");

  console.log(session, "dashbord session");
  return (
    <div>
      <h1 className="text-lg md:text-5 xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {sessionDatas}
      </h1>
    </div>
  );
};

export default SessionData;