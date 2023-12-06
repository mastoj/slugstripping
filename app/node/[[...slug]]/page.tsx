import React from "react";

type Props = {
  params: {
    slug: string[];
  };
};

const Page = (props: Props) => {
  return (
    <div className="flex items-center w-full h-screen justify-around">
      <div>{JSON.stringify(props.params.slug)}</div>
    </div>
  );
};

export default Page;
