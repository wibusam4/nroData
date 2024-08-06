import { Breadcrumbs } from "@/components/breadcrumbs";
import MainLayout from "@/components/layout/MainLayout";
import { Separator } from "@/components/ui/separator";
import { Github, Sword, Swords } from "lucide-react";
import Link from "next/link";

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const breadcrumbItems = [
  { title: "Trang Chủ", link: "/" },
  { title: "Thông Tin", link: "/infor" },
];

export default async function Home({ searchParams }: paramsProps) {
  return (
    <MainLayout>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <Separator />
        <div>
          <div>
            <p className="font-semibold text-[20px]">
              Mã nguồn API và lấy dữ liệu:{" "}
            </p>
            <div className="flex items-center space-x-1 mt-2">
              <Github className="border size-8 p-1 rounded" />
              <Link
                href={`https://github.com/ElectroHeavenVN/DataNRO/`}
                target="_blank"
                className="text-[18px] border-b"
              >
                ElectroHeavenVN/DataNRO/{" "}
              </Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[20px] mt-4">Mã nguồn Web: </p>
            <div className="flex items-center space-x-1 mt-2">
              <Github className="border size-8 p-1 rounded" />
              <Link
                href={`https://github.com/wibusam4/nroData`}
                target="_blank"
                className="text-[18px] border-b"
              >
                wibusam4/nroData{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
