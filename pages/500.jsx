import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="flex flex-col h-screen mx-auto items-center justify-center">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 text-bold text-[46px] text-orange-400">
          500 |
        </div>{' '}
        <h1 className="text-blue-600 font-bold text-lg">
          เกิดปัญหาที่เครื่องเซิฟเฟ่อร์
        </h1>
        <p className="text-blue-600 font-thin text-xl text-center">
          Server-side error occurred
        </p>
        <p>แจ้งปัญหาการใช้งาน: admin@company.com</p>
      </div>
      <Link href="/">กลับหน้าแรก</Link>
    </div>
  );
}

// export default function Custom500() {
//   return (
//     <div>
//       <h1>500 - เกิดปัญหาที่เครื่องเซิฟเฟ่อร์</h1>
//       <p>Server-side error occurred</p>
//       <p>แจ้งปัญหาการใช้งาน: admin@company.com</p>
//     </div>
//   );
// }
