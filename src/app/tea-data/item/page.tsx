import { Breadcrumbs } from "@/components/breadcrumbs";
import MainLayout from "@/components/layout/MainLayout";
import { API_TEA } from "@/constants";
import { Separator } from "@/components/ui/separator";
import SelectType from "../select";
import { ItemTable } from "@/components/tables/item/ItemTable";
import { columns } from "@/components/tables/item/Columns";

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const breadcrumbItems = [
  { title: "Trang Chủ", link: "/" },
  { title: "Data NRO TeaMobi", link: "/tea-data" },
  { title: "Item", link: "/tea-data/item" },
];

async function fecthData(server: string | string[] | undefined) {
  try {
    if (server === undefined) server = "Server1";
    const res = await fetch(`${API_TEA}${server}/ItemTemplates.json`, {
      cache: "no-store",
    });
    const results: any = await res.json();
    return results;
  } catch (error) {
    return null;
  }
}

export default async function Home({ searchParams }: paramsProps) {
  const maps = await fecthData(searchParams?.server);
  if (maps == null) {
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
          <ItemTable data={maps} columns={columns} searchKey="name" />
        </div>
      </div>
    </MainLayout>
  );
}
