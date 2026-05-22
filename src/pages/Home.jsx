import heroImg from "../assets/images/1.svg";
import icon1 from "../assets/images/2.svg";
import icon2 from "../assets/images/3.svg";

import skill1 from "../assets/images/4.svg";
import skill2 from "../assets/images/5.svg";
import skill3 from "../assets/images/6.svg";
import skill4 from "../assets/images/7.svg";

import contactImg from "../assets/images/8.svg";

export default function Home() {
    return (
        <div className="bg-white text-[#263238]">

            {/* ================= HERO ================= */}
            <section className="max-w-[1200px] mx-auto px-5 py-20">
                <div className="grid lg:grid-cols-2 items-center gap-16">

                    {/* LEFT */}
                    <div>
                        <h1 className="text-[48px] leading-[56px] font-bold">
                            Learn <br />
                            Any Foreign <br />
                            Language
                        </h1>

                        <p className="mt-6 text-[#8F95A5] max-w-[420px] leading-7">
                            With our teachers who write a program for each student,
                            you will be able to make your first sketch after the first lesson.
                        </p>

                        <button className="mt-10 bg-[#263238] text-white px-10 py-4 rounded-[15px] text-[18px] hover:bg-orange-500 transition">
                            Get started
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center">
                        {/* <img src={heroImg} className="w-130" alt="hero" /> */}

                        <img
                            src={icon1}
                            className="absolute top-[20px] right-[700px] w-[40px]"
                            alt="icon"
                        />
                        <img
                            src={icon2}
                            className="absolute top-[-280px] right-[60px] w-[660px]"
                            alt="icon"
                        />
                    </div>

                </div>
            </section>

            {/* ================= SKILLS ================= */}
            <section className="max-w-[1200px] mx-auto px-5 py-20">
                <h2 className="text-center text-[36px] font-bold mb-16">Skills</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { img: skill1, title: "Speaking" },
                        { img: skill2, title: "Writing" },
                        { img: skill3, title: "Reading" },
                        { img: skill4, title: "Listening" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#F5F5F5] p-8 rounded-[20px] flex flex-col"
                        >
                            <img
                                src={item.img}
                                className="h-[140px] mx-auto mb-6"
                                alt={item.title}
                            />

                            <h3 className="font-bold text-xl mb-3">
                                {item.title}
                            </h3>

                            <p className="text-sm text-[#8F95A5]">
                                Improve your {item.title.toLowerCase()} skills with experts.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CONTACT ================= */}
            <section className="max-w-[1200px] mx-auto px-5 py-24">
                <div className="grid lg:grid-cols-2 items-center gap-16">

                    {/* LEFT IMAGE */}
                    <img
                        src={contactImg}
                        className="w-[420px] mx-auto"
                        alt="contact"
                    />

                    {/* RIGHT FORM */}
                    <div>
                        <h2 className="text-[36px] font-bold mb-6">Contact Us</h2>

                        <p className="text-[#8F95A5] max-w-md mb-10">
                            Discover your current English level by taking our free online English test.
                        </p>

                        <div className="flex max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your E-mail"
                                className="flex-1 px-5 py-4 border border-[#8F95A5] rounded-l-[15px] outline-none"
                            />
                            <button className="bg-[#263238] text-white px-8 rounded-r-[15px] hover:bg-orange-500 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}