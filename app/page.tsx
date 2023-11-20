import { Input } from "@/components/ui/input";
import { About } from "./(partials)/About";
import { Faq } from "./(partials)/Faq";
import { Footer } from "./(partials)/Footer";
import { Header } from "./(partials)/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HowItWorks } from "./(partials)/Home/HowItWorks";
import { ListingsList } from "./(partials)/Listings/ListingsList";
import { listListings } from "@/api/listings/list";

export default async function () {
    const listings = await listListings();

  return (
    <>
      <Header />

      <section className="relative flex items-center mx-auto bg-white max-w-7xl">
        <div className="relative items-center w-full py-20 ">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
              <div className="relative items-center gap-12 m-auto lg:inline-flex">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <div className="py-6" />
                    <Badge className="px-6 py-1 mt-0 mb-5 leading-loose">
                      Instantly transform your home - Coming soon
                    </Badge>
                    <p className="mb-10 text-4xl font-semibold tracking-tighter lg:text-6xl text-slate-900">
                      Interior design. In your pocket
                    </p>
                    <p className="max-w-xl mt-4 text-lg tracking-tight lg:text-xl text-slate-500">
                      Forget trying to imagine what a style would look like in
                      your home - see what could be, instantly.
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-full pt-8 mx-auto space-x-4 lg:justify-start md:pt-6">
                    <Button variant={"secondary"} asChild>
                      <a href="/about">Learn More</a>
                    </Button>
                    <Button asChild>
                      <a href="/register">Get Started</a>
                    </Button>
                  </div>
                  <p className="mt-3 text-slate-500">
                    Get notified when we launch!
                  </p>
                </div>
              </div>

              <div className="block w-full p-8 mt-12 bg-slate-200 lg:mt-0 rounded-3xl">
                <img
                  alt="hero"
                  className="object-cover object-center w-full h-full mx-auto lg:ml-auto rounded-2xl"
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 mx-auto md:py-20 max-w-7xl">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] bg-gradient-to-bl from-gray-50 to-primary-foreground p-10 rounded-2xl">
          <div className="md:col-span-5">
            <div className="relative">
              <img
                src="/assets/images/about.jpg"
                className="shadow-md rounded-xl"
                alt=""
              />
              <div className="absolute text-center bottom-2/4 translate-y-2/4 start-0 end-0">
                <a
                  href="#!"
                  data-type="youtube"
                  data-id="yba7hPeTSjk"
                  className="inline-flex items-center justify-center w-20 h-20 text-green-600 bg-white rounded-full shadow-md lightbox dark:shadow-gyay-700 dark:bg-slate-900"
                >
                  <i className="inline-flex items-center justify-center text-2xl mdi mdi-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="py-10 md:col-span-7">
            <div className=" lg:ms-4">
              <h4 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl lg:leading-normal">
                Efficiency. Transparency. Control.
              </h4>
              <p className="max-w-xl text-lg text-slate-600">
                Hously developed a platform for the Real Estate marketplace that
                allows buyers and sellers to easily execute a transaction on
                their own. The platform drives efficiency, cost transparency and
                control into the hands of the consumers. Hously is Real Estate
                Redefined.
              </p>

              <div className="mt-4">
                <Button>Learn More</Button>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>

        <HowItWorks />

        <div className="mx-auto mt-16 max-w-7xl lg:mt-24">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
              Featured Properties
            </h3>
            <p className="max-w-xl mx-auto text-slate-400">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>
          {/*end grid*/}

          <div className="space-y-20">
            <ListingsList listings={listings} />
            {/*en grid*/}
            <div className="justify-center mt-6 text-center md:flex">
              <div className="md:w-full">
                <Button>View More Properties</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-16 lg:mt-24">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 text-2xl font-medium leading-normal text-black md:text-3xl md:leading-normal dark:text-white">
              Have Question ? Get in touch!
            </h3>
            <p className="max-w-xl mx-auto text-slate-400">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
            <div className="mt-6">
              <Button>Contact us</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
