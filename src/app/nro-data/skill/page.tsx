import { Breadcrumbs } from "@/components/breadcrumbs";
import MainLayout from "@/components/layout/MainLayout";
import { API } from "@/constants";
import { Separator } from "@/components/ui/separator";
import SelectType from "./select";
import { ItemTable } from "@/components/tables/item/ItemTable";
import { columns } from "@/components/tables/item/Columns";

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const breadcrumbItems = [
  { title: "Trang Chủ", link: "/" },
  { title: "Data NRO", link: "/nro-data" },
  { title: "Item", link: "/nro-data/skill" },
];

async function fecthData(server: string | string[] | undefined) {
  if (server === undefined) server = "1";
  const res = await fetch(`${API}${server}/ItemTemplates.json`);
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
          <ItemTable data={maps} columns={columns} searchKey="name" />
        </div>
      </div>
    </MainLayout>
  );
}
