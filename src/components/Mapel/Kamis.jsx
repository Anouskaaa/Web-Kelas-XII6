const Kamis = () => {
	return (
		<>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Bahasa Indonesia</div>
				<div className="flex justify-center items-center text-sm">06.45-07.45</div>
			</div>
			<div
				className=" flex justify-between py-[0.50rem] w-72 px-3 opacity-60"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Fisika</div>
				<div className="flex justify-center items-center text-sm">07.45-09.15</div>
			</div>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="700">
				<div className="w-[50%] text-base  font-medium">Istirahat</div>
				<div className="flex justify-center items-center text-sm">09.15-10.00</div>
			</div>
			<div
				className=" border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="800">
				<div className="w-[50%] text-base  font-medium">Sejarah</div>
				<div className="flex justify-center items-center text-sm">10.00-11.00</div>
			</div>
			<div
				className=" border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="800">
				<div className="w-[50%] text-base  font-medium">Biologi</div>
				<div className="flex justify-center items-center text-sm">11.00-12.30</div>
			</div>

			{/* <div
				className="border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="1000">
				<div className="w-[50%] text-base font-medium"></div>
				<div className="flex justify-center items-center text-sm">13.40-15.00</div>
			</div> */}
		</>
	)
}

export default Kamis
