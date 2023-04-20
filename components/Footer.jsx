
export default ()=>{
    return (
    <footer className=" bg-zinc-800 mx-auto text-center text-[#8a8a8e] py-5 bottom-0">
       <img alt="logo" className=" w-3/5 mx-auto" src="../logo.png" />
       <nav className="w-5/6 mx-auto">
          <ul className="flex text-gray-300 flex-wrap justify-around pt-3 text-sm">
            <li><a href="/return-policy">Return Policy</a></li>
            <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
            <li><a href="/data-safety">Data Safety</a></li>
            <li><a href="/about">About</a></li>
          </ul>
       </nav>
       <p className="text-sm">Developed & Maintained By <a target={"_blank"} href="https://instagram.com/punit_not_puneet" className=" text-gray-500 underline">Punit Kumar Saini</a></p>
       <p className="text-sm"> &copy; 2022-{Date().slice(11,15)}, Waxen-India.com, Inc </p>
    </footer>)
}