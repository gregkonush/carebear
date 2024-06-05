import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  SewingPinFilledIcon,
  LapTimerIcon,
  HomeIcon,
} from "@radix-ui/react-icons";

export function JobListing({
  jobTitle,
  facilityName,
  location,
  shift,
}: {
  jobTitle: string;
  facilityName: string;
  location: string;
  shift: string;
}) {
  return (
    <Card className="text-sm w-[400px]">
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{jobTitle}</CardTitle>
        <CardDescription>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-1">
              <HomeIcon />
              <div>{facilityName}</div>
            </div>
            <div className="flex flex-row items-center space-x-1 ">
              <SewingPinFilledIcon className="text-orange-300" />
              <div>{location}</div>
            </div>
            <div className="flex flex-row space-x-1 items-center">
              <LapTimerIcon />
              <div>{shift}</div>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row space-x-2 items-center justify-between space-y-1 px-4">
        <div className="text-xl font-semibold text-emerald-500/80">
          $84/hour
        </div>
        <Button className="bg-emerald-500 text-white">
          I&lsquo;m interested
        </Button>
      </CardContent>
      <CardFooter className="text-xs text-gray-400 p-4 pt-0">
        Posted 1 hour ago
      </CardFooter>
    </Card>
  );
}
