import { useMemo } from "react";
import Card from "../globals/Card";

function Contests({ contests, range }) {
  const contentDescription =
    "Discover upcoming coding contests on Digitomize and stay in the loop with the latest challenges. Join us, take part, and put your coding skills to the test!".toLowerCase();
  const queryData = useMemo(() => {
    return contests?.filter((data) => {
      if (data.duration >= range[0] && data.duration <= range[1]) return true;
    });
  }, [range, contests]);

  return (
    <>
      <div className="mx-[2%] scroll-smooth">
        <div className="flex flex-wrap lg:justify-evenly md:justify-evenly sm:justify-center px-4">
          {queryData.map((contest) => (
            <Card key={contest.vanity} contest={contest} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Contests;
