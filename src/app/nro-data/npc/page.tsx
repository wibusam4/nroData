import { Breadcrumbs } from "@/components/breadcrumbs";
import MainLayout from "@/components/layout/MainLayout";
import { API } from "@/constants";
import { Separator } from "@/components/ui/separator";
import { NpcTable } from "@/components/tables/npc/NpcTable";
import { columns } from "@/components/tables/npc/Columns";
import SelectType from "../select";

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const breadcrumbItems = [
  { title: "Trang Chủ", link: "/" },
  { title: "Data NRO", link: "/nro-data" },
  { title: "NPC", link: "/nro-data/npc" },
];

async function fecthData(server: string | string[] | undefined) {
  try {
    if (server === undefined) server = "Server1";
    const res = await fetch(`${API}${server}/NpcTemplates.json`, {
      cache: "no-store",
    });
    const results: any = await res.json();
    return results;
  } catch (error) {
    return null;
  }
}

export default async function Home({ searchParams }: paramsProps) {
  const npcs = await fecthData(searchParams?.server);
  if (npcs == null) {
    return (
      <MainLayout>
        <div className="space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <Separator />
          <p className="p-4 text-[16px]">Lỗi Lấy Dữ Liệu</p>
        </div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <Separator />
        <SelectType />
        <Separator />
        <div>
          <NpcTable data={npcs} columns={columns} searchKey="name" />
        </div>
      </div>
    </MainLayout>
  );
}
