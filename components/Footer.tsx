import './globals.css'
import Link from 'next/link';
import { FaHome, FaUpload, FaRegListAlt } from 'react-icons/fa';
export default function Footer() {

    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <div className="container mx-auto flex justify-around">
                {/* 첫 번째 클릭 영역 */}
                <Link href="/">
                    <div className="clickable-area flex flex-col items-center text-indigo cursor-pointer hover:text-indigo-500">
                        <FaHome className="icon mt-4" size={24} />
                        <div>메인화면</div>
                    </div>
                </Link>

                {/* 두 번째 클릭 영역 */}
                <Link href="/inputform">
                    <div className="clickable-area flex flex-col items-center text-indigo cursor-pointer hover:text-indigo-500">
                        <FaUpload className="icon mt-4" size={24} />
                        <div>업로드</div>
                    </div>
                </Link>

                {/* 세 번째 클릭 영역 */}
                <Link href="/result">
                    <div className="clickable-area flex flex-col items-center text-indigo cursor-pointer hover:text-indigo-500">
                        <FaRegListAlt className="icon mt-4" size={24} />
                        <div>업로드리스트</div>
                    </div>
                </Link>
            </div>
            {/* <div className="flex flex-col">
                <hr className="w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <strong className="hover:underline">SK텔레콤 수도권 Infra 강북 Acccess Infra팀 양상민(ysm@sk.com)</strong><br /> All Rights Reserved.</span>
            </div> */}
        </footer>
    )
}