import Categorys from "@/components/categorys";
import YangiTovar from "@/components/yangi_tovar";
import { request } from "@/server/request";

async function getData() {
  try {
    return request("last-products");
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const { data: last } = await getData();
  console.log(last);
  return (
    <main className="mt-32 ">
      <section>
        <YangiTovar last={last} />
      </section>
      <section>
        <Categorys />
      </section>
    </main>
  );
}
