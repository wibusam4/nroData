import { Breadcrumbs } from "@/components/breadcrumbs";
import MainLayout from "@/components/layout/MainLayout";
import { columns } from "@/components/tables/map/Columns";
import { MapTable } from "@/components/tables/map/MapTable";
import { API } from "@/constants";
import { Separator } from "@/components/ui/separator";
import SelectType from "./select";
import { Map } from "@/type";

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const breadcrumbItems = [
  { title: "Trang Chủ", link: "/" },
  { title: "Data NRO", link: "/nro-data" },
  { title: "Map", link: "/nro-data/map" },
];

async function fecthData(server: string | string[] | undefined) {
  if (server === undefined) server = "1";
  const res = await fetch(`${API}${server}/Maps.json`);
  const results: any = await res.json();
  return results;
}

export default async function Home({ searchParams }: paramsProps) {
  const maps = await fecthData(searchParams?.server);
  return (
    <MainLayout>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <Separator />
        <SelectType />
        <Separator />
        <div>
          <MapTable data={maps} columns={columns} searchKey="name" />
        </div>
      </div>
    </MainLayout>
  );
}
