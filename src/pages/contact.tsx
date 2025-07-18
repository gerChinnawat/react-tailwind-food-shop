
const ContactPage = () => {
    return(
        <>
            <main className={`bg-gray-300 h-[50svh] mt-[10svh] flex justify-center items-center`}>
                <article className="w-[50%] flex justify-center">
                    <img src="/assets/map.png" alt="Map" width="500px" />
                </article>
                <article className="bg-black w-[50%] h-[100%] text-white text-center items-center flex justify-center">
                    <section>
                        <h1 className="text-2xl mb-10">Ready to make a reservation?</h1>
                        <button className="border-white text-xl border-2 p-4 px-6 rounded-md hover:bg-gray-600 cursor-pointer">
                            Reserve Table
                        </button>
                    </section>
                </article>
            </main>
            <footer>
                <section className={`h-[40svh] mb-[10svh] flex items-center justify-center gap-30 text-[1.5rem] relative`}>
                    <article>
                        <h1 className="text-4xl">Good Taste</h1>
                    </article>
                    <article>
                        <h1>123 Sukumwith 59</h1>
                        <h1>Bangkok, Thailand</h1>
                        <h1>02-222-2222, +6698-765-4321</h1>
                    </article>
                    <article>
                        <h1>Open Time</h1>
                        <h1>MON - FRI: 09:00 AM - 10:00 PM</h1>
                        <h1>SAT - SUN: 09:00 AM - 11:00 PM</h1>
                    </article>
                    <article className="absolute bottom-2 left-[50]">
                        <span className="flex gap-1"><img src="/assets/copyright.svg" alt="Copyright" /> 2025 Taste Good by ServeTH | All Rights Reserved</span>
                </article>
                </section>
            </footer>
        </>
    );
};

export default ContactPage;