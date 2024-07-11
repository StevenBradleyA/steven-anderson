const LoadingSquareSpinner = () => {
    return (
        <div class="w-full h-full relative">
            <div class="rotating-box-back absolute top-[45%] left-[45%]  w-[70px] h-[70px] border-4 border-white/50 bg-[#1b2735]"></div>
            <div class="rotating-box-front absolute top-[45%] left-[45%]  w-[70px] h-[70px] border-4 border-stevenBlue bg-[#1b2735]"></div>
        </div>
    );
};

export default LoadingSquareSpinner;
