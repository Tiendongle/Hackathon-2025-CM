import { useRouter } from "@tanstack/react-router";
import { BaseInput, BaseTextArea } from "~/components/Atoms/Form";
import BaseDropdown from "~/components/Atoms/Form/BaseDropdown";
import Icon from "~/components/Atoms/Icon";
import { HobbiesList, HobbyIconName } from "~/components/Atoms/Icon/iconMap";
import { Header, Paragraph } from "~/components/Atoms/Typography";
import { TabPanel } from "~/components/Compounds/TabPanel";
import { TabPanelNav } from "~/components/Elements/TabPanelNav";
import { TabPanelProvider } from "~/hooks/useTabPanel";

const MentorRequest = () => {
  const router = useRouter();
  const onBack = () => {
    router.history.back();
    console.log("close");
  };
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
      <header className="sticky top-0 flex justify-center w-full px-5 py-4 bg-white mx-auto mb-4 z-50 text-base">
        <Header as="h2">Post a Request</Header>
        <div className="absolute right-0">
          <button onClick={onBack}>
            <Icon iconName="close" />
          </button>
        </div>
      </header>
      {/* Buttons */}
      <TabPanelProvider>
        <TabPanelNav
          active="Request to Mentor"
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
      <div className="flex flex-col gap-3 mb-8">
        <BaseInput
          placeholder="Request Name"
          className="border p-2.5 rounded-md"
        />
        <BaseTextArea
          placeholder="Describe what you're hoping to achieve"
          className="border p-2.5 rounded-md"
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
      <TabPanelProvider>
        <Header className="mb-4 text-lg">Meeting Time</Header>
        <TabPanelNav
          items={[
            { name: "Schedule", data: [] },
            { name: "Availability", data: [] },
          ]}
        />
      </TabPanelProvider>
      <Paragraph className="text-sm font-semibold mt-3">Date</Paragraph>
      <div className="flex items-center border border-neutral-500 p-2.5 my-2 rounded-md text-neutral-500 text-sm">
        <Icon iconName="calendar" />
        <Paragraph className="ml-2">MM / DD / YYYY</Paragraph>
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
        <span>Add another session</span>
        <Icon iconName="add" className="ml-1 w-3 h-3 text-accent" />
      </button>
      <div className="my-8 [&_div]:mb-2">
        <Header className="mb-4 font-semibold">Rate</Header>
        <div className="flex items-center border border-neutral-500 p-2.5 rounded-md text-neutral-500">
          <Icon iconName="price" />
          <Paragraph className="ml-2">Set your rate</Paragraph>
        </div>
        <div className="flex items-center border border-neutral-500 p-2.5 rounded-md text-neutral-500">
          <Icon iconName="cancellation" />
          <Paragraph className="ml-2">Set your rate</Paragraph>
        </div>
      </div>
      <div className="mb-8">
        <Header className="mb-4 font-semibold">Reccomended Skill Level</Header>
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

export default MentorRequest;
