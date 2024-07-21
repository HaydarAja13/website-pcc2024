import {SectionTitle} from "@/components";
import SingleMemberCard from "../components/SingleMemberCard";

export default function SekumSection() {
  return (
    <section className='h-auto py-16 px-4 md:px-24' id='sekum'>
      <SectionTitle
        firstTitle='UMUM'
        spanTitle='SEKRETARIS'
        textColor='text-primary'
        spanColor='text-quinary'
        useBr={false}
        useRightHr
        hrWidth='w-full'
      />
      <SingleMemberCard
        memberImage='/images/sto/sekum.webp'
        memberName='Nor Aina'
        memberPosition='Sekretaris Umum'
        isLeft={false}
      />
    </section>
  );
}
