import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import ForgotPassword from '../pages/forgotPassword'
import ResetPassword from '../pages/resetPassword'
import NoMatch from '../pages/noMatch'
import ServiceWeb from '../pages/services/web'
import ServiceMobile from '../pages/services/mobile'
import ServiceUI from '../pages/services/ui'
import ServiceBranding from '../pages/services/branding'
import ServiceIllustration from '../pages/services/illustration'
import ServiceMarketing from '../pages/services/marketing'
import Hosting from '../pages/hosting'
import WPService from '../pages/wp-service'
import Portfolio from '../pages/portfolio'
import SinglePortfolio from '../pages/singlePortfolio'
import Features from '../pages/features'
import About from '../pages/about'
import Blog from '../pages/blog'
import Contact from '../pages/contact'
import Privacy from '../pages/privacy'
import AdminPages from '../pages/admin/adminPages'
import AdminHome from '../pages/admin/single-pages/home'
import AdminPortfolio from '../pages/admin/single-pages/portfolio'
import AdminAbout from '../pages/admin/single-pages/about'
import AdminContact from '../pages/admin/single-pages/contact'
import AdminFeature from '../pages/admin/single-pages/feature'
import AdminServicePage from '../pages/admin/single-pages/servicePage'
import AdminHosting from '../pages/admin/single-pages/hosting'
import AdminWPServiceServer from '../pages/admin/single-pages/wp-service'
import AdminBlog from '../pages/admin/adminBlog'
import AdminPrivacy from '../pages/admin/single-pages/privacy'
import AdminPortfolios from '../pages/admin/adminPortfolios'
import AdminReviews from '../pages/admin/adminReviews'
import AdminSinglePortfolio from '../pages/admin/single-pages/singlePortfolio'

