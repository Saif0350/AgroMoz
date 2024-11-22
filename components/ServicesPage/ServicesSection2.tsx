import Image from "next/image";
import React from "react";

const ServicesSection2 = () => {
  return (
    <>
      <div className="py-12 ">
        <div className="flex items-center mb-7">
          {/* Vertical line */}
          <div className="w-[3px] h-[70px] bg-primary   mr-4"></div>

          {/* Text Section */}
          <div className="z-10">
            <h4 className="text-2xl font-bold">Services</h4>
            <h4 className="text-secondary md:text-xl  text-lg">
              Agromoz uses best-in-class technology and a nationwide network of
              warehouses providing a range of services, offering both flexible
              and contract logistics.
              {/* <span>
                This also allows us to provide customization and ease-of-use to
                customers, where we adapt the operations and processes in our
                warehouses and supply chain management according to our clients’
                logistics needs. Precision and efficiency are guaranteed.
              </span> */}
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto">
          <div className="bg-white  rounded-lg shadow-lg">
            <div>
              <Image
                src="/services/1.jpg"
                alt="Freight Shipping"
                width={400}
                height={300}
                className="rounded-t-lg w-full  object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mt-4">
                Warehousing Management
              </h3>
              <p className="text-gray-600 mt-2">
                At AgroMoz, we specialize in providing innovative and reliable
                warehousing management solutions that cater to the diverse needs
                of our clients, including farmers, traders, processors,
                corporations, commodity exchanges, and financial institutions.
                Our aim is to deliver seamless warehousing and logistics
                services at optimal costs, ensuring convenience, quality, and
                efficiency at every step.
              </p>
            </div>
          </div>

          <div className="bg-white  rounded-lg shadow-lg">
            <div>
              <Image
                src="/services/2.jpg"
                alt="Freight Shipping"
                width={400}
                height={300}
                className="rounded-t-lg w-full  object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mt-4">
                Distribution Management
              </h3>
              <p className="text-gray-600 mt-2">
                We use top-quality tools across distribution management to
                create highly efficient product flow systems. Our world-class
                fulfillment software customizes the right freight method for
                customers of all business sizes – taking into consideration
                factors such as the distance, weight, volume, and size of the
                shipment. Further, our single window, real-time tracking system
                offers complete transparency every step of the way. Effective
                distribution management can help businesses reduce costs, use
                their resources efficiently, improve productivity, enhance
                customer service, and increase their profitability.
              </p>
            </div>
          </div>

          <div className="bg-white  rounded-lg shadow-lg">
            <div>
              <Image
                src="/services/3.jpg"
                alt="Freight Shipping"
                width={400}
                height={300}
                className="rounded-t-lg w-full  object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mt-4">
                Value-Added Services
              </h3>
              <p className="text-gray-600 mt-2">
                We offer customized logistics services that cover inbound,
                outbound, and reverse logistics. Our services include in-house
                barcode printing, kitting/bundling, labeling, appointment-based
                transportation, consolidation, and more. These services
                eliminate the need for our clients to dedicate resources to
                performing these essential but mundane supply chain activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection2;
