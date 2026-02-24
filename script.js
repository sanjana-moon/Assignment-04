let interviewList = [];
let rejectList = [];
let currentStatus = 'all';


let total = document.getElementById("total");
let interviewCount = document.getElementById("interview-count");
let rejectCount = document.getElementById("reject-count");
let totalNumber = document.getElementById("total-num");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectFilterBtn = document.getElementById("reject-filter-btn");

const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section')

const allCards = document.getElementById('all-cards');

function calculationCount() {
    total.innerText = allCards.children.length;
    totalNumber.innerText = total.innerText;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
}

calculationCount();


function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-blue-700', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-700', 'text-white');
    rejectFilterBtn.classList.remove('bg-blue-700', 'text-white');

    const selected = document.getElementById(id);
    selected.classList.add('bg-blue-700', 'text-white');
    currentStatus = id

    if (id == 'interview-filter-btn') {
        allCards.classList.add('hidden');
        totalNumber.innerText = `${interviewCount.innerText} of ${total.innerText}`;
        filterSection.classList.remove('hidden');
        interviewSection()
    }
    else if (id == 'all-filter-btn') {
        allCards.classList.remove('hidden');
        totalNumber.innerText = total.innerText;
        filterSection.classList.add('hidden')
    }
    else if (id == 'reject-filter-btn') {
        allCards.classList.add('hidden');
        totalNumber.innerText = `${rejectCount.innerText} of ${total.innerText}`;
        filterSection.classList.remove('hidden');
        rejectSection()
    }
}

mainContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parent = event.target.closest('.card-container');
        const companyName = parent.querySelector('.company-name').innerText;
        const jobTitle = parent.querySelector('.job-title').innerText;
        const jobMeta = parent.querySelector('.job-meta').innerText;
        const jobStatus = parent.querySelector('.job-status').innerText;
        const jobDetails = parent.querySelector('.job-details').innerText;

        parent.classList.remove('border-red-500');
        parent.classList.add('border-l-4', 'border-green-500');

        const status = parent.querySelector('.job-status');
        status.innerText = 'Interview';
        status.classList.remove('bg-red-50', 'text-red-900');
        status.classList.add('bg-green-50', 'text-green-900');

        const cardInfo = {
            companyName,
            jobTitle,
            jobMeta,
            jobStatus: 'Interview',
            jobDetails
        }


        const companyAdded = interviewList.find(item => item.companyName == cardInfo.companyName)
        if (!companyAdded) {
            interviewList.push(cardInfo);
        }

        rejectList = rejectList.filter(item => item.companyName != cardInfo.companyName)

        if (currentStatus == 'reject-filter-btn') {
            rejectSection();
        }
        calculationCount();

    }
    else if (event.target.classList.contains('reject-btn')) {
        const parent = event.target.closest('.card-container');
        const companyName = parent.querySelector('.company-name').innerText;
        const jobTitle = parent.querySelector('.job-title').innerText;
        const jobMeta = parent.querySelector('.job-meta').innerText;
        const jobStatus = parent.querySelector('.job-status').innerText;
        const jobDetails = parent.querySelector('.job-details').innerText;

        parent.classList.remove('border-green-500')
        parent.classList.add('border-l-4', 'border-red-500')


        const status = parent.querySelector('.job-status');
        status.innerText = 'Rejected';
        status.classList.remove('bg-green-50', 'text-green-900');
        status.classList.add('bg-red-50', 'text-red-900');
        const cardInfo = {
            companyName,
            jobTitle,
            jobMeta,
            jobStatus: 'Rejected',
            jobDetails
        }

        const companyAdded = rejectList.find(item => item.companyName == cardInfo.companyName)

        if (!companyAdded) {
            rejectList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

        if (currentStatus == 'interview-filter-btn') {
            interviewSection();
        }
        calculationCount();
    }

    else if (event.target.closest('.btn-circle')) {
        const card = event.target.closest('.card-container');

        if (card) {
            const companyName = card.querySelector('.company-name').innerText;

            rejectList = rejectList.filter(item => item.companyName !== companyName);
            interviewList = interviewList.filter(item => item.companyName !== companyName);

            const originalCards = allCards.querySelectorAll('.card-container');
            originalCards.forEach(originalCard => {
                const name = originalCard.querySelector('.company-name').innerText;
                if (name === companyName) {
                    originalCard.remove();
                }
            });
            card.remove();

            if (currentStatus === 'reject-filter-btn') {
                rejectSection();
            } else if (currentStatus === 'interview-filter-btn') {
                interviewSection();
            }

            calculationCount();
        }
    }

})

