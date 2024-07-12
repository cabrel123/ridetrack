var routes = [
  // Index page
  {
    path: "/",
    componentUrl: "./pages/welcome.html",
    name: "welcome",
  },
  // Register page
  {
    path: "/register/",
    componentUrl: "./pages/register.html",
    name: "register",
  },
  // Login page
  {
    path: "/login/",
    componentUrl: "./pages/login.html",
    name: "login",
  },
  // Verify phone page
  {
    path: "/verify-phone/",
    componentUrl: "./pages/verify-phone.html",
    name: "verify-phone",
  },
  // Verify phone page
  {
    path: "/verify-phone2/",
    componentUrl: "./pages/verify-phone2.html",
    name: "verify-phone2",
  },
  // Verify phone page
  {
    path: "/verify-phone3/",
    componentUrl: "./pages/verify-phone3.html",
    name: "verify-phone3",
  },
  // Forgot password page
  {
    path: "/forgot-password/",
    componentUrl: "./pages/forgot-password.html",
    name: "forgot-password",
  },
  // Change password page
  {
    path: "/change-password/",
    componentUrl: "./pages/change-password.html",
    name: "change-password",
  },
  // Home page
  {
    path: "/home/",
    componentUrl: "./pages/home.html",
    name: "home",
  },
  // Settings page
  {
    path: "/settings/",
    componentUrl: "./pages/settings.html",
    name: "settings",
  },
  // Profile page
  {
    path: "/profile/",
    componentUrl: "./pages/profile.html",
    name: "profile",
  },
  // Edit Profile page
  {
    path: "/edit-profile/",
    componentUrl: "./pages/edit-profile.html",
    name: "edit-profile",
  },
  // My contact page
  {
    path: "/my-contact/",
    componentUrl: "./pages/my-contact.html",
    name: "my-contact",
  },
  // Add contact page
  {
    path: "/add-contact/",
    componentUrl: "./pages/add-contact.html",
    name: "add-contact",
  },
  // Subscription page
  {
    path: "/subscription/",
    componentUrl: "./pages/subscription.html",
    name: "subscription",
  },
  // History page
  {
    path: "/history/",
    componentUrl: "./pages/history.html",
    name: "history",
  },
  // Alert page
  {
    path: "/alert/",
    componentUrl: "./pages/alert.html",
    name: "alert",
  },
  // Check registration page
  {
    path: "/check-registration/",
    componentUrl: "./pages/check-registration.html",
    name: "check-registration",
  },
  // enrollement1 page
  {
    path: "/enrollement1/",
    componentUrl: "./pages/enrollement1.html",
    name: "enrollement1",
  },
  // enrollement1 page
  {
    path: "/enrollement2/",
    componentUrl: "./pages/enrollement2.html",
    name: "enrollement2",
  },
  // enrollement3 page
  {
    path: "/enrollement3/",
    componentUrl: "./pages/enrollement3.html",
    name: "enrollement3",
  },
  // identification1 page
  {
    path: "/identification1/",
    componentUrl: "./pages/identification1.html",
    name: "identification1",
  },
  // identification2 page
  {
    path: "/identification2/",
    componentUrl: "./pages/identification2.html",
    name: "identification2",
  },
  // driver-profile page
  {
    path: "/driver-profile/",
    componentUrl: "./pages/driver-profile.html",
    name: "driver-profile",
  },
  // rating page
  {
    path: "/rating/:driver/",
    componentUrl: "./pages/rating.html",
    name: "rating",
  },
  // mercenary page
  {
    path: "/my-subdriver/",
    componentUrl: "./pages/my-subdriver.html",
    name: "my-subdriver",
  },
  // alert history page
  {
    path: "/alert-history/",
    componentUrl: "./pages/alert-history.html",
    name: "alert-history",
  },
  // About page
  {
    path: "/about/",
    url: "./pages/about.html",
    name: "about",
  },
  // CGU page
  {
    path: "/cgu/",
    url: "./pages/cgu.html",
    name: "cgu",
  },
  // successfull-account page
  {
    path: "/successfull-account/",
    componentUrl: "./pages/successfull-account.html",
    name: "successfull-account",
  },
  // successfull-account page
  {
    path: "/successfull-account2/",
    componentUrl: "./pages/successfull-account2.html",
    name: "successfull-account2",
  },
  // successfull-account page
  {
    path: "/successfull-account3/",
    componentUrl: "./pages/successfull-account3.html",
    name: "successfull-account3",
  },
  // register-2 page
  {
    path: "/register-2/",
    componentUrl: "./pages/register-2.html",
    name: "register-2",
  },
  // profile-photo page
  {
    path: "/profile-photo/",
    componentUrl: "./pages/profile-photo.html",
    name: "profile-photo",
  },
  // Contact page
  {
    path: "/contact/",
    url: "./pages/contact.html",
    name: "contact",
  },
  // Right Panel pages
  {
    path: "/panel-right-1/",
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner sliding">
            <div class="left">
              <a  class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 1</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    path: "/panel-right-2/",
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner sliding">
            <div class="left">
              <a  class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 2</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 2</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: "(.*)",
    url: "./pages/404.html",
  },
];
