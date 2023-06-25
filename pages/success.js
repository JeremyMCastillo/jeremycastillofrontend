import Layout from "../components/layout";

export default function success() {
    return (
        <Layout>
            <div className="pl-16 md:pl-80 flex flex-col gap-8 pt-24 text-center item-center justify-center w-full h-full">
                <svg className="block w-full h-56" width="347" height="347" viewBox="0 0 347 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_146_137)">
                <circle cx="173.5" cy="173.5" r="169.5" stroke="url(#paint0_linear_146_137)" stroke-width="8"/>
                <line x1="96.2681" y1="180.216" x2="162.268" y2="237.216" stroke="url(#paint1_linear_146_137)" stroke-width="10"/>
                <line x1="270.938" y1="106.082" x2="162.938" y2="244.082" stroke="url(#paint2_linear_146_137)" stroke-width="10"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_146_137" x1="34.5" y1="273" x2="317.5" y2="69" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E0AF5A"/>
                <stop offset="1" stopColor="#E0AF5A" stopOpacity="0.45"/>
                </linearGradient>
                <linearGradient id="paint1_linear_146_137" x1="126" y1="212.5" x2="125.346" y2="213.257" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E0AF5A"/>
                <stop offset="1" stopColor="#E0AF5A"/>
                </linearGradient>
                <linearGradient id="paint2_linear_146_137" x1="167.5" y1="236.5" x2="267" y2="103" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E0AF5A"/>
                <stop offset="1" stopColor="#E0AF5A" stopOpacity="0.45"/>
                </linearGradient>
                <clipPath id="clip0_146_137">
                <rect width="347" height="347" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <h2>Thank you, I'll get back to you as soon as possible!</h2>
            </div>
        </Layout>
    );
}