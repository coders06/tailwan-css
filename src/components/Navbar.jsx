import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import img1 from "../assets/images/1.svg";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const token = localStorage.getItem("token");

    return (
        <nav className="bg-[#263238] text-white sticky top-0 z-50 shadow-xl">

            <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">

                {/* LOGO */}
                <Link to="/" className="flex items-center">
                    <img
                        src={img1}
                        alt="logo"
                        className="w-12 h-12 object-contain shadow-xl hover:shadow-2xl transition duration-300 rounded-xl hover:scale-110"
                    />
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-8 items-center">

                    <Link
                        to="/"
                        className="hover:text-yellow-400 duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="hover:text-yellow-400 duration-300"
                    >
                        About
                    </Link>

                    <Link
                        to="/books"
                        className="hover:text-yellow-400 duration-300"
                    >
                        Books
                    </Link>

                    {!token ? (
                        <>
                            <Link
                                to="/register"
                                className="hover:text-yellow-400 duration-300"
                            >
                                Register
                            </Link>

                            <Link
                                to="/login"
                                className="bg-yellow-400 hover:bg-orange-500 duration-300 text-black px-5 py-2 rounded-xl font-semibold"
                            >
                                Login
                            </Link>
                        </>
                    ) : (
                        <Link
                            to="/profile"
                            className="hover:text-yellow-400 duration-300"
                        >
                            Profile
                        </Link>
                    )}

                </div>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                >
                    {open ? <X size={32} /> : <Menu size={32} />}
                </button>

            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-gray-900 flex flex-col items-center gap-6 py-8">

                    <Link
                        to="/"
                        onClick={() => setOpen(false)}
                        className="text-xl hover:text-yellow-400"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        onClick={() => setOpen(false)}
                        className="text-xl hover:text-yellow-400"
                    >
                        About
                    </Link>

                    <Link
                        to="/books"
                        onClick={() => setOpen(false)}
                        className="text-xl hover:text-yellow-400"
                    >
                        Books
                    </Link>

                    {!token ? (
                        <>
                            <Link
                                to="/register"
                                onClick={() => setOpen(false)}
                                className="text-xl hover:text-yellow-400"
                            >
                                Register
                            </Link>

                            <Link
                                to="/login"
                                onClick={() => setOpen(false)}
                                className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
                            >
                                Login
                            </Link>
                        </>
                    ) : (
                        <Link
                            to="/profile"
                            onClick={() => setOpen(false)}
                            className="text-xl hover:text-yellow-400"
                        >
                            Profile
                        </Link>
                    )}

                </div>
            )}

        </nav>
    );
}