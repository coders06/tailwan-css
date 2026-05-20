import img1 from "../assets/images/1.svg";   // katta hero rasm
import img2 from "../assets/images/2.svg";
import img3 from "../assets/images/3.svg";

import img4 from "../assets/images/4.svg";
import img5 from "../assets/images/5.svg";
import img6 from "../assets/images/6.svg";
import img7 from "../assets/images/7.svg";

export default function Hero() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-5">

                {/* ================= HERO ================= */}
                <div className="grid md:grid-cols-2 items-center gap-14">

                    {/* LEFT */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] leading-tight">
                            Learn <br />

                            <span className="flex items-center gap-3 mt-3">
                                Any Foreign
                                <img src={img2} className="w-8 h-8" />
                                <img src={img3} className="w-12 h-12" />
                            </span>

                            Language
                        </h1>

                        <p className="mt-6 text-[#8F95A5] max-w-lg leading-7">
                            With our teachers who write a program for each student,
                            you will be able to make your first sketch after the first lesson.
                        </p>

                        <button className="mt-8 bg-[#263238] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-500 transition">
                            Get started
                        </button>
                    </div>

                    {/* RIGHT – KATTA RASM */}
                    <div className="flex justify-center">
                        <img
                            src={img1}
                            alt="hero"
                            className="w-full max-w-md"
                        />
                    </div>
                </div>

                {/* ================= SKILLS ================= */}
                <div className="mt-24">
                    <h2 className="text-center text-3xl font-bold text-[#263238] mb-14">
                        Skills
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Speaking */}
                        <div className="bg-[#F5F5F5] rounded-2xl p-6">
                            <img src={img4} className="mb-6 h-36 mx-auto" />
                            <h3 className="font-bold text-lg mb-3">Speaking</h3>
                            <p className="text-sm text-[#8F95A5]">
                                Improve your speaking skills with teachers.
                            </p>
                        </div>

                        {/* Writing */}
                        <div className="bg-[#F5F5F5] rounded-2xl p-6">
                            <img src={img5} className="mb-6 h-36 mx-auto" />
                            <h3 className="font-bold text-lg mb-3">Writing</h3>
                            <p className="text-sm text-[#8F95A5]">
                                Learn to write correctly and confidently.
                            </p>
                        </div>

                        {/* Reading */}
                        <div className="bg-[#F5F5F5] rounded-2xl p-6">
                            <img src={img6} className="mb-6 h-36 mx-auto" />
                            <h3 className="font-bold text-lg mb-3">Reading</h3>
                            <p className="text-sm text-[#8F95A5]">
                                Read and understand texts easily.
                            </p>
                        </div>

                        {/* Listening */}
                        <div className="bg-[#F5F5F5] rounded-2xl p-6">
                            <img src={img7} className="mb-6 h-36 mx-auto" />
                            <h3 className="font-bold text-lg mb-3">Listening</h3>
                            <p className="text-sm text-[#8F95A5]">
                                Train your listening comprehension.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
} Hero 