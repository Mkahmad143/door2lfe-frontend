import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Link } from "react-router-dom";

const WorkGroup = () => {
  return (
    <Card className="max-w-md p-6 mx-auto my-8 text-black shadow-lg bg-lightgray">
      <CardTitle className="mb-2 text-xl font-bold text-center sm:text-2xl">
        Work Group:
      </CardTitle>

      <CardDescription className="mb-4 font-semibold text-center text-black">
        This option can be used to create your Group (8 members) for the '7
        DOORS'.
      </CardDescription>

      <CardContent className="mb-4 font-semibold text-center">
        <p className="mb-4 font-semibold">
          And to view all the members that belong to your Work Group.
        </p>
        <Link to={"/userpage/workgroup"}>
          {" "}
          <Button className="text-xs text-black bg-green hover:bg-darkGreen sm:text-sm">
            VIEW WORK GROUP
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default WorkGroup;
