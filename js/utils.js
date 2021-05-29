export let name = document.getElementById("name");
export let username = document.getElementById("username");
export let bio = document.getElementById("bio");
export let image = document.getElementById("image");
export let repos = document.getElementById("repos");
export let menu = document.getElementById("menu");
export let toggle = document.getElementById("toggle");
export let toggleOff = document.getElementById("toggle-off");
export let query = document.getElementById("search");
export let formIndex = document.getElementById("form-index");
export let formProfile = document.getElementById("form-profile");
export let formProfileMenu = document.getElementById("form-profile-menu");
export let page = window.location.pathname;
export const setResult = (query) =>
  sessionStorage.setItem("query", JSON.stringify(query));
export const result = JSON.parse(sessionStorage.getItem("query"));

const formatDate = (date) => {
  let now = Math.round((Date.now() - new Date(date).getTime()) / 1000);

  let minute = 60,
    hour = minute * 60,
    day = hour * 24,
    month = day * 31,
    year = day * 365;

  if (now < hour) return "a few minutes ago";
  if (now >= hour && now < hour * 2) return "an hour ago";
  if (now >= hour && now < day) return `${Math.floor(now / hour)} hours ago`;
  if (now >= day && now < day * 2) return "a day ago";
  if (now >= day * 2 && now < day * 31)
    return `${Math.floor(now / day)} days ago`;

  if (now >= month && now < month * 2) return "a month ago";
  if (now >= month * 2) return `${Math.floor(now / month)} months ago`;
};

const repo = ({
  name,
  url,
  description,
  language,
  color,
  fork,
  star,
  license,
  issue,
  pullRequest,
  updatedAt,
}) => `
 <div class="repo w-full py-1 md:py-2 flex flex-col"> 
<div class="w-4/5 md:w-3/5 flex flex-col gap-0.5">
<div class="">
<!-- Name/URL -->
<a class="text-sm font-6 break-all" target="_blank" href="${url}">${name}</a>
</div>
<div class="w-7/10">
<!-- Description -->
<p class="text-base ${description ? "" : "hidden"}">
${description}
</p>
</div>
<div class="w-full my-0.5 flex flex-wrap gap-x-1 gap-y-0.2">
<!-- Tags -->
<div class="items-center gap-0.2 ${language ? "flex" : "hidden"}">
<!-- Language -->
<span class="rounded-1/2 ${
  color ? "" : "hidden"
}" style="background-color: ${color}; width: 12px; height: 12px;">
<!-- Colour -->
</span>
<span class="${language ? "" : "hidden"}">
<!-- Name -->
${language}
</span>
</div>
<div class="items-center gap-0.2 ${license ? "flex" : "hidden"}">
<!-- License -->
<svg fill="currentColor"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 16 16"
width="16"
height="16"
>
<path
fill-rule="evenodd"
d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
></path>
</svg>
<span class="">${license}</span>
</div>
<div class="items-center gap-0.2 ${fork ? "flex" : "hidden"}">
<!-- Fork -->
<svg fill="currentColor"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 16 16"
width="16"
height="16"
>
<path
fill-rule="evenodd"
d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
></path>
</svg>
<span class="">${fork}</span>
</div>
<div class="items-center gap-0.2 ${star ? "flex" : "hidden"}">
<!-- Star -->
<svg fill="currentColor"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 16 16"
width="16"
height="16"
>
<path
fill-rule="evenodd"
d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
></path>
</svg>
<span class="">${star}</span>
</div>
<div class="items-center gap-0.2 ${issue ? "flex" : "hidden"}">
<!-- Issue -->
<svg fill="currentColor" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
</svg>
<span class="">${issue}</span>
</div>
<div class="items-center gap-0.2 ${pullRequest ? "flex" : "hidden"}">
<!-- Pull Request -->
<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>
<span>${pullRequest}</span>
</div>
<div class="items-center gap-0.2 ${updatedAt ? "flex" : "hidden"}">
<!-- UpdatedAt -->
<span class="">
Updated ${formatDate(updatedAt)}
</span>
</div>
</div>
</div>
`;

export const handleDisplay = () => {
  let { user } = result.data;
  name.innerText = user.name;
  username.innerText = user.login;
  image.src = user.avatarUrl;
  bio.innerText = user.bio;

  user.repositories.edges.map(({ node }) =>
    repos.insertAdjacentHTML(
      "beforeend",
      repo({
        name: node.name ? node.name : false,
        url: node.url ? node.url : false,
        description: node.description ? node.description : false,
        language: node.primaryLanguage?.name
          ? node.primaryLanguage.name
          : false,
        color: node.primaryLanguage?.color ? node.primaryLanguage.color : false,
        fork: node.fork ? node?.fork : false,
        star: node.stargazerCount ? node.stargazerCount : false,
        license: node.licenseInfo?.name ? node.licenseInfo.name : false,
        issue: node.issues?.totalCount ? node.issues.totalCount : false,
        pullRequest: node.pullRequests?.totalCount
          ? node.pullRequests.totalCount
          : false,
        updatedAt: node.updatedAt ? node.updatedAt : false,
      })
    )
  );
};
