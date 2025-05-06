import { BaseInput, BaseTextArea } from "~/components/Atoms/Form";
import BaseDropdown from "~/components/Atoms/Form/BaseDropdown";
import Icon from "~/components/Atoms/Icon";
import { HobbiesList, HobbyIconName } from "~/components/Atoms/Icon/iconMap";
import { Header, Paragraph } from "~/components/Atoms/Typography";
import { TabPanelNav } from "~/components/Elements/TabPanelNav";
import { TabPanelProvider } from "~/hooks/useTabPanel";

const LearnRequest = () => {
  const CategoriesList = Object.keys(HobbiesList).map((key) => ({
    label: HobbiesList[key as HobbyIconName],
    value: key,
  }));

  const daysFilter = [
    "All",
    "Mon",
    "Tues",
    "Wed",
    "Thurs",
    "Fri",
    "Sat",
    "Sun",
  ];
  return (
    <div className="w-full bg-neutral-50 px-5 text-sm">
      {/* Header */}
      <div className="sticky top-0 flex justify-center w-full px-5 py-1.5 bg-white mx-auto mb-4 z-50">
        <Header as="h2">Post a Request</Header>
        <div className="absolute right-0">
          <button onClick={() => console.log("close")}>
            <Icon iconName="close" />
          </button>
        </div>
      </div>
      {/* Buttons */}
      <TabPanelProvider>
        <TabPanelNav
          className=""
          items={[
            { name: "Request to Learn", data: { route: "/create/learn" } },
            { name: "Request to Mentor", data: { route: "/create/mentor" } },
          ]}
        />
      </TabPanelProvider>
      <div className="flex flex-col items-center border border-dashed border-accent rounded-md p-11 my-3 text-accent">
        <Icon iconName="media" />
        <Paragraph className="w-full text-center">
          Post Photos or videos
        </Paragraph>
      </div>
      <div className="flex flex-col gap-3">
        <BaseInput
          placeholder="Request Name"
          className="border p-2.5 rounded-md text-sm"
        />
        <BaseTextArea
          placeholder="Describe what you're hoping to achieve"
          className="border p-2.5 rounded-md text-sm"
          rows="5"
        />
        <BaseDropdown
          options={CategoriesList}
          className="border p-2.5 rounded-md text-neutral-500"
        ></BaseDropdown>
        <div className="flex items-center border p-2.5 rounded-md text-neutral-500">
          <Icon iconName="location" />
          <Paragraph className="ml-2">Preferred location</Paragraph>
        </div>
      </div>
      <Header className="mt-8 mb-4 text-lg">Avaliability</Header>
      <Paragraph>Date</Paragraph>
      <div className="flex gap-3 h-fit flex-nowrap overflow-x-auto">
        {daysFilter.map((day) => (
          <button className="px-4 py-2.5 h-fit rounded-2xl bg-white mr-2 last-of-type:mr-0">
            {day}
          </button>
        ))}
      </div>
      <Paragraph className="text-sm font-semibold mt-3">Time</Paragraph>
      <div className="w-full flex items-center my-2">
        <span className="flex items-center border border-neutral-500 p-2.5 rounded-md text-neutral-500 bg-white">
          <Icon
            iconName="time"
            className="mr-1.5 placeholder:text-neutral-500"
          />
          <BaseInput
            placeholder="Start Time"
            className="w-full placeholder:text-neutral-500"
          />
        </span>
        <span className="mx-2">to</span>
        <span className="flex items-center border border-neutral-500 p-2.5 rounded-md text-neutral-500 bg-white">
          <Icon iconName="time" className="mr-1.5" />
          <BaseInput
            placeholder="End Time"
            className="w-full placeholder:text-neutral-500 "
          />
        </span>
      </div>
      <button className="flex items-center py-2 text-sm text-accent">
        <span>Add another time frame</span>
        <Icon iconName="add" className="ml-1 w-3 h-3 text-accent" />
      </button>
      <div className="mb-6">
        <input type="checkbox" className="mr-2" id="remove_request_check" />
        <label htmlFor="remove_request_check">
          Remove request after first booking
        </label>
      </div>

      <div className="mb-8">
        <Header className="mb-4 font-semibold">Budget</Header>
        <div className="flex items-center border border-neutral-500 p-2.5 rounded-md text-neutral-500">
          <Icon iconName="price" />
          <Paragraph className="ml-2">Set your budget</Paragraph>
        </div>
      </div>
      <div className="mb-8">
        <Header className="mb-4 font-semibold">Your Skill Level</Header>
        <div className="flex items-center border border-neutral-500 p-2.5 rounded-md text-neutral-500">
          <Icon iconName="learn" />
          <Paragraph className="ml-2">Skill Level</Paragraph>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button className="rounded-2xl bg-accent text-white p-4 font-semibold">
          Submit
        </button>
        {/*TODO: Pointer event should change by condition and create a Button atom vit variants*/}
        <button className="rounded-2xl border border-neutral-500 p-4 flex items-center justify-center gap-2 pointer-events-none text-gray-500">
          <span className="">Save For Later</span>
          <Icon iconName="review" />
        </button>
      </div>
    </div>
  );
};

export default LearnRequest;
