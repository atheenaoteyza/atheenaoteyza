import Header from "./Header";
import ProfileCard from "./ProfileCard";

export default function LeftSection() {
  return (
    <>
      <div className="w-[35%] h-[100%] rounded-xl flex-col gap-2 ">
        <Header />
        <ProfileCard />
        <div className="flex p-[.5rem] mt-2 bg-background justify-between rounded-xl">
          a
        </div>
      </div>
    </>
  );
}