function interviewSection() {
    filterSection.innerHTML = '';
    if (interviewList.length === 0) {
        filterSection.innerHTML = `<div class="empty text-center bg-white px-[50px] py-[20px] rounded-lg my-4 lg:p-[130px]">
                <i class="fa-solid fa-file-lines text-9xl text-[#7DA8FF]"></i>
                <h2 class="text-2xl font-bold text-[#002C5C] mt-6 mb-1">No jobs Available</h2>
                <p class="text-[#323B49]">Check back soon for new job opportunities</p>
            </div>`
    }

    for (let interview of interviewList) {

        let div = document.createElement('div')
        div.className = 'card-container flex justify-between bg-white rounded-lg p-6 my-4 border-l-4 border-green-500';
        div.innerHTML = `<div>
                    <h2 class="company-name text-lg text-[#002C5C] font-bold">${interview.companyName}</h2>
                    <p class="job-title text-[#64748B]">${interview.jobTitle}</p>
                    <br>
                    <p class="job-meta text-[#64748B]">${interview.jobMeta}</p>
                    <br>
                    <p class="job-status px-4 py-2 rounded-lg bg-green-50 text-green-900 text-center w-[132px]">${interview.jobStatus}</p>
                    <p class="job-details text-[#323B49] mt-2">${interview.jobDetails}</p>
                    <br>
                    <div class="gap-2">
                        <button class="interview-btn btn btn-outline btn-success">Interview</button>
                        <button class="reject-btn btn btn-outline btn-error">Rejected</button>
                    </div>

                </div>
                <div>
                    <button class="btn btn-circle"><i class="fa-regular fa-trash-can"></i></button>
                </div>`
        filterSection.appendChild(div)
    }

}
function rejectSection() {
    filterSection.innerHTML = '';

    if (rejectList.length === 0) {
        filterSection.innerHTML = `<div class="empty text-center bg-white px-[50px] py-[20px] rounded-lg my-4 lg:p-[130px]">
                <i class="fa-solid fa-file-lines text-9xl text-[#7DA8FF]"></i>
                <h2 class="text-2xl font-bold text-[#002C5C] mt-6 mb-1">No jobs Available</h2>
                <p class="text-[#323B49]">Check back soon for new job opportunities</p>
            </div>`
    }


    for (let reject of rejectList) {

        let div = document.createElement('div')
        div.className = 'card-container flex justify-between bg-white rounded-lg p-6 my-4 border-l-4 border-red-500';
        div.innerHTML = `<div>
                    <h2 class="company-name text-lg text-[#002C5C] font-bold">${reject.companyName}</h2>
                    <p class="job-title text-[#64748B]">${reject.jobTitle}</p>
                    <br>
                    <p class="job-meta text-[#64748B]">${reject.jobMeta}</p>
                    <br>
                    <p class="job-status px-4 py-2 rounded-lg bg-red-50 text-red-900 text-center w-[132px]">${reject.jobStatus}</p>
                    <p class="job-details text-[#323B49] mt-2">${reject.jobDetails}</p>
                    <br>
                    <div class="gap-2">
                        <button class="interview-btn btn btn-outline btn-success">Interview</button>
                        <button class="reject-btn btn btn-outline btn-error">Rejected</button>
                    </div>

                </div>
                <div>
                    <button class="btn btn-circle"><i class="fa-regular fa-trash-can"></i></button>
                </div>`
        filterSection.appendChild(div)
    }

}
