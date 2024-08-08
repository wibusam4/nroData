import { Breadcrumbs } from "@/components/breadcrumbs";
import MainLayout from "@/components/layout/MainLayout";
import { columns } from "@/components/tables/map/Columns";
import { MapTable } from "@/components/tables/map/MapTable";
import { API_TEA } from "@/constants";
import { Separator } from "@/components/ui/separator";
import SelectType from "./select";

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const breadcrumbItems = [
  { title: "Trang Chủ", link: "/" },
  { title: "Data NRO", link: "/" },
];

async function fecthMap(type: string | string[] | undefined) {
  let t = "Maps";
  if (type === "item") t = "ItemTemplates";
  const res = await fetch(`${API_TEA}1/${t}.json`);
  const results = await res.json();

  const maps = Object.entries(results).map(([id, name]) => ({ id, name }));
  return maps;
}

export default async function Home({ searchParams }: paramsProps) {
  const maps = await fecthMap(searchParams?.type);
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
