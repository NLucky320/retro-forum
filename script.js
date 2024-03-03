// API
// LatestPosts: - https://openapi.programming-hero.com/api/retro-forum/latest-posts

// AllPosts: - https://openapi.programming-hero.com/api/retro-forum/posts

// PostSearchByQuery
// PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=categoryName

// Example
// PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=coding

let count = 0;
const postContainer = document.getElementById("post-container");
const fetchPosts = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
  const postData = data.posts;
  console.log(postData);
  displayPosts(postData);
  // toggleLoadingSpinner(false, 2000);
};

const displayPosts = (postData) => {
  postContainer.textContent = "";
  postData.forEach((post) => {
    // console.log(post);
    const indicatorColorClass = post.isActive ? "bg-[green]" : "bg-[red]";
    const newPostContainer = document.createElement("div");
    newPostContainer.innerHTML = `
     <div id="loading-spinner" class="text-center my-40 hidden">
                        <span class="loading loading-spinner text-primary"></span>
                    </div>
 <div>
 <div class="flex flex-col lg:flex-row gap-6 bg-[#12132D0D]  rounded-[24px] p-6">
 
                            <div class="indicator ">
                            <span class="indicator-item badge  ${indicatorColorClass}" ></span>
                            <div class="h-[72px
                            ] w-[72px] object-cover ">
                                <img src="${post.image}" alt="">
                            </div>
                            </div>
                            <div class="space-y-4">
                                <div class="flex gap-4 text-[#12132DCC] text-[14px] font-medium ">
                                    <div>
                                        <p class=""># ${post.category}</p>
                                    </div>
                                    <div>
                                        <p>Author : ${post.author.name}</p>
                                    </div>
                                </div>
                                <h2 class="text-[#12132D] font-bold text-[20px]">${post.title}
                                </h2>
                                <p class="text-[#12132D99] font-inter">${post.description}</p>
                                <hr>
                                <div class="flex justify-between lg:w-[500px]">
                                    <div class="flex justify-between gap-4">
                                        <div class="flex justify-between gap-2">
                                            <div>
                                                <img src="./icon/tabler-icon-message-2.svg" alt="">
                                            </div>
                                            <div>
                                                <p>${post.comment_count}</p>
                                            </div>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                            <div>
                                                <img src="./icon/tabler-icon-eye.svg" alt="">
                                            </div>
                                            <div>
                                                <p>${post.view_count}</p>
                                            </div>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                            <div>
                                                <img src="./icon/tabler-icon-clock-hour-9.svg" alt="">
                                            </div>
                                            <div>
                                                <p>${post.posted_time} min</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-end">
                                        <button class="add-btn"><img src="./icon/email 1.svg" alt=""></button>
                                    </div>
                                </div>
                            </div>
                        </div>
 </div>
`;
    postContainer.appendChild(newPostContainer);
    // Add click event listener to the button
    const addButton = newPostContainer.querySelector(".add-btn");
    if (addButton) {
      addButton.addEventListener(
        "click",
        createClickListener(post, newPostContainer)
      );
    }
  });
};
const fetchSearchPosts = async (categoryName) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`
  );
  const data = await response.json();
  const postData = data.posts;
  console.log(postData);
  displayPosts(postData);
};
// const displaySearchPosts = (searchPostData) => {
//   searchPostData.forEach((searchPost) => {
//     console.log(searchPost);
//     const indicatorColorClass = searchPost.isActive ? "bg-[green]" : "bg-[red]";
//     const postContainer = document.getElementById("post-container");
//     postContainer.textContent = "";

//     // console.log(post);

//     const newPostContainer = document.createElement("div");
//     newPostContainer.innerHTML = `

//  <div class="flex flex-col lg:flex-row gap-4 bg-[#12132D0D] hover:bg-[#797DFC] rounded-[24px] p-6">
//                             <div class="indicator ">
//                             <span class="indicator-item badge  ${indicatorColorClass}" ></span>
//                             <div class="h-[72px
//                             ] w-[72px] object-cover ">
//                                 <img src="${searchPost.image}" alt="">
//                             </div>
//                             </div>
//                             <div class="space-y-4">
//                                 <div class="flex gap-4 text-[#12132DCC] text-[14px] font-medium ">
//                                     <div>
//                                         <p class="">${searchPost.category}</p>
//                                     </div>
//                                     <div>
//                                         <p>Author : ${searchPost.author.name}</p>
//                                     </div>
//                                 </div>
//                                 <h2 class="text-[#12132D] font-bold text-[20px]"> ${searchPost.title}
//                                 </h2>
//                                 <p class="text-[#12132D99] font-inter">${searchPost.description}</p>
//                                 <hr>
//                                 <div class="flex justify-between">
//                                     <div class="flex justify-between gap-4">
//                                         <div class="flex justify-between gap-2">
//                                             <div>
//                                                 <img src="./icon/tabler-icon-message-2.svg" alt="">
//                                             </div>
//                                             <div>
//                                                 <p>${searchPost.comment_count}</p>
//                                             </div>
//                                         </div>
//                                         <div class="flex justify-between gap-2">
//                                             <div>
//                                                 <img src="./icon/tabler-icon-eye.svg" alt="">
//                                             </div>
//                                             <div>
//                                                 <p>${searchPost.view_count}</p>
//                                             </div>
//                                         </div>
//                                         <div class="flex justify-between gap-2">
//                                             <div>
//                                                 <img src="./icon/tabler-icon-clock-hour-9.svg" alt="">
//                                             </div>
//                                             <div>
//                                                 <p>${searchPost.posted_time} min</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="flex justify-end">
//                                         <button class="add-btn"><img src="./icon/email 1.svg" alt=""></button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
// `;
//     // Add click event listener to the button
//     const addButton = newPostContainer.querySelector(".add-btn");
//     if (addButton) {
//       addButton.addEventListener("click", createClickListener(searchPost));
//     }
//   });
//   toggleLoadingSpinner(false);
// };

