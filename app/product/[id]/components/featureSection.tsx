import { GoDotFill } from "react-icons/go";

interface FeatureSectionProps {
  features: any;
}

export default function FeatureSection({ features }: FeatureSectionProps) {
  return (
    <>
      {features.length > 0 && (
        <div className="border-t-8 lg:border-t-0 mt-3 lg:mt-0">
          <ul className="mx-5 lg:mx-0  pb-1 lg:pb-0">
            <div className="py-3">
              <div className="flex items-center">
                <p className="text-sm lg:text-lg font-medium text-neutral-900">
                  <span className="relative">ویژگی‌ها</span>
                </p>
              </div>
            </div>
            {features.map((feature: any) => (
              <li
                key={feature.attribute_id}
                className="flex items-start mb-2 lg:mr-2"
              >
                <div className="flex items-center">
                  <div className="flex w-3 opacity-30">
                    <GoDotFill />
                  </div>
                  <p className="text-[12px] lg:text-sm text-neutral-400 mr-1">
                    {feature.attribute_name} :
                  </p>
                </div>
                <p className="text-[12px] lg:text-sm font-bold mr-2 text-neutral-700">
                  {feature.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
