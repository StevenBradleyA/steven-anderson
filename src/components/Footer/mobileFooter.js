import Image from 'next/image';
import palmTree from '@public/Images/og-image.png';
import Link from 'next/link';

const MobileFooter = () => {
    return (
        <>
            <div className="w-full bg-outerSpace bg-opacity-50  z-40 flex flex-col p-5 text-white/50 text-xs">
                <div className="flex w-full gap-10 items-center">
                    <Image
                        alt="profile"
                        src={palmTree}
                        className="w-16 h-16 object-cover"
                    />
                    <p className="w-full">
                        Steven-anderson is my portfolio site built on Next.js,
                        R3F, and Blender.
                    </p>
                </div>
                <div className="flex mt-3 justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-stevenBlue text-base">Discover </h2>
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
                    <div className="flex flex-col gap-1">
                        <h2 className="text-stevenBlue text-base">
                            Stay Informed{' '}
                        </h2>

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

                <div className="w-full bg-white/50 h-[2px] mt-2"></div>
                <div className="mt-2 flex w-full justify-between">
                    <div>{`Inspired by my AE86 | built by me`} </div>
                </div>
            </div>
        </>
    );
};

export default MobileFooter;
