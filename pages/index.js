import Link from "next/link";
import BrandLogo from "../components/BrandLogo";
import Card from "../components/Card";
import TopBar from "../components/TopBar";

export default function Home({ reps }) {
  return (
    <div>
      <TopBar />
      <div className="flex justify-between items-center py-4 px-6">
        <BrandLogo title={"에이투플샵"} />
        <div></div>
      </div>
      <div className="h-24 md:h-60 lg:h-96 bg-amber-50"></div>
      <div className="grid grid-cols-2 gap-6 px-6 py-4 md:grid-cols-3 lg:grid-cols-4">
        {reps && reps.map((rep) => <Card key={rep.id} product={rep} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://tranquil-ravine-04015.herokuapp.com/api/replicas?populate=*"
  );
  const { data } = await res.json();

  const filterdData = data.filter((data) => data.attributes.sell_price != null);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      reps: filterdData,
    },
  };
}
