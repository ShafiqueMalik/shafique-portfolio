type TimelineItem = {
  date: string;
  title: string;
  description: string;
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
                <div className="flex-shrink-0 bg-primary text-white rounded-full translate-y-[2px] h-4 w-4 flex items-center justify-center">
                  <span className=" font-medium text-[8px]">{index + 1}</span>
                </div>
                <div className="w-[2px] relative left-[7px] top-[2px] bg-primary h-full flex-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 leading-none">
                  {event.title}
                </h3>
                <p className=" pb-[10px] text-gray-700 text-sm font-light italic">
                  {event.description}
                </p>
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
