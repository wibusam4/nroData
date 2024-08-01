import { Breadcrumbs } from "@/components/breadcrumbs";
import MainLayout from "@/components/layout/MainLayout";
import { API } from "@/constants";
import { Separator } from "@/components/ui/separator";
import SelectType from "./select";
import { Mobtable } from "@/components/tables/mob/MobTable";
import { columns } from "@/components/tables/mob/Columns";

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const breadcrumbItems = [
  { title: "Trang Chủ", link: "/" },
  { title: "Data NRO", link: "/nro-data" },
  { title: "Mob / Quái", link: "/nro-data/mob" },
];

async function fecthData(server: string | string[] | undefined) {
  if (server === undefined) server = "1";
  const res = await fetch(`${API}${server}/MobTemplates.json`);
  const results: any = await res.json();
  return results;
}

export default async function Home({ searchParams }: paramsProps) {
  const mobs = await fecthData(searchParams?.server);
  return (
    <MainLayout>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <Separator />
        <SelectType />
        <Separator />
        <div>
          <Mobtable data={mobs} columns={columns} searchKey="name" />
        </div>
      </div>
    </MainLayout>
  );
}
