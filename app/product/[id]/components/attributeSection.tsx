interface AttributeSectionProps {
  attribute?: any;
}

export default function AttributeSection({ attribute }: AttributeSectionProps) {
  return (
    <div className="px-5 lg:text-md">
      <div>
        <div className="flex justify-between">
          <div className="py-3">
            <div className="flex items-center text-sm">
              <p>
                <span className="relative lg:text-md lg:font-bold">
                  {attribute.attribute_name}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto overflow-y-hidden no-scrollbar">
          {attribute.details.map((detail: any) => (
            <div
              key={detail.value}
              className="border text-xs rounded-3xl ml-2 py-2 px-3 cursor-pointer flex items-center justify-center w-max"
            >
              <span className="w-max">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
