import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col h-screen mx-auto items-center justify-center">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 text-bold text-[46px] text-orange-400">
          404 |
        </div>{' '}
        <h1 className="text-blue-600 font-bold text-lg">
          ไม่พบหน้าที่ท่านค้นหา
        </h1>
        <p className="text-blue-600 font-thin text-xl text-center">
          Page Not Found
        </p>
      </div>
      <Link href="/">กลับหน้าแรก</Link>
    </div>
  );
}