const routes = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: Home
    },
    {
        path: '/no',
        exact: true,
        auth: false,
        component: Home
    },
    {
        path: '/login/:social',
        exact: false,
        auth: false,
        component: Home
    },
    {
        path: '/login',
        exact: true,
        auth: false,
        component: Login
    },
    {
        path: '/no/logginn',
        exact: true,
        auth: false,
        component: Login
    },
    {
        path: '/register',
        exact: true,
        auth: false,
        component: Register
    },
    {
        path: '/no/start-prosjekt',
        exact: true,
        auth: false,
        component: Register
    },
    {
        path: '/forgot-password',
        exact: true,
        auth: false,
        component: ForgotPassword
    },
    {
        path: '/reset-password/:token/:email',
        exact: true,
        auth: false,
        component: ResetPassword
    },
    {
        path: '/web-development',
        exact: true,
        auth: false,
        component: ServiceWeb
    },
    {
        path: '/no/webutvikling',
        exact: true,
        auth: false,
        component: ServiceWeb
    },
    {
        path: '/mobile-development',
        exact: true,
        auth: false,
        component: ServiceMobile
    },
    {
        path: '/no/mobilutvikling',
        exact: true,
        auth: false,
        component: ServiceMobile
    },
    {
        path: '/ui-ux-design',
        exact: true,
        auth: false,
        component: ServiceUI
    },
    {
        path: '/no/ui-ux-design',
        exact: true,
        auth: false,
        component: ServiceUI
    },
    {
        path: '/branding',
        exact: true,
        auth: false,
        component: ServiceBranding
    },
    {
        path: '/no/merkevarebygging',
        exact: true,
        auth: false,
        component: ServiceBranding
    },
    {
        path: '/illustration',
        exact: true,
        auth: false,
        component: ServiceIllustration
    },
    {
        path: '/no/illustrasjon',
        exact: true,
        auth: false,
        component: ServiceIllustration
    },
    {
        path: '/marketing-material',
        exact: true,
        auth: false,
        component: ServiceMarketing
    },
    {
        path: '/no/markedsføringsmateriell',
        exact: true,
        auth: false,
        component: ServiceMarketing
    },
    {
        path: '/managed-hosting',
        exact: true,
        auth: false,
        component: Hosting
    },
    {
        path: '/no/administrert-hosting',
        exact: true,
        auth: false,
        component: Hosting
    },
    {
        path: '/wordpress-service-agreement',
        exact: true,
        auth: false,
        component: WPService
    },
    {
        path: '/no/wordpress-serviceavtale',
        exact: true,
        auth: false,
        component: WPService
    },
    {
        path: '/portfolio',
        exact: true,
        auth: false,
        component: Portfolio
    },
    {
        path: '/no/portefolje',
        exact: true,
        auth: false,
        component: Portfolio
    },
    {
        path: '/features',
        exact: true,
        auth: false,
        component: Features
    },
    {
        path: '/no/funksjoner',
        exact: true,
        auth: false,
        component: Features
    },
    {
        path: '/about',
        exact: true,
        auth: false,
        component: About
    },
    {
        path: '/no/om-oss',
        exact: true,
        auth: false,
        component: About
    },
    {
        path: '/blog',
        exact: true,
        auth: false,
        component: Blog
    },
    {
        path: '/no/blogg',
        exact: true,
        auth: false,
        component: Blog
    },
    {
        path: '/contact',
        exact: true,
        auth: false,
        component: Contact
    },
    {
        path: '/no/kontakt',
        exact: true,
        auth: false,
        component: Contact
    },
    {
        path: '/privacy',
        exact: true,
        auth: false,
        component: Privacy
    },
    {
        path: '/no/personvern',
        exact: true,
        auth: false,
        component: Privacy
    },
    {
        path: '/data-processor',
        exact: true,
        auth: false,
        component: Privacy
    },
    {
        path: '/no/databehandler',
        exact: true,
        auth: false,
        component: Privacy
    },
    {
        path: '/terms',
        exact: true,
        auth: false,
        component: Privacy
    },
    {
        path: '/no/vilkar',
        exact: true,
        auth: false,
        component: Privacy
    },
    {
        path: '/confidentiality',
        exact: true,
        auth: false,
        component: Privacy
    },
    {
        path: '/no/konfidensialitet',
        exact: true,
        auth: false,
        component: Privacy
    },
    {
        path: '/admin/pages',
        exact: true,
        admin: true,
        component: AdminPages
    },
    {
        path: '/admin/blog',
        exact: true,
        admin: true,
        component: AdminBlog
    },
    {
        path: '/admin/portfolio',
        exact: true,
        admin: true,
        component: AdminPortfolios
    },
    {
        path: '/admin/reviews',
        exact: true,
        admin: true,
        component: AdminReviews
    },
    {
        path: '/admin/single-page/home',
        exact: true,
        admin: true,
        component: AdminHome
    },
    {
        path: '/admin/single-page/portfolio',
        exact: true,
        admin: true,
        component: AdminPortfolio
    },
    {
        path: '/admin/single-page/single_portfolio',
        exact: true,
        admin: true,
        component: AdminSinglePortfolio
    },
    {
        path: '/admin/single-page/about',
        exact: true,
        admin: true,
        component: AdminAbout
    },
    {
        path: '/admin/single-page/contact',
        exact: true,
        admin: true,
        component: AdminContact
    },
    {
        path: '/admin/single-page/features',
        exact: true,
        admin: true,
        component: AdminFeature
    },
    {
        path: '/admin/single-page/service-web',
        exact: true,
        admin: true,
        component: AdminServicePage
    },
    {
        path: '/admin/single-page/service-mobile',
        exact: true,
        admin: true,
        component: AdminServicePage
    },
    {
        path: '/admin/single-page/service-ui',
        exact: true,
        admin: true,
        component: AdminServicePage
    },
    {
        path: '/admin/single-page/service-branding',
        exact: true,
        admin: true,
        component: AdminServicePage
    },
    {
        path: '/admin/single-page/service-illustration',
        exact: true,
        admin: true,
        component: AdminServicePage
    },
    {
        path: '/admin/single-page/service-market',
        exact: true,
        admin: true,
        component: AdminServicePage
    },
    {
        path: '/admin/single-page/hosting',
        exact: true,
        admin: true,
        component: AdminHosting
    },
    {
        path: '/admin/single-page/wp-service',
        exact: true,
        admin: true,
        component: AdminWPServiceServer
    },
    {
        path: '/admin/legal',
        exact: true,
        admin: true,
        component: AdminPrivacy
    },
    {
        path: '/portfolio/:type',
        exact: true,
        auth: false,
        component: SinglePortfolio
    },
    {
        path: '/no/portefolje/:type',
        exact: true,
        auth: false,
        component: SinglePortfolio
    },
    {
        path: '',
        exact: true,
        auth: false,
        component: NoMatch
    }
];

export default routes;