// Function to handle the click event, capturing the post data
function createClickListener(post, newPostContainer) {
  let selectedPostContainer = null;

  return function () {
    count++;
    document.getElementById("count").innerText = count;

    // Remove background color from the previously selected post container
    if (selectedPostContainer) {
      selectedPostContainer.style.backgroundColor = "";
    }

    // Add code to change the background color here
    newPostContainer.style.backgroundColor = "#797DFC1A";
    newPostContainer.style.borderColor = "#797DFC";
    newPostContainer.style.borderRadius = "24px";
    newPostContainer.style.borderWidth = "1px";

    // Update the selected post container
    selectedPostContainer = newPostContainer;
    const clickSection = document.getElementById("click-section");
    const clickPostContainer = document.createElement("div");
    clickPostContainer.innerHTML = `
    
    <div class="bg-[#FFFFFF] rounded-[16px] flex justify-between p-4 gap-4">
        <h5 class="font-semibold text-[#12132D] lg:w-[200px] ">${post.title}</h5>
        <div class="flex text-[#12132D99] items-center text-center gap-2">
            <div class="font-bold">
                <img class="text-[24px]" src="./icon/tabler-icon-eye.svg" alt="">
            </div>
            <p>${post.view_count}</p>
        </div>
    </div>
    `;
    clickSection.appendChild(clickPostContainer);
  };
}

const fetchLatestPosts = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await response.json();
  const latestPostData = data;
  // console.log(latestPostData);
  displayLatestPost(latestPostData);
};
const displayLatestPost = (latestPostData) => {
  latestPostData.forEach((latestPost) => {
    // console.log(latestPost);

    const latestPostContainer = document.getElementById(
      "latest-post-container"
    );
    const newLatestPostContainer = document.createElement("div");
    newLatestPostContainer.innerHTML = `
      <div class="card lg:max-w-[380px] md:h-[560px] bg-base-100 shadow-xl border-[#12132D26]">
                        <div class="px-6 pt-8">
                            <img class="rounded-xl" src="${
                              latestPost.cover_image
                            }" alt=""
                                />

                        </div>
                        <div class="card-body space-y-2">
                            <div class="flex justify-between text-[#12132D99] gap-2">
                                <img src="./icon/date.svg" alt="">
                                <p>${
                                  latestPost.author?.posted_date ||
                                  "No publish date"
                                }</p>
                            </div>
                            <h2 class="text-[#12132D] text-[18px] font-extrabold">${
                              latestPost.title
                            }</h2>
                            <p class="text-[#12132D99] ">${
                              latestPost.description
                            }</p>
                            <div class="flex justify-between">
                                <div class="max-w-[44px]">
                                    <img class="rounded-full" src="${
                                      latestPost.profile_image
                                    }" alt="">
                                </div>
                                <div>
                                    <p class="text-[#12132D] font-bold">${
                                      latestPost.author?.name
                                    }</p>
                                    <p class="text-[#12132D99] font-normal">${
                                      latestPost.author?.designation ||
                                      "Unknown"
                                    }</p>
                                </div>
                            </div>
                        </div>
                    </div>
    `;
    latestPostContainer.appendChild(newLatestPostContainer);
  });
};

//handle search button

const handleSearch = () => {
  postContainer.textContent = "";
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const categoryName = searchField.value;

  // Delay the execution of fetchSearchPosts by 2 seconds
  setTimeout(() => {
    fetchSearchPosts(categoryName);
    toggleLoadingSpinner(false); // Hide the loading spinner after fetching data
  }, 2000);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
    // Set a timeout to hide the loading spinner after 2 seconds
    setTimeout(() => {
      loadingSpinner.classList.add("hidden");
    }, 2000);
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

fetchLatestPosts();

fetchPosts();
