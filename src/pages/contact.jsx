import {
  BsCloudCheck,
  BsHouse,
  BsHouseCheckFill,
  BsSendCheck,
} from "react-icons/bs";
import { Section } from "../components/Section";

function ContactPage() {
  return (
    <Section>
      <div className="h-[400px] bg-slate-800 mb-10" />
      <div className="grid grid-cols-3">
        <div className="flex items-center gap-5 text-gray-300">
          <BsHouseCheckFill fontSize={23} />
          <div>
            <p className="text-xl font-medium">Meet us at</p>
            <p className="text-sm w-1/2 opacity-75">
              K.J. Somaiya College of Engineering Vidyavihar (East) Mumbai -
              400077 Maharashtra India
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-gray-300">
          <BsSendCheck fontSize={23} />
          <div>
            <p className="text-xl font-medium">Contact</p>
            <p className="text-sm w-1/2 opacity-75">anaz.aijaz@gmail.com</p>
            <p className="text-sm w-1/2 opacity-75">anaz.aijaz@gmail.com</p>
            <p className="text-sm w-1/2 opacity-75">anaz.aijaz@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-gray-300">
          <BsCloudCheck fontSize={23} />
          <div>
            <p className="text-xl font-medium">Follow</p>
            <p className="text-sm w-1/2 opacity-75">@nitkracing</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactPage;
