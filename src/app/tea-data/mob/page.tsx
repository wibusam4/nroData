import { Breadcrumbs } from "@/components/breadcrumbs";
import MainLayout from "@/components/layout/MainLayout";
import { API_TEA } from "@/constants";
import { Separator } from "@/components/ui/separator";
import SelectType from "../select";
import { Mobtable } from "@/components/tables/mob/MobTable";
import { columns } from "@/components/tables/mob/Columns";

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const breadcrumbItems = [
  { title: "Trang Chủ", link: "/" },
  { title: "Data NRO TeaMobi", link: "/tea-data" },
  { title: "Mob / Quái", link: "/tea-data/mob" },
];

async function fecthData(server: string | string[] | undefined) {
  try {
    if (server === undefined) server = "Server1";
    const res = await fetch(`${API_TEA}${server}/MobTemplates.json`, {
      cache: "no-store",
    });
    const results: any = await res.json();
    return results;
  } catch (error) {
    return null;
  }
}

export default async function Home({ searchParams }: paramsProps) {
  const mobs = await fecthData(searchParams?.server);
  if (mobs == null) {
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
          <Mobtable data={mobs} columns={columns} searchKey="name" />
        </div>
      </div>
    </MainLayout>
  );
}
