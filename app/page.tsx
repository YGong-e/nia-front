import Image from 'next/image'
import Link from 'next/link'
// 홈페이지 메인 부분 
export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">NIA 측정 결과 입력<br/> 시스템</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">SK텔레콤 수도권 Infra NIA 측정 결과 입력</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/inputform" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">입력하러 가기</a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
