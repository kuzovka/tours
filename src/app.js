import { format, differenceInDays } from "date-fns"
import { ru } from "date-fns/locale"

async function getTours() {
    const response = await fetch(
        "https://www.bit-by-bit.ru/api/student-projects/tours"
    )
    const tours = await response.json()

    tours.forEach((tour) => {
        const duration = differenceInDays(
            new Date(tour.endTime),
            new Date(tour.startTime)
        )
        document.getElementById("container").innerHTML += `
        <div class="bg-white shadow-lg rounded-xl mt-8 p-4">
                                 <div>

                             <div class="h-12">
                             <a class="font-semibold text-yellow-600 hover:underline">${
                                 tour.hotelName
                             }</a>
                             </div>
                             <p
                                 class="font-normal text-sky-900 mb-2 mt-2"
                             >
                             ${tour.city ? `<a href="#">${tour.city},</a>` : ""}
                                 <a href="#">${tour.country}</a>
                             </p>
                        </div>
                         <div>
                             <img
                                 class="h-72 w-full mt-4"
                                 src="${tour.image}"
                                 alt=""
                             />
                        </div>
                        <div class="my-5 text-sky-800 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

                        <p class="ml-3"> ${duration} дней </p>
                        </div>
                         <div class="my-5 text-sky-800 flex items-center">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                               </svg>
                             <span class="ml-3">${format(
                                 new Date(tour.startTime),
                                 "dd.MM.yyyy",
                                 { locale: ru }
                             )}</span>
                             <span class="mr-1 ml-1"> - </span>
                             <span> ${format(
                                 new Date(tour.endTime),
                                 "dd.MM.yyyy",
                                 { locale: ru }
                             )}</span>

                        </div>

                         <div>
                             <p class="font-normal text-gray-800 text-m">
                             Стоимость тура: ${tour.price.toLocaleString("ru", {
                                 style: "currency",
                                 currency: "rub",
                                 currencyDisplay: "code",
                                 minimumFractionDigits: 0
                             })}
                             </p>
                             <div class="flex items-center mt-3">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-yellow-500 mr-3">
  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
</svg>

                                <p class="font-normal text-gray-800 text-m">
                                ${tour.rating}
                                </p>
                             </div>
                         </div>
                         <div class="btn-container">
                             <button class="btn">Подробнее</button>
                             <button class="btn">Добавить в избранное</button>
                         </div>
                    </div>
        `
    })
}

getTours()
