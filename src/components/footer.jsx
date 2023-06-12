export const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                        <a className=" no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                            {/*// <!--Icon from: http://www.potlabicons.com/ --> ArchNEO*/}
                        </a>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6 px-4">Links</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/faq"
                                   className="no-underline hover:underline text-gray-800 hover:text-black-500 px-4">FAQ</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/help"
                                   className="no-underline hover:underline text-gray-800 hover:text-black-500 px-4">Help</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/support"
                                   className="no-underline hover:underline text-gray-800 hover:text-black-500 px-4">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/terms"
                                   className="no-underline hover:underline text-gray-800 hover:text-black-500">Terms</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/privacy"
                                   className="no-underline hover:underline text-gray-800 hover:text-black-500">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Social</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-black-500">Facebook</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-black-500">Linkedin</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-black-500">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Company</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline hover:underline text-gray-800 hover:text-black-500">Official
                                    Blog</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/about"
                                   className="no-underline hover:underline text-gray-800 hover:text-black-500">About
                                    Us</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/contact"
                                   className="no-underline hover:underline text-gray-800 hover:text-black-500">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}