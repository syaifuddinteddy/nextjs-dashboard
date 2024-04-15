import { UilFileMedicalAlt } from "@iconscout/react-unicons";
import { lusitana } from '@/app/ui/fonts';

export default function PSLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
        <UilFileMedicalAlt className="mx-1"/>
        <p className="text-[24px]">Pet Square</p>
    </div>
  );
}