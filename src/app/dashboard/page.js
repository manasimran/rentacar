'use client'
import AreaChart from "@/src/components/Area Chart";
import BarAnimation from "@/src/components/BarChart/page";
import PieActiveArc from "@/src/components/Pie Chart/page";


export default function ProtectedPage() {
  


  return (
    <>

      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" class="fixed top-0 left-0 z-40  rounded-2xl w-64  transition-transform -translate-x-full mt-20 sm:translate-x-0 dark:text-white text-black" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <hr />
            <li>
              <a href="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="w-5 h-5 text-gray-500 transition animate-bounce duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ms-3 animate-bounce">DashBoard</span>
              </a>
            </li>
            <hr/>
            <li>
              <a href="/dashboard/cars" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="w-5 h-5 text-gray-500 transition animate-bounce duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ms-3 animate-bounce">Cars</span>
              </a>
            </li>
            <hr />
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 animate-bounce transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap animate-bounce">Inbox</span>
                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
              </a>
            </li>
            <hr />
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 animate-bounce transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap animate-bounce">Users</span>
              </a>
            </li>
            <hr />
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 animate-bounce text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap animate-bounce">Cars</span>
              </a>
            </li>

            <hr />
            {/*
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
         <hr/>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li>
         <hr/> */}
          </ul>
        </div>
      </aside>
      <div>


      </div>
      <div class="flex flex-col animate-fade-in-right ml-[235px]">
        <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 animate-fade-in">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div
              class="rounded-lg border bg-card shadow-sm bg-gradient-to-r from-[#7928CA] to-[#FF0080] text-white animate-scale-up"
              data-v0-t="card"
            >
              <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
                <div class="text-sm font-medium">Total Users</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5 animate-bounce"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div class="p-6 text-3xl font-semibold">1,234</div>
            </div>
            <div
              class="rounded-lg border bg-card shadow-sm bg-gradient-to-r from-[#0072B1] to-[#00D1FF] text-white animate-scale-up"
              data-v0-t="card"
            >
              <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
                <div class="text-sm font-medium">Total Cars</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5 animate-bounce"
                >
                  <path d="m7.5 4.27 9 5.15"></path>
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                  <path d="m3.3 7 8.7 5 8.7-5"></path>
                  <path d="M12 22V12"></path>
                </svg>
              </div>
              <div class="p-6 text-3xl font-semibold">456</div>
            </div>
            <div
              class="rounded-lg border bg-card shadow-sm bg-gradient-to-r from-[#F44336] to-[#E91E63] text-white animate-scale-up"
              data-v0-t="card"
            >
              <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
                <div class="text-sm font-medium">Total Orders</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5 animate-bounce"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </div>
              <div class="p-6 text-3xl font-semibold">789</div>
            </div>
            <div
              class="rounded-lg border bg-card shadow-sm bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] text-white animate-scale-up"
              data-v0-t="card"
            >
              <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
                <div class="text-sm font-medium">Total Revenue</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5 animate-bounce"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div class="p-6 text-3xl font-semibold">$12,345</div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            <div className="rounded-lg border bg-gradient-to-r from-[#7928CA] to-[#FF0080] text-white dark:border-white border-black bg-card text-card-foreground shadow-sm animate-fade-in-up" data-v0-t="card">
              <AreaChart />
            </div>
            <div class="rounded-lg border bg-card bg-gradient-to-r from-[#F44336] to-[#E91E63] dark:border-white border-black text-card-foreground shadow-sm animate-fade-in-up" data-v0-t="card">
              <BarAnimation />
            </div>
            <div class="rounded-lg border bg-card bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] dark:border-white border-black text-card-foreground shadow-sm animate-fade-in-up" data-v0-t="card">
              <PieActiveArc />
            </div>
          </div>
          <div>
            <div class="rounded-lg border dark:border-white border-black bg-card text-card-foreground shadow-sm animate-fade-in" data-v0-t="card">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight dark:text-white text-black animate-bounce ">Recent Orders</h3>
              </div>
              <div class="p-6">
                <div class="relative w-full overflow-auto">
                  <table class="w-full caption-bottom text-sm">
                    <thead class="[&amp;_tr]:border-b">
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 dark:text-white text-black">
                          Order
                        </th>
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 dark:text-white text-black">
                          Customer
                        </th>
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 dark:text-white text-black">
                          Date
                        </th>
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 dark:text-white text-black">
                          Amount
                        </th>
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 dark:text-white text-black">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody class="[&amp;_tr:last-child]:border-0 dark:text-white text-black">
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted animate-fade-in-up">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">#3210</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Olivia Martin</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">February 20, 2022</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$42.25</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            Paid
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted animate-fade-in-up">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">#3209</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Ava Johnson</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">January 5, 2022</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$74.99</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            Paid
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted animate-fade-in-up">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">#3204</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Michael Johnson</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">August 3, 2021</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$64.75</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            Unfulfilled
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted animate-fade-in-up">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">#3203</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Lisa Anderson</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">July 15, 2021</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$34.50</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            Paid
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted animate-fade-in-up">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">#3202</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Samantha Green</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">June 5, 2021</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$89.99</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            Paid
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

    </>
  );
}
