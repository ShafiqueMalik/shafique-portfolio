import { twMerge } from "tailwind-merge";

type TimelineItem = {
  date: string;
  title: string;
  description: string[];
};

type TimelineProps = {
  timelineData: TimelineItem[];
};
export default function Timeline({ timelineData }: TimelineProps) {
  return (
    <div className="relative   py-8">
      <div className="">
        {timelineData?.map((event, index) => (
          <div key={event.title} className="">
            <div className="flex flex-row items-start ">
              <div className="flex flex-col self-stretch">
                <div
                  className="flex-shrink-0 bg-primary text-white 
                dark:text-dark dark:bg-white rounded-full translate-y-[2px] h-4 w-4 
                flex items-center justify-center
                lg:h-6 lg:w-6
                "
                >
                  <span className=" font-medium text-[8px] lg:text-xs">
                    {index + 1}
                  </span>
                </div>
                <div
                  className="w-[2px] relative left-[7px] lg:left-[10px] top-[2px] bg-primary
                 dark:bg-dark-text-light h-full flex-1"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 leading-none dark:text-dark-text">
                  {event.title}
                </h3>
                <ul className={twMerge(` pb-[10px] `, event.description?.length>1 ? "list-disc pl-4" : "")}>
                  {event.description?.reverse()?.map((desc: string, indx) => (
                    <li key={desc}>
                      <p className="  text-gray-700 text-sm font-light italic dark:text-dark-text-light">
                        {desc}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="text-sm  pb-[20px] text-secondary">
                  {event.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
