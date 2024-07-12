import Image from 'next/image';
import palmTree from '@public/Images/og-image.png';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className="w-full bg-outerSpace bg-opacity-50  z-40 flex flex-col px-10 pt-10 pb-3 text-white/50">
                <div className="flex w-full justify-between items-center">
                    <div>
                        <Link href={'/'} aria-label="Explore my portfolio game">
                            <Image
                                alt="profile"
                                src={palmTree}
                                className="w-16 h-16 object-cover"
                            />
                        </Link>
                        <p className="w-96 mt-5">
                            Steven-anderson is my portfolio site built on
                            Next.js, R3F, and Blender.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-stevenBlue">Discover </h2>
                        <Link
                            href={'/'}
                            aria-label="Explore my porfolio game"
                            className="hover:text-stevenBlue ease-in"
                        >
                            Home
                        </Link>
                        <Link
                            href={'/about'}
                            aria-label="Learn about me"
                            className="hover:text-stevenBlue ease-in"
                        >
                            About
                        </Link>
                        <Link
                            href={'/contact'}
                            aria-label="Get in touch with me"
                            className="hover:text-stevenBlue ease-in"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="w-full bg-white/50 h-[2px] mt-5"></div>
                <div className="mt-5 flex w-full justify-between">
                    <div>{`Inspired by my AE86 | built by me`} </div>

                    <div className="flex gap-5">
                        <Link
                            href={'/terms-of-service'}
                            aria-label="Read our Terms of Service"
                            className="hover:text-stevenBlue ease-in"
                        >
                            Terms
                        </Link>
                        <Link
                            href={'/privacy-policy'}
                            aria-label="Read our Privacy Policy"
                            className="hover:text-stevenBlue ease-in"
                        >
                            Privacy
                        </Link>
                        <Link
                            href={'/cookie-policy'}
                            aria-label="Read our Cookie Policy"
                            className="hover:text-stevenBlue ease-in"
                        >
                            Cookie
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
